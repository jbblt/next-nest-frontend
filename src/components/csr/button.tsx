"use client";

import styled from "styled-components";
import { glowPulsation } from "@/components/csr/animations/glowPulsation";

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  ${({ theme }) =>
    glowPulsation(theme, { mode: "default", type: "primary", synced: true })}

  &:hover {
    ${({ theme }) =>
      glowPulsation(theme, { mode: "hover", type: "primary", synced: true })}
  }
`;

export default Button;
