"use client";

import { Box } from "@mui/material";

export default function ProdBanner() {
  const env = process.env.NEXT_PUBLIC_APP_ENV;
  const label = process.env.NEXT_PUBLIC_DB_LABEL ?? "PROD";

  if (env !== "prod") return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20000, // higher than AppBar/Drawer
        bgcolor: "error.main",
        color: "common.white",
        py: 1,
        px: 2,
        textAlign: "center",
        fontWeight: 900,
        letterSpacing: 0.6,
        borderBottom: "3px solid",
        borderColor: "error.dark",
      }}
    >
      🚨 PRODUCTION MODE — {label} 🚨
    </Box>
  );
}
