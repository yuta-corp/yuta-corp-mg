"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Manifesto", href: "#studio", num: "01" },
  { label: "Services", href: "#pratique", num: "02" },
  { label: "Projects", href: "#travaux", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
]

export function SiteNav() {
  const { resolvedTheme, setTheme } = useTheme()
  const [scrolled, setScrolled] = React.useState(false)
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b-2 border-foreground bg-background/90 backdrop-blur-xl"
          : "border-b-2 border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between gap-3 px-4 md:h-20 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative inline-flex">
            <Image
              src="/logo.png"
              alt="YUTA Corporation"
              width={44}
              height={44}
              className={cn(
                "size-10 rounded-full border-2 border-foreground bg-saffron object-cover transition md:size-11",
                "group-hover:rotate-[-8deg]"
              )}
              priority
            />
            <span
              aria-hidden
              className="absolute -right-1 -bottom-1 size-3 rounded-full border-2 border-foreground bg-mint"
            />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[19px] font-extrabold tracking-[-0.03em]">
              YUTA<span className="text-blush">.</span>
            </span>
            <span className="mt-0.5 font-mono text-[9.5px] tracking-[0.28em] text-muted-foreground uppercase">
              Corporation · MG
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex items-baseline gap-1.5 rounded-full px-3 py-2 text-[13.5px] font-medium text-foreground/85 transition hover:text-foreground"
            >
              <span className="font-mono text-[10px] text-foreground/45 tabular-nums transition group-hover:text-blush">
                {item.num}
              </span>
              <span>{item.label}</span>
              <span
                aria-hidden
                className="absolute inset-x-3 -bottom-0.5 h-[3px] origin-left scale-x-0 bg-saffron transition-transform duration-300 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Toggle theme"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="size-9 rounded-full border-2 border-foreground bg-background text-foreground hover:bg-saffron"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="size-3.5" />
            ) : (
              <Moon className="size-3.5" />
            )}
          </Button>
          <Button
            asChild
            size="sm"
            className={cn(
              "h-9 rounded-full border-2 border-foreground bg-foreground px-4 text-[12.5px] font-semibold text-background hover:bg-foreground/90",
              "shadow-[3px_3px_0_0_var(--saffron)] active:shadow-[1px_1px_0_0_var(--saffron)]"
            )}
          >
            <a href="#contact">
              Let&apos;s talk
              <span aria-hidden className="ml-1">
                →
              </span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
