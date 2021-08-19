import userListReducer from '@redux/UserList/UserListReducer';
import userListSaga from '@redux/UserList/UserListSaga';

const UserListModule = {
  id: 'userList',
  reducerMap: {
    userList: userListReducer
  },
  sagas: [userListSaga]
};

export default UserListModule;
