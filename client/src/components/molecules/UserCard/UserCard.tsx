import React from 'react';
import { IUserModel } from '@models/User/UserModel';
import * as S from './StyledUserCard';
import { H2 } from '@atoms/H2/H2';
import { Span } from '@atoms/Span/Span';
import { Button } from '@atoms/Button/Button';
import { theme } from '@theme/mainTheme';

interface IProps {
    user: IUserModel;
}

const UserCard = ({ user }: IProps): React.ReactElement => {
    console.log(user)
    return (
        <S.Wrapper>
            <S.Avatar background={user.img} />
            <S.OverlayWrapper>
                <S.ContentWrapper>
                    <S.InnerWrapper>
                        <H2>{user.name}</H2>
                        <Span>{user.website}</Span>
                        <S.AboutUserWrapper>
                            <Span color={theme.colors.white}>About me:</Span>
                            <Span>Working in {user.company.name} as {user.company.catchPhrase} in {user.address.city}</Span>
                        </S.AboutUserWrapper>
                        <S.ButtonWrapper>
                            <Button>See more</Button>
                        </S.ButtonWrapper>
                    </S.InnerWrapper>
                </S.ContentWrapper>
            </S.OverlayWrapper>
        </S.Wrapper>
    )
}

export default UserCard





