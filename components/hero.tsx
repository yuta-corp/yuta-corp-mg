import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DotPattern } from "@/components/ui/dot-pattern-1"
import { cn } from "@/lib/utils"

const STATS = [
  { k: "07", v: "Personnes au studio" },
  { k: "12+", v: "Produits livrés depuis 2023" },
  { k: "100%", v: "Devis détaillés, gratuits" },
  { k: "MG", v: "Antananarivo — pas de relais" },
]

export function Hero() {
  return (
    <section
      id="yuta-top"
      className={cn(
        "relative isolate flex min-h-screen w-full flex-col justify-between overflow-hidden",
        "bg-background text-foreground yuta-grain"
      )}
    >
      {/* === Backdrop layers === */}
      <DotPattern
        className="absolute inset-0 -z-10 h-full w-full fill-foreground/15 [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_80%)]"
        width={28}
        height={28}
        cr={0.7}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 size-[820px] -translate-x-1/2 rounded-full bg-saffron/[0.10] blur-3xl"
      />

      {/* === Editorial body === */}
      <div className="relative mx-auto flex w-full max-w-[1480px] flex-1 flex-col gap-8 px-6 pt-28 pb-12 md:px-10 md:pt-36 md:pb-16">
        <div className="flex items-center gap-3">
          <span className="sticker">
            <span className="size-1.5 rounded-full bg-foreground animate-blink" />
            On accepte 4 clients en 2026
          </span>
          <span className="chip hidden sm:inline-flex">
            <span className="size-1 rounded-full bg-mint" />
            Disponibilité ouverte
          </span>
        </div>

        <div className="flex items-end justify-between gap-6">
          <div className="flex-1">
            <span className="text-eyebrow block">— Studio · MG · 00</span>
            <h1 className="mt-4 font-display text-[clamp(3.5rem,11vw,10rem)] font-extrabold leading-[0.86] tracking-[-0.045em]">
              <span className="block">On code,</span>
              <span className="block">
                on{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-foreground">
                    dit
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-x-[-6%] inset-y-[18%] -z-0 -rotate-1 bg-saffron"
                  />
                </span>
                ,
              </span>
              <span className="block">
                on tient
                <span className="text-blush">.</span>
              </span>
            </h1>
          </div>

          <Image
            src="/logo.png"
            alt="YUTA"
            width={160}
            height={160}
            className={cn(
              "hidden size-28 shrink-0 rounded-full border-4 border-foreground bg-background object-cover md:block",
              "animate-wiggle ring-saffron"
            )}
            priority
          />
        </div>

        <div className="mt-2 grid items-end gap-8 md:grid-cols-12">
          <p className="max-w-2xl text-[17px] leading-relaxed text-foreground/85 md:col-span-7">
            YUTA Corporation, c&apos;est un studio malgache de logiciels. On
            vous construit des produits qui marchent. On vous explique comment,
            combien, et pourquoi — sans baratin. Et si vous nous dites non, on
            reste copains.
          </p>

          <div className="flex flex-wrap items-center gap-3 md:col-span-5">
            <Button
              asChild
              size="lg"
              className={cn(
                "h-12 rounded-full border-2 border-foreground bg-foreground px-6 text-base text-background hover:bg-foreground/90",
                "shadow-[4px_4px_0_0_var(--saffron)] hover:shadow-[6px_6px_0_0_var(--saffron)] active:shadow-[2px_2px_0_0_var(--saffron)]"
              )}
            >
              <a href="#contact">
                Démarrer un projet
                <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn(
                "h-12 rounded-full border-2 border-foreground bg-background px-6 text-base text-foreground hover:bg-saffron hover:text-foreground",
                "shadow-[4px_4px_0_0_var(--ink)]"
              )}
            >
              <a href="#pratique">Voir ce qu&apos;on fait</a>
            </Button>
          </div>
        </div>
      </div>

      {/* === Scroll cue, glued to the bottom of the viewport === */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1480px] items-center justify-between gap-4 px-6 pb-8 font-mono text-[10.5px] uppercase tracking-[0.28em] text-foreground/60 md:px-10 md:pb-10">
        <span className="flex items-center gap-3">
          <ArrowDown className="size-3 animate-bounce" />
          Faites défiler — on continue plus bas
        </span>
        <span className="hidden sm:inline">Lat -18.879 · Lon 47.508</span>
      </div>
    </section>
  )
}

export function StatsStrip() {
  return (
    <section
      aria-label="Quelques chiffres honnêtes"
      className="relative border-y-2 border-foreground bg-saffron text-foreground"
    >
      <div className="mx-auto grid max-w-[1480px] grid-cols-2 gap-y-6 px-6 py-10 md:grid-cols-4 md:px-10">
        {STATS.map((s) => (
          <div key={s.v} className="flex flex-col gap-1">
            <span className="font-display text-4xl font-bold leading-none tracking-tight md:text-5xl">
              {s.k}
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/75">
              {s.v}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
