import { baseColors } from "@/styled/colors";
import { hexToRgba } from "@/styled/utils/colors-helpers";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  backgroundColors: {
    primary: baseColors.lighter,
    secondary: baseColors.lighter,
    navbar: baseColors.lighter,
    card: baseColors.light,
  },
  colors: baseColors,
  effects: {
    glowPrimary: `0 0 10px ${hexToRgba(baseColors.primary, 0.4)}`,
    glowSecondary: `0 0 10px ${hexToRgba(baseColors.secondary, 0.4)}`,
    glowHover: `0 0 12px ${hexToRgba(baseColors.highlight, 0.5)}`,
  },
};
