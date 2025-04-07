"use client";

import styled from "styled-components";
import Link from "next/link";
import { ReactNode, Suspense } from "react";
import { Spinner } from "@/components/ui/Spinner";

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
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.backgroundColors.navbar};
  box-shadow: ${({ theme }) => theme.effects.glowSecondary};
  ul {
    display: flex;
    list-style: none;
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
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.backgroundColors.secondary};
  box-shadow: ${({ theme }) => theme.effects.glowPrimary};
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
        </ul>
      </Header>
      <Main>
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </Main>
      <Footer>Footer</Footer>
    </LayoutContainer>
  );
}
