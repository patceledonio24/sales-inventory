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
  IconButton,
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
  useMediaQuery,
  useTheme,
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
import MenuIcon from "@mui/icons-material/Menu";

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
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isAuthed = status === "authenticated";
  const role = (session?.user as any)?.role as "ADMIN" | "STAFF" | undefined;
  const isAdmin = isAuthed && role === "ADMIN";

  const [mounted, setMounted] = React.useState(false);
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const [storeChoice, setStoreChoice] = React.useState<StoreChoice>("MR_LIEMPO");

  React.useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(MODE_KEY);
      if (stored === "light" || stored === "dark") setMode(stored);
    } catch {}
  }, []);

  const toggleMode = () => {
    const next = mode === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(MODE_KEY, next);
    } catch {}
    setMode(next);
    window.location.reload();
  };

  React.useEffect(() => {
    if (!isAdmin) return;
    try {
      const saved = localStorage.getItem(STORE_KEY) as StoreChoice | null;
      if (saved === "MR_LIEMPO" || saved === "COMMISSARY") setStoreChoice(saved);
    } catch {}
  }, [isAdmin]);

  const handleStoreChange = (next: StoreChoice) => {
    setStoreChoice(next);
    try {
      localStorage.setItem(STORE_KEY, next);
    } catch {}
  };

  // ✅ MR_LIEMPO navigation:
  // - Products is now visible to BOTH ADMIN and STAFF
  // - Audit + Reports remain ADMIN-only
  const navItemsMrLiempo = [
    { href: "/", label: "Home", icon: <HomeIcon /> },
    { href: "/input/inventory", label: "Inventory Input", icon: <InventoryIcon /> },
    ...(isAdmin ? [{ href: "/input/pricing", label: "Pricing", icon: <PriceIcon /> }] : []),
    { href: "/input/remittance", label: "Remittance", icon: <PaymentsIcon /> },
    { href: "/input/expenses", label: "Petty Cash / Expenses", icon: <ReceiptLongIcon /> },

    // ✅ visible to both roles
    { href: "/input/products", label: "Products", icon: <CategoryIcon /> },

    // ✅ admin-only
    ...(isAdmin
      ? [
          { href: "/audit", label: "Audit Log", icon: <FactCheckIcon /> },
          { href: "/reports/weekly", label: "Reports", icon: <BarChartIcon /> },
        ]
      : []),
  ];

  const navItemsCommissary = [{ href: "/", label: "Commissary Home", icon: <HomeIcon /> }];
  const navItems = isAdmin && storeChoice === "COMMISSARY" ? navItemsCommissary : navItemsMrLiempo;

  const isLoginPage = pathname === "/login";
  if (isLoginPage) {
    return (
      <Box sx={{ minHeight: "100vh" }}>
        <CssBaseline />
        <Paper
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

  const drawerContent = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.href}
            component={Link}
            href={item.href}
            selected={pathname === item.href}
            onClick={() => isMobileOrTablet && setMobileOpen(false)}
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
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Bar */}
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 }, gap: 1.5 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            {isMobileOrTablet && (
              <IconButton onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}

            <Typography variant="h6" noWrap sx={{ display: { xs: "none", sm: "block" } }}>
              Sales Inventory App
            </Typography>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={1} alignItems="center">
            {isAdmin && (
              <>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  <Avatar src={storeMeta.logo} alt={storeMeta.label} />
                  <Typography fontWeight={700} noWrap>
                    {storeMeta.label}
                  </Typography>
                </Stack>

                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <Select
                    value={storeChoice}
                    onChange={(e) => handleStoreChange(e.target.value as StoreChoice)}
                  >
                    <MenuItem value="MR_LIEMPO">Mr. Liempo</MenuItem>
                    <MenuItem value="COMMISSARY">Commissary</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}

            {isAuthed && <ThemeToggle mounted={mounted} mode={mode} onToggle={toggleMode} />}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      {isMobileOrTablet ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{ [`& .MuiDrawer-paper`]: { width: drawerWidth } }}
        >
          <Toolbar />
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{ width: drawerWidth, [`& .MuiDrawer-paper`]: { width: drawerWidth } }}
        >
          <Toolbar />
          {drawerContent}
        </Drawer>
      )}

      {/* Main */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 2.5, md: 3 },
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
