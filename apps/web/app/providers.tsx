"use client";

import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#007aff",
  },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
