import produce from 'immer';
import { UserActionUnion } from '@redux/User/UserActions';
import { IUserState } from '@redux/User/UserInterfaces';
import { UserTypes } from '@redux/User/UserTypes';
import UserModel from '@models/User/UserModel';

const initialState: IUserState = {
  data: undefined,
  isLoading: false,
  isLoaded: false
};

function userReducer(state = initialState, action: UserActionUnion): IUserState {
  return produce(state, (draft) => {
    switch (action.type) {
      case UserTypes.USER: {
        draft.isLoading = true;
        break;
      }

      case UserTypes.USER_SUCCESS: {
        draft.data = UserModel.build(action.payload.data);
        draft.isLoading = false;
        draft.isLoaded = true;
        break;
      }

      case UserTypes.USER_FAILURE: {
        draft.isLoading = false;
        break;
      }
    }
  });
}

export default userReducer;
