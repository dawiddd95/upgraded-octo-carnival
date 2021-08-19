import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { IUserModel } from '@models/User/UserModel';
import { IUserListOwnState, IUserListState } from '@redux/UserList/UserListInterfaces';
import { UserListAction } from '@redux/UserList/UserListActions';
import Loader from '@atoms/Loader/Loader';
import UserCard from '@molecules/UserCard/UserCard';
import * as S from './StyledHomepage';


const Homepage = ({data, isLoading}: IUserListState): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserListAction.userList());
    }, [dispatch]);

    const renderUsers = (userList: IUserModel[]): React.ReactElement => (
        <S.Wrapper>
            {userList.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </S.Wrapper>
      );
    

    return isLoading ? <Loader /> : renderUsers(data)
};

const mapStateToProps = ({ userList }: IUserListOwnState) => ({
    ...userList,
});
  
export default compose<React.ComponentType>(connect(mapStateToProps))(Homepage);