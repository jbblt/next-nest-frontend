"use client";

import styled from "styled-components";

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
  box-shadow: ${({ theme }) => theme.effects.glowPrimary};

  &:hover {
    box-shadow: ${({ theme }) => theme.effects.glowHover};
    transform: scale(1.05);
  }
`;

export default Button;
