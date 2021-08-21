import styled, { css } from 'styled-components'

interface ISpanProps {
    size?: string
}

export const Span = styled.span<ISpanProps>`
    color: ${({ color, theme }) => color || theme.colors.gray};
    font-size: 1.6rem;
    font-weight: 600;

    ${({ size }) => size === 'medium' && css`
        font-size: 2rem;
    `}

    ${({ size }) => size === 'big' && css`
        font-size: 2.4rem;
    `}
`