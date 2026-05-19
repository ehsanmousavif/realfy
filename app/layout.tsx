import { Geist_Mono, Nunito_Sans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Menu } from "@/components/ui/root/menu";
import { Footer } from "@/components/ui/root/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alireza Abbasi | photograpy",
  description:
    "Portfolio of a creative developer specializing in modern web experiences, UI/UX design, and interactive interfaces.",

  openGraph: {
    title: "Alireza Abbasi | Portfolio",
    description:
      "Creative developer building modern web apps and interactive experiences.",
    type: "website",
    url: "https://yourdomain.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Your Name | Portfolio",
    description:
      "Creative developer building modern web apps and UI experiences.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("", fontMono.variable, "font-sans ", nunitoSans.variable)}
    >
      <body className="w-full min-h-screen bg-black relative">
        <ThemeProvider>
          <Menu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
