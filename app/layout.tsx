import { Geist_Mono, Nunito_Sans } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Menu } from "@/components/ui/root/menu"
import { Footer } from "@/components/ui/root/footer"

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "",
        fontMono.variable,
        "font-sans ",
        nunitoSans.variable
      )}
    >
      <body className="w-full min-h-screen max-w-full  mx-autos bg-black relative">
        <ThemeProvider>
          <Menu />
          <div>
            {children}
          </div>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  )
}
