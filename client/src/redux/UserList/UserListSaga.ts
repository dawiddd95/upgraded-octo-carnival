import { call, put, takeLatest } from 'redux-saga/effects';
import { IHttpResponseList } from '@interfaces/HttpInterface';
import UserModel, { IUserModelDTO } from '@models/User/UserModel';
import { UserListAction } from '@redux/UserList/UserListActions';
import { UserListTypes } from '@redux/UserList/UserListTypes';

function* handleUserList() {
  try {
    const response: IHttpResponseList<IUserModelDTO> = yield call(UserModel.fetchUserList);
    yield put(UserListAction.userListSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(UserListAction.userListFailure());
  }
}

export default function* userListSaga() {
  yield takeLatest(UserListTypes.USER_LIST, handleUserList);
}
