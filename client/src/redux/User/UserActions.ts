import { ActionUnion, createAction } from '@helpers/ActionHelper';
import { IUserModelDTO } from '@models/User/UserModel';
import { UserTypes } from '@redux/User/UserTypes';

export const UserAction = {
  user: (id: string) => createAction(UserTypes.USER, { id }),
  userSuccess: (data: IUserModelDTO) => createAction(UserTypes.USER_SUCCESS, { data }),
  userFailure: () => createAction(UserTypes.USER_FAILURE)
};

export type UserActionUnion = ActionUnion<typeof UserAction>;
