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
  title: "YUTA Corporation — On code, on dit, on tient.",
  description:
    "YUTA Corporation. Studio malgache de logiciels. On construit, on parle franchement, on tient nos promesses. Antananarivo, Madagascar.",
  metadataBase: new URL("https://yuta.mg"),
  openGraph: {
    title: "YUTA Corporation",
    description:
      "Studio de logiciels à Madagascar — transparent, généreux, têtu.",
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
      lang="fr"
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
