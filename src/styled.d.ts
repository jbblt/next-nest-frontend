import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      light: string;
      highlight: string;
      accent: string;
      lighter: string;
      dark: string;
      darker: string;
    };
    backgroundColors: {
      primary: string;
      secondary: string;
      navbar: string;
      card: string;
    };
  }
}
