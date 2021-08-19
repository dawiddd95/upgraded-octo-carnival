import { IUserModel } from '@models/User/UserModel';

export interface IUserListOwnState {
  userList: IUserListState;
}

export interface IUserListState {
  data: IUserModel[];
  isLoading: boolean;
  isLoaded: boolean;
}
