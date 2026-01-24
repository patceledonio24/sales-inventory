"use client";

import * as React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Stack,
  Divider,
} from "@mui/material";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!res || res.error) {
        setError("Invalid email or password.");
        setLoading(false);
        return;
      }

      router.replace("/");
      router.refresh();
    } catch {
      setError("Login failed. Please try again.");
      setLoading(false);
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Stack spacing={3} alignItems="center">
          {/* Logo */}
          <Box sx={{ mb: 1 }}>
            <Image
              src="/mr-liempo-logo.png"
              alt="Mr. Liempo"
              width={72}
              height={72}
              priority
              style={{
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Title */}
          <Box textAlign="center">
            <Typography variant="h5" fontWeight={800}>
              Sales Inventory System
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              Sign in to continue
            </Typography>
          </Box>

          <Divider sx={{ width: "100%" }} />

          {error && (
            <Alert severity="error" sx={{ width: "100%" }}>
              {error}
            </Alert>
          )}

          {/* Form */}
          <Box component="form" onSubmit={onSubmit} sx={{ width: "100%" }}>
            <Stack spacing={2}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                fullWidth
                required
              />

              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                fullWidth
                required
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  mt: 0.5,
                  borderRadius: 2,
                  py: 1.2,
                  fontWeight: 600,
                }}
              >
                {loading ? (
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CircularProgress size={18} />
                    <span>Signing in…</span>
                  </Stack>
                ) : (
                  "Sign in"
                )}
              </Button>
            </Stack>
          </Box>

          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Mr. Liempo
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
