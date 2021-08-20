import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 400px;
    height: 450px;
    margin-top: 20rem;
    position: relative;
    margin-right: 2rem;
`

type AvatarProps = {
    background: string;
};

export const Avatar = styled.div<AvatarProps>`
    position: absolute;
    width: 200px;
    height: 200px;
    top: -25%;
    left: calc(50% - 100px); 
    border: 8px solid #383C4F;
    border-radius: 50%;
    background-image: ${({ background }) => `url(${background})`};
    background-size: cover;
    z-index: 1;
`

export const OverlayWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    color: black;

    :before {
        content: '';
        opacity: 0.1;
        background-color: #fff;
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        border-radius: 1.5rem;
    }
`

export const ContentWrapper = styled.div`
    position: absolute;
    color: black;
    padding: 12rem 4rem 0 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InnerWrapper = styled.div`
    width: auto;
    text-align: center;
`

export const AboutUserWrapper = styled.div`
    max-width: 30rem;
    margin-top: 4rem;
    padding-bottom: 4rem;
    border-bottom: 2px solid #343A4F;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ButtonWrapper = styled.div` 
    margin: 2rem 0;
`