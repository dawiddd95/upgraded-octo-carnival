import { call, put, takeLatest } from 'redux-saga/effects';
import PostModel, { IPostModelDTO } from '@models/Post/PostModel';
import { IHttpResponse } from '@interfaces/HttpInterface';
import { PostAction } from '@redux/Post/PostActions';
import { PostTypes } from '@redux/Post/PostTypes';

function* handlePost(action: { type: string; payload: { id: string } }) {
  try {
    const response: IHttpResponse<IPostModelDTO> = yield call(PostModel.fetchPost, action.payload.id);
    yield put(PostAction.postSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(PostAction.postFailure());
  }
}

export default function* postSaga() {
  yield takeLatest(PostTypes.POST, handlePost);
}
