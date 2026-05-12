"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"

import { cn } from "@/lib/utils"

export interface LayoutPreloaderProps {
  className?: string
  /** Total duration in ms before unmounting */
  duration?: number
  brand?: string
  tagline?: string
}

/**
 * Full-bleed bootup curtain — paper background, saffron progress wedge,
 * thick ink mark sliding across. Honest, mechanical, friendly.
 */
export function LayoutPreloader({
  className,
  duration = 1600,
  brand = "YUTA",
  tagline = "Build what matters",
}: LayoutPreloaderProps) {
  const [visible, setVisible] = React.useState(true)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      setProgress(t)
      if (t < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setVisible(false), 220)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [duration])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="yuta-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
          }}
          className={cn(
            "fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background",
            className
          )}
        >
          {/* Big rotating dot field */}
          <div className="yuta-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] text-foreground/40" />

          {/* Diagonal saffron wedge revealing as progress grows */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 top-1/2 h-44 -translate-y-1/2 bg-saffron"
            style={{
              clipPath: `polygon(0 100%, ${progress * 100}% 100%, ${progress * 100}% 0, 0 0)`,
            }}
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ rotate: -6, scale: 0.94 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative"
            >
              <span className="font-display text-[clamp(4rem,12vw,9rem)] leading-none font-extrabold tracking-[-0.04em] text-foreground">
                {brand}
                <span className="text-blush">.</span>
              </span>
              <motion.span
                aria-hidden
                className="absolute -bottom-2 left-0 block h-2 bg-foreground"
                initial={{ width: 0 }}
                animate={{ width: `${progress * 100}%` }}
                transition={{ ease: "linear" }}
              />
            </motion.div>

            <div className="flex items-center gap-3 font-mono text-[10.5px] tracking-[0.3em] text-foreground/70 uppercase">
              <span className="animate-blink size-1.5 rounded-full bg-foreground" />
              <span>{tagline}</span>
              <span className="text-foreground/40 tabular-nums">
                {String(Math.round(progress * 100)).padStart(3, "0")}
              </span>
            </div>
          </div>

          {/* Corner stamps */}
          <span className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.3em] text-foreground/50 uppercase">
            MG · Antananarivo
          </span>
          <span className="absolute top-5 right-5 font-mono text-[10px] tracking-[0.3em] text-foreground/50 uppercase">
            Édition 2026
          </span>
          <span className="absolute bottom-5 left-5 font-mono text-[10px] tracking-[0.3em] text-foreground/50 uppercase">
            Solo · Dev
          </span>
          <span className="absolute right-5 bottom-5 font-mono text-[10px] tracking-[0.3em] text-foreground/50 uppercase">
            Lat -18.879 · Lon 47.508
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LayoutPreloader
