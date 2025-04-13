import { css, keyframes, DefaultTheme } from "styled-components";

const pulseGlow = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.03);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
`;

type GlowType = "primary" | "secondary";
type GlowMode = "default" | "hover";
interface GlowOptions {
  type?: GlowType;
  mode?: GlowMode;
  synced?: boolean;
}

/**
 * Pulsation glow animation
 * @param theme - styled-components Theme
 * @param type - Glow type : primary or secondary
 * @param mode - application mode : default (permanent) or hover only
 * @param synced - if true, the animation will be synced with the parent element
 */
export const glowPulsation = (
  theme: DefaultTheme,
  { type = "primary", mode = "default", synced = false }: GlowOptions = {},
) => {
  const glowColor =
    type === "secondary"
      ? theme.effects.glowSecondary
      : theme.effects.glowPrimary;

  const animation = css`
    animation: ${pulseGlow} 3s ease-in-out infinite;
    ${synced &&
    css`
      animation-delay: 0s;
      animation-fill-mode: both;
    `}
  `;

  if (mode === "hover") {
    return css`
      position: relative;
      z-index: 0;

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        border-radius: inherit;
        box-shadow: ${glowColor};
        opacity: 0;
        transform: scale(1);
        transition: all 0.3s ease;
      }

      &:hover::after {
        opacity: 1;
        ${animation}
      }
    `;
  }

  return css`
    position: relative;
    z-index: 0;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      border-radius: inherit;
      box-shadow: ${glowColor};
      ${animation}
    }
  `;
};
