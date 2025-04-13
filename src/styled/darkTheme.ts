import { DefaultTheme } from "styled-components";
import { baseColors } from "@/styled/colors";
import { hexToRgba } from "@/styled/utils/colors-helpers";

export const darkTheme: DefaultTheme = {
  backgroundColors: {
    primary: baseColors.darker,
    secondary: baseColors.darker,
    navbar: baseColors.darker,
    card: baseColors.dark,
  },
  colors: baseColors,
  effects: {
    glowPrimary: `0 0 12px ${hexToRgba(baseColors.primary, 0.6)}`,
    glowSecondary: `0 0 12px ${hexToRgba(baseColors.secondary, 0.6)}`,
    glowHover: `0 0 18px ${hexToRgba(baseColors.highlight, 0.8)}`,
  },
};
