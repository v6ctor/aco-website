import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

export const metadata: Metadata = {
  title: "TCG Dungeon",
  description: "Pokemon Discord Community for collectors, resellers, and anyone in between.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased relative min-h-screen">

        <div className="relative z-10">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
            <Analytics />
            <Toaster richColors position="bottom-right" />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}