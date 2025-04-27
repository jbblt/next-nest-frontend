import { createGlobalStyle } from "styled-components";
import { jakarta } from "./font";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        color: ${({ theme }) => theme.colors.light};
        background-color: ${({ theme }) => theme.backgroundColors.primary};
        padding: 0;
        margin: 0;
        font-family: ${jakarta.style.fontFamily};
        overflow-x: hidden;
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
