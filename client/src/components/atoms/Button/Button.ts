import styled from 'styled-components'

export const Button = styled.button`
    background-color: #001E36;
    color: ${({ theme }) => theme.colors.white};
    outline: 0;
    padding: 1.5rem 3rem;
    border: 0;
    border-radius: 0.4rem;
    cursor: pointer;
    display: flex;
    align-items: center;
`