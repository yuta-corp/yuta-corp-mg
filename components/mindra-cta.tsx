import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const MINDRA_DEMO_URL = "https://youtu.be/ZSAykISzvuI"
const MINDRA_EMBED_URL = "https://www.youtube-nocookie.com/embed/ZSAykISzvuI"

export function MindraCta() {
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
                MINDRA — Live in production
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] text-balance text-foreground">
              Meet the tutor that
              <br />
              <span className="italic">adapts to you</span>
              <span className="text-saffron">.</span>
            </h2>

            <p className="max-w-xl text-[15.5px] leading-relaxed text-muted-foreground">
              Mindra is out: your own AI professors who remember you, explain
              things your way, quiz you, and measure what you actually master —
              available 24/7, at a price no private tutor can match. When you
              need a human, Mindra Mentors takes over.
            </p>
          </div>

          {/* Demo video */}
          <div className="w-full max-w-3xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-foreground bg-background shadow-[6px_6px_0_0_var(--saffron)]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={MINDRA_EMBED_URL}
                title="Mindra — the AI tutor that adapts to you (full demo)"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              href={MINDRA_DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.24em] text-muted-foreground uppercase transition hover:text-foreground"
            >
              Watch the full demo on YouTube — ~11 min
              <ArrowUpRight className="size-3" />
            </a>
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
                href="https://mindra-khaki.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Open Mindra
                <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>

          <p className="font-mono text-[10.5px] tracking-[0.24em] text-muted-foreground uppercase">
            Mindra Mentors — the human side, modeled & coming next.
          </p>
        </div>
      </div>
    </section>
  )
}
