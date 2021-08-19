import React from 'react';
import { IUserModel } from '@models/User/UserModel';

interface IProps {
    user: IUserModel;
}

const UserCard = ({ user }: IProps): React.ReactElement => {
    console.log(user)
    return (
        <div>sdsd</div>
    )
}

export default UserCard





