"use client";

import styled from "styled-components";
import Link from "next/link";
import { ReactNode, Suspense } from "react";
import { Spinner } from "@/components/csr/Spinner";
import { glowPulsation } from "@/components/csr/animations/glowPulsation";
import { UserMenu } from "@/components/csr/UserMenu";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 1rem 2rem;
  ${({ theme }) =>
    glowPulsation(theme, {
      type: "primary",
      mode: "default",
      synced: false,
      direction: "bottom",
    })}

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.light};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 2rem;
  align-content: center;
  justify-content: center;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  height: 100%;
`;
export const Footer = styled.footer`
  display: flex;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColors.secondary};
  ${({ theme }) =>
    glowPulsation(theme, {
      type: "primary",
      mode: "default",
      synced: false,
      direction: "top",
    })}
  color: ${({ theme }) => theme.colors.light};
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutContainer>
      <Header>
        <Link href="/">Home Page</Link>
        <ul>
          <li>
            <Link href="/trending-repos">Trending Repos</Link>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Header>
      <Main>
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </Main>
      <Footer>Footer</Footer>
    </LayoutContainer>
  );
}
