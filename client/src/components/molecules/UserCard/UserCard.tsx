import React from 'react';
import { Link } from 'react-router-dom';
import { IUserModel } from '@models/User/UserModel';
import * as S from './StyledUserCard';
import { H2 } from '@atoms/H2/H2';
import { Span } from '@atoms/Span/Span';
import { Button } from '@atoms/Button/Button';
import { theme } from '@theme/mainTheme';
import { buildLink } from '@helpers/NavigationHelper';
import { routes } from '@routes/index';

interface IProps {
    user: IUserModel;
}

const UserCard = ({ user }: IProps): React.ReactElement => {
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
                            <Link to={buildLink(routes.userDetails, [{ key: ':userId', value: user.id }])} style={{textDecoration: 'none'}}>
                                <Button>See more</Button>
                            </Link>
                        </S.ButtonWrapper>
                    </S.InnerWrapper>
                </S.ContentWrapper>
            </S.OverlayWrapper>
        </S.Wrapper>
    )
}

export default UserCard





