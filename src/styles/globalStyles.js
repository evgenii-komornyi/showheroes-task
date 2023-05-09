import { createGlobalStyle } from 'styled-components';
import NouvelRegular from '../fonts/Nouvel-Regular.ttf';
import NouvelBold from '../fonts/Nouvel-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Nouvel Regular';
        src: url(${NouvelRegular}) format('truetype');
    }

    @font-face {
        font-family: 'Nouvel Bold';
        src: url(${NouvelBold}) format('truetype');
    }

    html {
        font-size: 16px;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Nouvel Regular', sans-serif;
        background-color: #000000;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Nouvel Bold', sans-serif;
    }
`;
