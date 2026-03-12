import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Under Control",
  description: "Plataforma central de soluções digitais para gestão empresarial e prestação de serviços.",
  icons: {
    icon: [
      { url: "/assets/undercontrol-icon.png", sizes: "32x32" },
      { url: "/assets/undercontrol-icon.png", sizes: "48x48" },
      { url: "/assets/undercontrol-icon.png", sizes: "64x64" },
    ],
    apple: "/assets/undercontrol-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-inter`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
