import styled from 'styled-components'
import userBackground from '@assets/images/user-bg.jpg';
import { Span } from '@atoms/Span/Span';

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`

export const InnerWrapper = styled.div`
    position: relative;
`

export const HeroWrapper = styled.div`
    height: 54.2rem;
    margin: 0;
    position: relative;
    overflow: hidden;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    :before {
        content: '';
        opacity: 0.1;
        background-color: #fff;
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
    }
`

export const ContentWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    background: url(${userBackground});
    transform: skewY(-4.2deg);
    transform-origin: 0 0;
    background-size: cover;
    background-position: center;
    opacity: 0.7;
`

export const IntroduceWrapper = styled.div`
    position: absolute;
    width: 100%;
    bottom: 12rem;
    left: 40rem;
    display: flex;
    flex-direction: column;
`

export const SpansWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const ExtendSpan = styled(Span)`
    margin: 0 1rem;
`

export const WebsiteWrapper = styled.div`
    margin-top: 3rem;
`

export const UserWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 30rem;

    :before {
        content: '';
        opacity: 0.1;
        background-color: #fff;
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
    }
`

export const UserInnerWrapper = styled.div`
    width: auto;
    padding: 0 8rem;
`

type UserImgProps = {
    background: string;
};

export const UserImg = styled.div<UserImgProps>`
    width: 30rem;
    height: 40rem;
    background-image: ${({ background }) => `url(${background})`};
    background-size: cover;
    background-position: center;
    position: absolute;
    top: -27rem;
`

export const UserDetails = styled.div`
    width: auto;
    padding: 20rem 8rem 0 8rem;
    display: flex;
    flex-direction: row;
`