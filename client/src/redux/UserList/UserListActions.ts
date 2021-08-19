import { ActionUnion, createAction } from '@helpers/ActionHelper';
import { UserListTypes } from '@redux/UserList/UserListTypes';
import { IUserModelDTO } from '@models/User/UserModel';

export const UserListAction = {
  userList: () => createAction(UserListTypes.USER_LIST),
  userListSuccess: (data: IUserModelDTO[]) => createAction(UserListTypes.USER_LIST_SUCCESS, { data }),
  userListFailure: () => createAction(UserListTypes.USER_LIST_FAILURE)
};

export type UserListActionUnion = ActionUnion<typeof UserListAction>;
