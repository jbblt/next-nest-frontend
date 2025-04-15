"use client";

import { signIn } from "next-auth/react";
import styled from "styled-components";
import Button from "@/components/csr/button";

const LoginContainer = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColors.primary};
  color: ${({ theme }) => theme.colors.accent};
`;

const LoginBox = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.backgroundColors.card};
  box-shadow: ${({ theme }) => theme.effects.glowSecondary};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginBox>
        <h2>Se connecter</h2>
        <Button onClick={() => signIn("google")}>
          Se connecter avec Google
        </Button>
      </LoginBox>
    </LoginContainer>
  );
}
