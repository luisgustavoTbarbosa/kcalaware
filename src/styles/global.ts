import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #000000;
        --light-gray: #A5A5A5;
        --dark-gray: #7C7C7C;
        --dark-purple: #8A4E7D;
        --black-purple: #572C57;
        --green: #7CBC71;
        --salmon: #E26972;
        --button-gradient: linear-gradient(180deg, #E26972 0%, #9F5F91 99.99%, #572C57 100%);
        --gradient: linear-gradient(180deg, #E26972 0%, #9F5F91 66.15%, #572C57 100%);
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Signika', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`