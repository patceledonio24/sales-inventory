"use client";

import * as React from "react";
import { Box } from "@mui/material";

export type ResponsiveTableProps = {
  /** The table element (e.g., MUI <Table />) */
  children: React.ReactNode;
  /** Minimum pixel width for the table to prevent column squeezing on small viewports */
  minWidth?: number;
  /** If provided, caps the scroll container height and enables sticky header patterns */
  maxHeight?: number | string;
};

/**
 * Global, consistent table responsiveness:
 * - Prevents column compression on small screens by enforcing a min width.
 * - Enables horizontal scrolling with iOS momentum scrolling.
 * - Does not change desktop appearance (only adds scroll when needed).
 */
export function ResponsiveTable({ children, minWidth = 980, maxHeight }: ResponsiveTableProps) {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        ...(maxHeight ? { maxHeight, overflowY: "auto" } : null),
        WebkitOverflowScrolling: "touch",
        overscrollBehaviorX: "contain",
      }}
    >
      <Box sx={{ minWidth }}>{children}</Box>
    </Box>
  );
}

/** Sticky first-column styles (use on TableCell / TableHead cell). */
export const stickyFirstColSx = (theme: any, zIndex: number) => ({
  position: "sticky" as const,
  left: 0,
  zIndex,
  backgroundColor: theme.palette.background.paper,
  // subtle separator so the sticky column is visually distinct while scrolling
  boxShadow:
    theme.palette.mode === "dark"
      ? "1px 0 0 rgba(255,255,255,0.10)"
      : "1px 0 0 rgba(0,0,0,0.08)",
});
