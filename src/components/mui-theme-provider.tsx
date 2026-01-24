"use client";

import * as React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useSession } from "next-auth/react";

type Mode = "light" | "dark";

type ColorModeContextValue = {
  mode: Mode;
  toggle: () => void;
  setMode: (mode: Mode) => void;
  canToggle: boolean;
};

const ColorModeContext = React.createContext<ColorModeContextValue | null>(null);

const STORAGE_KEY = "mui-color-mode";

export function useColorMode() {
  const ctx = React.useContext(ColorModeContext);
  if (!ctx) throw new Error("useColorMode must be used within MuiThemeProvider");
  return ctx;
}

/**
 * MUI theme provider for Next.js App Router.
 *
 * Key properties:
 * - SSR-safe: initial mode is always "light" to avoid hydration mismatch.
 * - Admin-only: only ADMIN users can toggle dark mode; others are forced to light.
 * - Persists ADMIN selection in localStorage.
 */
export function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const isAuthed = status === "authenticated";
  const isAdmin = isAuthed && (session?.user as any)?.role === "ADMIN";

  // SSR + first client render must match => "light".
  const [mode, setModeState] = React.useState<Mode>("light");

  React.useEffect(() => {
    if (!isAuthed) return;
    if (!isAdmin) {
      localStorage.removeItem(STORAGE_KEY);
      setModeState("light");
      return;
    }

    const saved = localStorage.getItem(STORAGE_KEY) as Mode | null;
    setModeState(saved === "dark" ? "dark" : "light");
  }, [isAuthed, isAdmin]);

  const setMode = React.useCallback(
    (next: Mode) => {
      if (!isAdmin) return;
      localStorage.setItem(STORAGE_KEY, next);
      setModeState(next);
    },
    [isAdmin]
  );

  const toggle = React.useCallback(() => {
    setMode(mode === "dark" ? "light" : "dark");
  }, [mode, setMode]);

  const theme = React.useMemo(() => {
    return createTheme({
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
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              border: "1px solid rgba(148, 163, 184, 0.22)",
            },
          },
        },
      },
    });
  }, [mode]);

  const ctxValue = React.useMemo<ColorModeContextValue>(
    () => ({
      mode,
      toggle,
      setMode,
      canToggle: !!isAdmin,
    }),
    [mode, toggle, setMode, isAdmin]
  );

  return (
    <ColorModeContext.Provider value={ctxValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
