"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight, Mail } from "lucide-react"

import { cn } from "@/lib/utils"

const TARGET_DATE = new Date()
TARGET_DATE.setDate(TARGET_DATE.getDate() + 14)
TARGET_DATE.setHours(9, 0, 0, 0)

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

function AnimatedDigit({ value }: { value: number }) {
  return (
    <div className="relative h-[1em] w-[1.25em] overflow-hidden tabular-nums">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 30 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function TimeUnit({
  value,
  label,
  highlight,
}: {
  value: number
  label: string
  highlight?: boolean
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={cn(
          "relative flex min-w-[88px] items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-card/70 px-5 py-4 md:min-w-[112px] md:px-6 md:py-6",
          highlight && "border-saffron/40"
        )}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
        <span
          className={cn(
            "font-display text-[44px] leading-none tracking-tight text-foreground md:text-[64px]",
            highlight && "text-saffron"
          )}
        >
          <AnimatedDigit value={value} />
        </span>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function CountdownBanner() {
  const [time, setTime] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null>(null)

  useEffect(() => {
    setTime(getTimeLeft())
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (!time) return null

  return (
    <section className="relative isolate flex w-full items-center justify-center overflow-hidden bg-background px-4 py-28 md:py-36">
      {/* Sober backdrop: hairline grid + soft saffron wash */}
      <div className="yuta-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-saffron/[0.06] blur-3xl"
      />

      <div className="relative w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative flex flex-col items-center gap-12 rounded-2xl border border-border/60 bg-card/40 px-6 py-14 text-center backdrop-blur-sm md:px-16 md:py-20"
        >
          {/* Corner ticks */}
          {(["tl", "tr", "bl", "br"] as const).map((c) => (
            <span
              key={c}
              aria-hidden
              className={cn(
                "absolute size-5 border-saffron",
                c === "tl" && "top-4 left-4 border-t border-l",
                c === "tr" && "top-4 right-4 border-t border-r",
                c === "bl" && "bottom-4 left-4 border-b border-l",
                c === "br" && "bottom-4 right-4 border-b border-r"
              )}
            />
          ))}

          <div className="flex flex-col items-center gap-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1.5">
              <span className="relative inline-flex size-2 items-center justify-center">
                <span className="absolute size-2 rounded-full bg-saffron/30" />
                <span className="size-1.5 rounded-full bg-saffron animate-blink" />
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-foreground/80">
                Mise en ligne — bientôt
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-balance text-foreground">
              Le studio ouvre ses portes
              <br />
              <span className="italic">d&apos;ici peu</span>
              <span className="text-saffron">.</span>
            </h2>

            <p className="max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
              Nous prenons quelques clients par an. Pour faire partie de la
              prochaine cohorte, laissez-nous votre adresse — nous reviendrons
              vers vous avant l&apos;ouverture.
            </p>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <TimeUnit value={time?.days ?? 0} label="Jours" highlight />
            <span aria-hidden className="font-display text-3xl text-foreground/30 md:text-5xl">
              ·
            </span>
            <TimeUnit value={time?.hours ?? 0} label="Heures" />
            <span aria-hidden className="font-display text-3xl text-foreground/30 md:text-5xl">
              ·
            </span>
            <TimeUnit value={time?.minutes ?? 0} label="Minutes" />
            <span
              aria-hidden
              className="hidden font-display text-3xl text-foreground/30 sm:inline md:text-5xl"
            >
              ·
            </span>
            <div className="hidden sm:block">
              <TimeUnit value={time?.seconds ?? 0} label="Secondes" />
            </div>
          </div>

          <form
            className="flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="relative flex-1">
              <Mail
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="email"
                required
                placeholder="vous@entreprise.mg"
                className={cn(
                  "h-12 w-full rounded-full border border-border/70 bg-background/60 pr-4 pl-11 text-[14px] text-foreground placeholder:text-muted-foreground/70",
                  "outline-none transition focus:border-saffron/60 focus:ring-2 focus:ring-saffron/20"
                )}
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-foreground px-6 text-[13px] font-medium text-background transition hover:bg-foreground/85"
            >
              Me prévenir
              <ArrowRight className="size-3.5" />
            </button>
          </form>

          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Pas de spam — un seul message, le jour de l&apos;ouverture.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
