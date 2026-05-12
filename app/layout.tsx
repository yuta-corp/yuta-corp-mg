import type { Metadata } from "next"
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LayoutPreloader } from "@/components/ui/layout-preloader"
import { cn } from "@/lib/utils"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "YUTA Corporation — Build what matters",
  description:
    "YUTA Corporation is a solo developer based in Antananarivo, Madagascar. Building projects that matter — PREDICTA, LAZA, and more.",
  metadataBase: new URL("https://yuta.mg"),
  openGraph: {
    title: "YUTA Corporation",
    description:
      "Solo developer building projects that matter. Antananarivo, Madagascar.",
    type: "website",
  },
}

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
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        fontDisplay.variable,
        "font-sans"
      )}
    >
      <body className="bg-background text-foreground">
        <ThemeProvider defaultTheme="light">
          <LayoutPreloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
