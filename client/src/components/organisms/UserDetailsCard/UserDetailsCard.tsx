import React from 'react'
import { IUserModel } from '@models/User/UserModel';
import * as S from './StyledUserDetailsCard'
import { H2 } from '@atoms/H2/H2';
import { Span } from '@atoms/Span/Span';
import { theme } from '@theme/mainTheme';


interface IProps {
    user: IUserModel;
}

const UserDetailsCard = ({ user }: IProps): React.ReactElement => {
    return (
        <S.Wrapper>
            <S.InnerWrapper>
                <S.HeroWrapper>
                    <S.ContentWrapper>
                        <S.ImgWrapper />
                        <S.IntroduceWrapper>
                            <H2 size='big'>{user.name}</H2>
                            <S.SpansWrapper>
                                <Span 
                                    size='big' 
                                    color={theme.colors.white}
                                >
                                    <Span
                                        size='big' 
                                        color={theme.colors.white}
                                    >
                                        {user.company.catchPhrase}
                                    </Span> 
                                    <S.ExtendSpan
                                        size='big' 
                                        color={theme.colors.white}
                                    >
                                        in
                                    </S.ExtendSpan> 
                                    <Span
                                        size='big' 
                                        color={theme.colors.white}
                                    >
                                        {user.company.name}
                                    </Span>
                                </Span>
                            </S.SpansWrapper>
                            <S.WebsiteWrapper>
                                <Span 
                                    color={theme.colors.white} 
                                    size='medium'
                                >
                                    {user.website}
                                </Span>
                            </S.WebsiteWrapper>
                        </S.IntroduceWrapper>
                    </S.ContentWrapper>
                </S.HeroWrapper>
                <S.UserWrapper>
                    <S.UserInnerWrapper>
                        <S.UserImg background={user.img} />
                    </S.UserInnerWrapper>
                </S.UserWrapper>
            </S.InnerWrapper>
        </S.Wrapper>
    )
}

export default UserDetailsCard