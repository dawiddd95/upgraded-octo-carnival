import userReducer from '@redux/User/UserReducer';
import userSaga from '@redux/User/UserSaga';

const UserModule = {
  id: 'user',
  reducerMap: {
    user: userReducer
  },
  sagas: [userSaga]
};

export default UserModule;
