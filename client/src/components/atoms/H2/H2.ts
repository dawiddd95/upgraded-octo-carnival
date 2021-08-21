import styled, { css } from 'styled-components'

interface H2Props {
    size?: string
}

export const H2 = styled.h2<H2Props>`
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.white};

    ${({ size }) => size === 'big' && css`
        font-size: 4.4rem;
    `}
`