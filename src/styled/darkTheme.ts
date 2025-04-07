import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  backgroundColors: {
    primary: "#050505",
    secondary: "#0A0F0D",
    navbar: "#040404",
    card: "#121212",
  },
  colors: {
    light: "#EDEDED",
    primary: "#FF007A",
    secondary: "#00FF9F",
    highlight: "#FF44CC",
    accent: "#3EF8B0",
  },
  effects: {
    glowPrimary: "0px 0px 10px rgba(255, 0, 122, 0.6)", // Glow rose néon
    glowSecondary: "0px 0px 10px rgba(0, 255, 159, 0.6)", // Glow vert néon
    glowHover: "0px 0px 15px rgba(255, 68, 204, 0.8)", // Glow en hover
  },
};
