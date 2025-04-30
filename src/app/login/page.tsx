"use client";

import { signIn } from "next-auth/react";
import styled from "styled-components";
import Button from "@/components/csr/button";
import { useForm } from "react-hook-form";
import { useState } from "react";

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
  box-shadow: ${({ theme }) => theme.effects.glowPrimary};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 320px;
  #divider {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  }
  div {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.backgroundColors.secondary};
  color: ${({ theme }) => theme.colors.light};
`;

const ErrorText = styled.span`
  color: red;
  font-size: 0.85rem;
  width: 100%;
  text-align: center;
`;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();
  const [authError, setAuthError] = useState<string | null>(null);

  const handleLogin = async (data: { email: string; password: string }) => {
    const loginResult = await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/",
      redirect: false,
    });
    if (loginResult?.error) {
      setAuthError("Identifiants incorrects");
    } else {
      window.location.href = loginResult?.url || "/";
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <h2>Se connecter</h2>

        <div>
          <h3>Test user :</h3>
          <span>Email: test@example.com</span>
          <br />
          <span>Password: password123</span>
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Input
            type="email"
            autoComplete={"email"}
            placeholder="Email"
            {...register("email", {
              required: "Email requis",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Email invalide",
              },
            })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

          <Input
            type="password"
            placeholder="Mot de passe"
            autoComplete={"current-password"}
            {...register("password", { required: "Mot de passe requis" })}
          />
          {errors.password && <ErrorText>{errors.password?.message}</ErrorText>}

          <Button type="submit">Se connecter</Button>
          {authError && <ErrorText>{authError}</ErrorText>}
        </form>
        <span id={"divider"} />
        <div>
          <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
            Se connecter avec Google
          </Button>
        </div>
      </LoginBox>
    </LoginContainer>
  );
}
