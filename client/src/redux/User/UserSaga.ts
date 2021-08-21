import { call, put, takeLatest } from 'redux-saga/effects';
import { IHttpResponse } from '@interfaces/HttpInterface';
import UserModel, { IUserModelDTO } from '@models/User/UserModel';
import { UserAction } from '@redux/User/UserActions';
import { UserTypes } from '@redux/User/UserTypes';

function* handleUser(action: { type: string; payload: { id: string } }) {
  try {
    const response: IHttpResponse<IUserModelDTO> = yield call(UserModel.fetchUser, action.payload.id);
    yield put(UserAction.userSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(UserAction.userFailure());
  }
}

export default function* userSaga() {
  yield takeLatest(UserTypes.USER, handleUser);
}
