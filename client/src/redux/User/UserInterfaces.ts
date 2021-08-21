import { IUserModel } from '@models/User/UserModel';

export interface IUserOwnState {
  user: IUserState;
}

export interface IUserState {
  data: IUserModel | undefined;
  isLoading: boolean;
  isLoaded: boolean;
}
