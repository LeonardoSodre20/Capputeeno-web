"use client";

import Header from "@/components/Header";
import { GlobalStyle } from "@/theme/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <GlobalStyle />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
