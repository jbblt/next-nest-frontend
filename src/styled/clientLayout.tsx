"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styled/globalStyles";
import { darkTheme } from "@/styled/darkTheme";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
