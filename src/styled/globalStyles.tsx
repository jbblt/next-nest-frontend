import { createGlobalStyle } from "styled-components";
import { poppins, merriweather } from "./font";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        color: ${({ theme }) => theme.colors.light};
        background-color: ${({ theme }) => theme.backgroundColors.primary};
        padding: 0;
        margin: 0;
        font-family: ${poppins.style.fontFamily};
    }

    h1, h2, h3, h4 {
        font-family: ${merriweather.style.fontFamily};
    }

    a {
        color: ${({ theme }) => theme.colors.light};
        text-decoration: none;
    }

    a:active {
        color: ${({ theme }) => theme.colors.secondary};
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
