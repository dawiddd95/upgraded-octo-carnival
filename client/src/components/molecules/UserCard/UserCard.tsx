import React from 'react';
import { IUserModel } from '@models/User/UserModel';
import * as S from './StyledUserCard';

interface IProps {
    user: IUserModel;
}

const UserCard = ({ user }: IProps): React.ReactElement => {
    console.log(user)
    return (
        <S.Wrapper>
            <S.Avatar background={user.img} />
            <S.OverlayWrapper>
                <S.InnerWrapper>
                    Inner Wrapper
                </S.InnerWrapper>
            </S.OverlayWrapper>
        </S.Wrapper>
    )
}

export default UserCard





