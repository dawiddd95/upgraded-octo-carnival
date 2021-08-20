import styled from 'styled-components'

export const Span = styled.span`
    color: ${({ color, theme }) => color || theme.colors.gray};
    font-size: 1.6rem;
    font-weight: 600;
`