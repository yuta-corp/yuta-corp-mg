import { ArrowUpRight, GitFork } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function PredictaCta() {
  return (
    <section className="relative isolate flex w-full items-center justify-center overflow-hidden bg-background px-4 py-28 md:py-36">
      {/* Sober backdrop: hairline grid + soft saffron wash */}
      <div className="yuta-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)] opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-saffron/[0.06] blur-3xl"
      />

      <div className="relative w-full max-w-5xl">
        <div className="relative flex flex-col items-center gap-10 rounded-2xl border-2 border-foreground bg-card/60 px-6 py-14 text-center ring-saffron backdrop-blur-sm md:px-16 md:py-20">
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
                c === "br" && "right-4 bottom-4 border-r border-b"
              )}
            />
          ))}

          <div className="flex flex-col items-center gap-5">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-saffron px-3 py-1.5">
              <span className="animate-blink size-1.5 rounded-full bg-foreground" />
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.24em] text-foreground uppercase">
                PREDICTA — MVP live
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-balance text-foreground">
              See Tana&apos;s traffic
              <br />
              <span className="italic">in real time</span>
              <span className="text-saffron">.</span>
            </h2>

            <p className="max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
              The Predicta MVP is out: every road of Antananarivo on a live map,
              colored by its current congestion. Real traffic, never stored.
              Data analysis &amp; the prediction algorithm are the next
              milestones — coming little by little.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className={cn(
                "h-12 rounded-full border-2 border-foreground bg-foreground px-6 text-base text-background hover:bg-foreground/90",
                "shadow-[4px_4px_0_0_var(--saffron)] hover:shadow-[6px_6px_0_0_var(--saffron)] active:shadow-[2px_2px_0_0_var(--saffron)]"
              )}
            >
              <a
                href="https://predicta-ui.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Open the live map
                <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn(
                "h-12 rounded-full border-2 border-foreground bg-background px-6 text-base text-foreground hover:bg-saffron",
                "shadow-[4px_4px_0_0_var(--ink)]"
              )}
            >
              <a
                href="https://github.com/yuta-corp/predicta-ui"
                target="_blank"
                rel="noreferrer"
              >
                <GitFork className="mr-1 size-4" />
                Source on GitHub
              </a>
            </Button>
          </div>

          <p className="font-mono text-[10.5px] tracking-[0.24em] text-muted-foreground uppercase">
            LAZA — still in development, in private.
          </p>
        </div>
      </div>
    </section>
  )
}
