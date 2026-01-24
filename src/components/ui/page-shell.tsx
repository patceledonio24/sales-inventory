"use client";

import * as React from "react";
import { Paper, Stack, Typography, Divider, Box, Snackbar, Alert } from "@mui/material";

export function usePageSnackbar() {
  const [snack, setSnack] = React.useState<{
    open: boolean;
    type: "success" | "error";
    message: string;
  }>({ open: false, type: "success", message: "" });

  const notifySuccess = React.useCallback((message: string) => {
    setSnack({ open: true, type: "success", message });
  }, []);

  const notifyError = React.useCallback((message: string) => {
    setSnack({ open: true, type: "error", message });
  }, []);

  const snackbar = (
    <Snackbar
      open={snack.open}
      autoHideDuration={3000}
      onClose={() => setSnack((s) => ({ ...s, open: false }))}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        severity={snack.type}
        variant="filled"
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
      >
        {snack.message}
      </Alert>
    </Snackbar>
  );

  return { notifySuccess, notifyError, snackbar };
}

export default function PageShell(props: {
  title: string;
  subtitle?: string;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
      <Paper
        sx={(theme) => {
          const isDark = theme.palette.mode === "dark";

          return {
            p: 2.5,
            borderRadius: 2,
            background: isDark
              ? "linear-gradient(180deg, rgba(14, 38, 54, 0.85), rgba(10, 24, 38, 0.85))"
              : "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(245,247,250,0.92))",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : theme.palette.divider}`,
            boxShadow: isDark ? "none" : theme.shadows[2],
          };
        }}
      >
        <Stack spacing={1.25}>
          <Typography variant="h6" fontWeight={800}>
            {props.title}
          </Typography>

          {props.subtitle && (
            <Typography variant="body2" color="text.secondary">
              {props.subtitle}
            </Typography>
          )}

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "stretch", md: "center" }}
            justifyContent="space-between"
            sx={{ mt: 1 }}
          >
            <Box>{props.headerLeft}</Box>
            <Box>{props.headerRight}</Box>
          </Stack>
        </Stack>
      </Paper>

      <Box sx={{ mt: 2 }}>{props.children}</Box>
    </Box>
  );
}

export function SectionCard(props: { title: string; tip?: string; children: React.ReactNode }) {
  return (
    <Paper
      sx={(theme) => {
        const isDark = theme.palette.mode === "dark";
        return {
          p: 2,
          borderRadius: 2,
          background: isDark ? "rgba(10, 16, 26, 0.7)" : theme.palette.background.paper,
          border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : theme.palette.divider}`,
          boxShadow: isDark ? "none" : theme.shadows[1],
        };
      }}
    >
      <Stack spacing={1.25}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1" fontWeight={800}>
            {props.title}
          </Typography>
          {props.tip && (
            <Typography variant="caption" color="text.secondary">
              {props.tip}
            </Typography>
          )}
        </Stack>

        <Divider
          sx={(theme) => ({
            borderColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : theme.palette.divider,
          })}
        />

        {props.children}
      </Stack>
    </Paper>
  );
}
