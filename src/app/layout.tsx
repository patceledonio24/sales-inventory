import type { Metadata } from "next";
import Providers from "./providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ProdBanner from "@/components/ProdBanner";

export const metadata: Metadata = {
  title: "Sales Inventory App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProd = process.env.NEXT_PUBLIC_APP_ENV === "prod";
  const bannerHeight = isProd ? 48 : 0;

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Providers>
            <ProdBanner />
            <div style={{ paddingTop: bannerHeight }}>{children}</div>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
