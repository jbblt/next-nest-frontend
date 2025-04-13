"use client";
import styled from "styled-components";

export const WidgetWrapper = styled.div<{ size?: "XL" | "MD" | "SM" }>`
  padding: 2rem;
  flex: 0 0
    ${({ size }) =>
      size === "XL"
        ? "100%"
        : size === "MD"
          ? "600px"
          : size === "SM"
            ? "300px"
            : "100%"};
  max-width: ${({ size }) =>
    size === "XL"
      ? "100%"
      : size === "MD"
        ? "600px"
        : size === "SM"
          ? "300px"
          : "100%"};
  background: ${({ theme }) => theme.backgroundColors.card};
  box-shadow: ${({ theme }) => theme.effects.glo};
  border-radius: 1rem;
  transition: all 0.3s ease;
`;
