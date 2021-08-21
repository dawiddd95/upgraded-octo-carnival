import React from 'react';
import { Link } from 'react-router-dom';
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
    const { id, img, name, website, company, address } = user
    const { name: companyName, catchPhrase: companyCatchPhrase } = company
    const { city } = address

    return (
        <S.Wrapper>
            <S.Avatar background={img} />
            <S.OverlayWrapper>
                <S.ContentWrapper>
                    <S.InnerWrapper>
                        <H2>{name}</H2>
                        <Span>{website}</Span>
                        <S.AboutUserWrapper>
                            <Span color={theme.colors.white}>About me:</Span>
                            <Span>Working in {companyName} as {companyCatchPhrase} in {address.city}</Span>
                        </S.AboutUserWrapper>
                        <S.ButtonWrapper>
                            <Link 
                                to={`/user/${id}`} 
                                style={{textDecoration: 'none'}}
                            >
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





