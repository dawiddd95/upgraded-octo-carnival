import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 10rem 0;
`

export const PostsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

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
    padding: 0 8rem 8rem 8rem;
`