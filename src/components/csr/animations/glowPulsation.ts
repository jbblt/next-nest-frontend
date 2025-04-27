import { css, keyframes, DefaultTheme } from "styled-components";

const pulseGlow = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.01);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
`;

type GlowType = "primary" | "secondary";
type GlowMode = "default" | "hover";
type GlowDirection = "all" | "top" | "bottom";

interface GlowOptions {
  type?: GlowType;
  mode?: GlowMode;
  synced?: boolean;
  direction?: GlowDirection;
}

/**
 * GlowPulsation animation
 *
 * Generates a pulsing glow animation using a chosen theme color.
 * Options let you customize when and how the glow appears.
 *
 * @param theme - The styled-components theme object
 * @param options - GlowOptions:
 * - `type`: "primary" | "secondary" — pick a color from your theme
 * - `mode`: "default" | "hover" — whether to animate always or only on hover
 * - `synced`: sync timing with other components (optional)
 * - `direction`: "all" | "top" | "bottom" — where the shadow/glow appears
 *
 * @returns CSS styles that can be injected into styled-components
 *
 * @example
 * // Permanent pink glow at the bottom only:
 * ${({ theme }) => glowPulsation(theme, { type: "primary", direction: "bottom" })}
 *
 * // Green hover glow at the top:
 * ${({ theme }) => glowPulsation(theme, { type: "secondary", mode: "hover", direction: "top" })}
 */
export const glowPulsation = (
  theme: DefaultTheme,
  {
    type = "primary",
    mode = "default",
    synced = false,
    direction = "all",
  }: GlowOptions = {},
) => {
  const color =
    type === "secondary" ? theme.colors.secondary : theme.colors.primary;

  const shadow = (() => {
    switch (direction) {
      case "top":
        return `0px -5px 10px ${color}`;
      case "bottom":
        return `0px 5px 10px ${color}`;
      default:
        return `0px 0px 10px ${color}`;
    }
  })();

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
        box-shadow: ${shadow};
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
      box-shadow: ${shadow};
      ${animation}
    }
  `;
};
