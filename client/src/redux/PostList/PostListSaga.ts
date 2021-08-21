import { call, put, takeLatest } from 'redux-saga/effects';
import PostModel, { IPostModelDTO } from '@models/Post/PostModel';
import { PostListTypes } from '@redux/PostList/PostListTypes';
import { IHttpResponseList } from '@interfaces/HttpInterface';
import { PostListAction } from '@redux/PostList/PostListActions';

function* handlePostList(action: { type: string; payload: { id: string } }) {
  try {
    const response: IHttpResponseList<IPostModelDTO> = yield call(PostModel.fetchPostList, {
      params: {
        userId: action.payload.id
      }
    });
    yield put(PostListAction.postListSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(PostListAction.postListFailure());
  }
}

export default function* postListSaga() {
  yield takeLatest(PostListTypes.POST_LIST, handlePostList);
}
