import { createGlobalStyle } from 'styled-components';
import background from '@assets/images/background.png';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        font-style: normal;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-color: #24283C;
        font-size: 1.6rem;
        background-image: url(${background});
        background-size: cover;
        font-family: 'Roboto';
    }
`;

export default GlobalStyle;