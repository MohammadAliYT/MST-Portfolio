// app/providers.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // defaultTheme="light"
    <NextThemesProvider attribute="class">{children}</NextThemesProvider>
  );
}
