import { IUserListState } from '@redux/UserList/UserListInterfaces';
import { UserListActionUnion } from '@redux/UserList/UserListActions';
import produce from 'immer';
import { UserListTypes } from '@redux/UserList/UserListTypes';
import UserModel from '@models/User/UserModel';

const initialState: IUserListState = {
  data: [],
  isLoading: false,
  isLoaded: false
};

function userListReducer(state = initialState, action: UserListActionUnion): IUserListState {
  return produce(state, (draft) => {
    switch (action.type) {
      case UserListTypes.USER_LIST: {
        draft.isLoading = true;
        break;
      }

      case UserListTypes.USER_LIST_SUCCESS: {
        draft.data = action.payload.data.map((item) => UserModel.build(item));
        draft.isLoading = false;
        draft.isLoaded = true;

        break;
      }

      case UserListTypes.USER_LIST_FAILURE: {
        draft.isLoading = false;
      }
    }
  });
}

export default userListReducer;
