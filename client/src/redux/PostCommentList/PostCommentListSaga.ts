import { call, put, takeLatest } from 'redux-saga/effects';
import { IHttpResponseList } from '@interfaces/HttpInterface';
import PostCommentModel, { IPostCommentModelDTO } from '@models/PostComment/PostCommentModel';
import { PostCommentListAction } from '@redux/PostCommentList/PostCommentListActions';
import { PostCommentListTypes } from '@redux/PostCommentList/PostCommentListTypes';

function* handlePostCommentList(action: { type: string; payload: { id: string } }) {
  try {
    const response: IHttpResponseList<IPostCommentModelDTO> = yield call(PostCommentModel.fetchCommentList, {
      params: {
        postId: action.payload.id
      }
    });
    yield put(PostCommentListAction.postCommentListSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(PostCommentListAction.postCommentListFailure());
  }
}

export default function* postCommentListSaga() {
  yield takeLatest(PostCommentListTypes.POST_COMMENT_LIST, handlePostCommentList);
}
