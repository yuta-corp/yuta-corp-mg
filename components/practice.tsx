import { ArrowUpRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DotPattern } from "@/components/ui/dot-pattern-1"
import { cn } from "@/lib/utils"

const PRACTICES = [
  {
    num: "01",
    tone: "saffron",
    title: "Web &\nmobile.",
    body: "From frontend to database — Next.js, React Native, Spring, PostgreSQL. Full-stack apps that actually work.",
    bullets: [
      "Next.js & React (web)",
      "React Native (mobile)",
      "Spring & PostgreSQL (backend)",
      "Docker & deployment",
    ],
    honest:
      "Timeline depends on complexity. I don't promise 2 weeks when I need 2 months.",
    cta: "Tell me about your project",
  },
  {
    num: "02",
    tone: "mint",
    title: "Data &\nscraping.",
    body: "Collect, analyze, automate. Python, pandas, and a bit of elbow grease.",
    bullets: [
      "Web scraping & data collection",
      "Data analysis & BI",
      "Python automation",
      "Custom dashboards",
    ],
    honest: "Small to medium scale. I'm not training LLMs — yet.",
    cta: "Let's talk data",
  },
  {
    num: "03",
    tone: "blush",
    title: "UI/UX &\nconsulting.",
    body: "Need an outside opinion? Design, architecture, tech choices, or just a second pair of eyes.",
    bullets: [
      "UI/UX design & wireframes",
      "Tech stack advice",
      "Architecture review",
      "Project scoping",
    ],
    honest: "I say what I think — not always what you want to hear.",
    cta: "Book a day",
  },
]

const toneBg = {
  saffron: "bg-saffron",
  mint: "bg-mint",
  blush: "bg-blush",
}

export function Practice() {
  return (
    <section id="pratique" className="relative bg-background py-28 md:py-36">
      <DotPattern
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] fill-foreground/10"
        width={32}
        height={32}
        cr={0.6}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-eyebrow">— 02 / Services</div>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.94] font-extrabold tracking-[-0.035em]">
              Three ways
              <br />
              to <span className="italic">work</span>
              <span className="text-blush">.</span>
            </h2>
          </div>
          <p className="max-w-xl text-[16.5px] leading-relaxed text-foreground/80 md:col-span-6 md:col-start-7">
            No catalog, no &ldquo;starter / pro / enterprise&rdquo; packages.
            Every project starts with a conversation and ends with something
            that works. Here&apos;s how it usually goes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRACTICES.map((p, i) => (
            <article
              key={p.num}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border-2 border-foreground bg-card transition-transform duration-300 hover:-translate-y-1.5",
                "ring-ink"
              )}
            >
              <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
                <header className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "inline-flex size-12 items-center justify-center rounded-full border-2 border-foreground font-mono text-[14px] font-semibold tabular-nums",
                      toneBg[p.tone as keyof typeof toneBg]
                    )}
                  >
                    {p.num}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                    Services · {String(i + 1).padStart(2, "0")}
                  </span>
                </header>

                <h3 className="font-display text-[34px] leading-[0.95] font-extrabold tracking-[-0.025em] whitespace-pre-line md:text-[40px]">
                  {p.title}
                </h3>

                <p className="text-[15px] leading-relaxed text-foreground/80">
                  {p.body}
                </p>

                <ul className="space-y-2.5 border-t-2 border-dashed border-foreground/20 pt-5">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[14px] text-foreground/85"
                    >
                      <Check
                        aria-hidden
                        className="mt-0.5 size-3.5 shrink-0 text-foreground"
                        strokeWidth={3}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tonal "Franchement" band */}
              <div
                className={cn(
                  "border-t-2 border-foreground px-6 py-4 font-mono text-[11.5px] leading-relaxed text-foreground md:px-8",
                  toneBg[p.tone as keyof typeof toneBg]
                )}
              >
                <span className="font-semibold tracking-[0.18em] uppercase">
                  Honestly →{" "}
                </span>
                {p.honest}
              </div>

              {/* Ink footer CTA — inside the card, no absolute overhang */}
              <div className="flex items-center justify-between gap-3 border-t-2 border-foreground bg-foreground px-6 py-4 text-background md:px-8">
                <span className="font-mono text-[10.5px] tracking-[0.22em] text-background/65 uppercase">
                  Next step
                </span>
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    "h-9 rounded-full border-2 border-background bg-saffron px-4 text-[12.5px] font-semibold text-foreground hover:bg-saffron/90"
                  )}
                >
                  <a href="#contact">
                    {p.cta}
                    <ArrowUpRight className="ml-1 size-3.5" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* What we don't do — radical honesty strip */}
        <div className="mt-24 rounded-2xl border-2 border-foreground bg-foreground p-8 text-background ring-saffron md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <div className="font-mono text-[10.5px] tracking-[0.28em] text-saffron uppercase">
                — What I don&apos;t do
              </div>
              <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[0.95] font-extrabold tracking-[-0.03em]">
                I say no
                <br />
                when I have to.
              </h3>
            </div>
            <ul className="grid flex-1 grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:max-w-xl">
              {[
                "Advanced DevOps",
                "Cybersecurity",
                "Vague projects with no brief",
              ].map((x) => (
                <li
                  key={x}
                  className="flex items-baseline gap-2 font-mono text-[12.5px] tracking-[0.16em] text-background/80 uppercase"
                >
                  <span className="text-saffron">✕</span> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
