"use client";

import * as React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import AppShell from "@/components/app-shell";

type Mode = "light" | "dark";
const MODE_KEY = "mui-color-mode";

function useColorMode(): Mode {
  const [mode, setMode] = React.useState<Mode>("light");

  // Hydration-safe: server + first client render = "light"
  // Then on mount, read localStorage and apply saved mode.
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(MODE_KEY) as Mode | null;
      if (stored === "light" || stored === "dark") {
        setMode(stored);
        return;
      }

      // Optional default if nothing stored:
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

      const initial: Mode = prefersDark ? "dark" : "light";
      localStorage.setItem(MODE_KEY, initial);
      setMode(initial);
    } catch {
      // ignore storage errors
    }
  }, []);

  return mode;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemedApp>{children}</ThemedApp>
    </SessionProvider>
  );
}

function ThemedApp({ children }: { children: React.ReactNode }) {
  const mode = useColorMode();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: {
                  default: "#0b1220",
                  paper: "#0f172a",
                },
              }
            : {}),
        },
        shape: { borderRadius: 12 },
        typography: {
          fontFamily: [
            "Inter",
            "system-ui",
            "-apple-system",
            "Segoe UI",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
          ].join(","),
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppShell>{children}</AppShell>
    </ThemeProvider>
  );
}
