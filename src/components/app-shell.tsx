"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Switch,
  Stack,
  FormControl,
  Select,
  MenuItem,
  Paper,
  Avatar,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory2";
import PriceIcon from "@mui/icons-material/LocalOffer";
import BarChartIcon from "@mui/icons-material/BarChart";
import CategoryIcon from "@mui/icons-material/Category";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const drawerWidth = 260;

type StoreChoice = "MR_LIEMPO" | "COMMISSARY";
const STORE_KEY = "admin-selected-store";
const MODE_KEY = "mui-color-mode";

const STORE_META: Record<StoreChoice, { label: string; logo: string }> = {
  MR_LIEMPO: { label: "Mr. Liempo", logo: "/mr-liempo-logo.png" },
  COMMISSARY: { label: "Commissary", logo: "/commissary-logo.png" },
};

function ThemeToggle(props: {
  mounted: boolean;
  mode: "light" | "dark";
  onToggle: () => void;
}) {
  const { mounted, mode, onToggle } = props;

  // Hydration-safe placeholder until mounted
  if (!mounted) {
    return (
      <Stack direction="row" spacing={1} alignItems="center" sx={{ opacity: 0.85 }}>
        <LightModeIcon />
        <Switch checked={false} disabled />
      </Stack>
    );
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      <Switch checked={mode === "dark"} onChange={onToggle} />
    </Stack>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  // Hooks must always run in the same order
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const isAuthed = status === "authenticated";
  const isAdmin = isAuthed && (session?.user as any)?.role === "ADMIN";

  const [mounted, setMounted] = React.useState(false);
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const [storeChoice, setStoreChoice] = React.useState<StoreChoice>("MR_LIEMPO");

  React.useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(MODE_KEY);
      if (stored === "light" || stored === "dark") setMode(stored);
    } catch {
      // ignore
    }
  }, []);

  const toggleMode = () => {
    const next = mode === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(MODE_KEY, next);
    } catch {
      // ignore
    }
    setMode(next);

    // Theme is derived from localStorage in Providers, so reload is the simplest.
    window.location.reload();
  };

  React.useEffect(() => {
    if (!isAdmin) return;
    try {
      const saved = localStorage.getItem(STORE_KEY) as StoreChoice | null;
      if (saved === "MR_LIEMPO" || saved === "COMMISSARY") setStoreChoice(saved);
    } catch {
      // ignore
    }
  }, [isAdmin]);

  const handleStoreChange = (next: StoreChoice) => {
    setStoreChoice(next);
    try {
      localStorage.setItem(STORE_KEY, next);
    } catch {
      // ignore
    }
  };

  // ✅ STAFF now includes Remittance + Expenses
  const navItemsMrLiempo = [
    { href: "/", label: "Home", icon: <HomeIcon /> },
    { href: "/input/inventory", label: "Inventory Input", icon: <InventoryIcon /> },
    { href: "/input/pricing", label: "Pricing", icon: <PriceIcon /> },

    // STAFF + ADMIN
    { href: "/input/remittance", label: "Remittance", icon: <PaymentsIcon /> },
    { href: "/input/expenses", label: "Petty Cash / Expenses", icon: <ReceiptLongIcon /> },

    // ADMIN only
    ...(isAdmin
      ? [
          { href: "/input/products", label: "Products", icon: <CategoryIcon /> },
          { href: "/audit", label: "Audit Log", icon: <FactCheckIcon /> },
          { href: "/reports/weekly", label: "Reports", icon: <BarChartIcon /> },
        ]
      : []),
  ];

  const navItemsCommissary = [{ href: "/", label: "Commissary Home", icon: <HomeIcon /> }];

  const navItems =
    isAdmin && storeChoice === "COMMISSARY" ? navItemsCommissary : navItemsMrLiempo;

  const renderMainContent = () => {
    if (isAdmin && storeChoice === "COMMISSARY") {
      return (
        <Box sx={{ maxWidth: 980 }}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h5" fontWeight={700}>
              Commissary Dashboard (Coming Soon)
            </Typography>
            <Typography sx={{ mt: 1 }}>
              You selected <strong>Commissary</strong>. This will have a different dashboard and
              sidebar. We’ll implement it later.
            </Typography>
            <Typography sx={{ mt: 1 }} color="text.secondary">
              Switch back to <strong>Mr. Liempo</strong> to use Inventory / Pricing / Reports.
            </Typography>
          </Paper>
        </Box>
      );
    }
    return children;
  };

  const isLoginPage = pathname === "/login";

  // LOGIN: no sidebar/topbar, but show theme toggle
  if (isLoginPage) {
    return (
      <Box sx={{ minHeight: "100vh" }}>
        <CssBaseline />

        <Paper
          elevation={0}
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: (t) => t.zIndex.modal + 1,
            px: 1.5,
            py: 0.75,
            borderRadius: 999,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <ThemeToggle mounted={mounted} mode={mode} onToggle={toggleMode} />
        </Paper>

        {children}
      </Box>
    );
  }

  const storeMeta = STORE_META[storeChoice];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Bar */}
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap>
            Sales Inventory App
          </Typography>

          <Stack direction="row" spacing={2.5} alignItems="center">
            {isAdmin && (
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar
                  src={storeMeta.logo}
                  alt={storeMeta.label}
                  sx={{
                    width: 40,
                    height: 40,
                    border: "1px solid rgba(0,0,0,0.12)",
                  }}
                />
                <Typography fontWeight={700} sx={{ lineHeight: 1 }}>
                  {storeMeta.label}
                </Typography>

                <FormControl size="small">
                  <Select
                    value={storeChoice}
                    onChange={(e) => handleStoreChange(e.target.value as StoreChoice)}
                    sx={{ minWidth: 160 }}
                  >
                    <MenuItem value="MR_LIEMPO">Mr. Liempo</MenuItem>
                    <MenuItem value="COMMISSARY">Commissary</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            )}

            {/* STAFF + ADMIN */}
            {isAuthed && <ThemeToggle mounted={mounted} mode={mode} onToggle={toggleMode} />}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth },
        }}
      >
        <Toolbar />
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.href}
                component={Link}
                href={item.href}
                selected={pathname === item.href}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>

          <Box sx={{ flexGrow: 1 }} />
          <Divider />

          <Box sx={{ p: 2 }}>
            <ListItemButton onClick={() => signOut({ callbackUrl: "/login" })}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Sign out" />
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>

      {/* Main */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {renderMainContent()}
      </Box>
    </Box>
  );
}
