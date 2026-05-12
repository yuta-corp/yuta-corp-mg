import { ArrowUpRight } from "lucide-react"

const WORKS = [
  {
    year: "2026",
    client: "PREDICTA",
    discipline: "Data · Python",
    title:
      "Traffic prediction for Antananarivo using real data collection and analysis.",
    tag: "Data phase",
    tone: "saffron",
    note: "Data collection in progress — reliable data takes time.",
  },
  {
    year: "2026",
    client: "LAZA",
    discipline: "Web platform",
    title: "Anonymous corruption reporting platform for Madagascar.",
    tag: "In development",
    tone: "mint",
    note: "Building in private for now.",
  },
]

const dot = {
  saffron: "bg-saffron",
  mint: "bg-mint",
  blush: "bg-blush",
  ink: "bg-foreground",
}

export function Works() {
  return (
    <section id="travaux" className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-eyebrow">— 03 / Current projects</div>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.94] font-extrabold tracking-[-0.035em]">
              Here&apos;s what
              <br />
              I&apos;m <span className="italic">building</span>
              <span className="text-saffron">.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-2 font-mono text-[11px] tracking-[0.22em] text-foreground uppercase transition hover:bg-saffron"
          >
            Get in touch
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border-2 border-foreground bg-card">
          {WORKS.map((w, i) => (
            <a
              key={i}
              href="#contact"
              className={`group grid grid-cols-12 items-baseline gap-4 border-foreground px-6 py-7 transition-colors hover:bg-saffron md:gap-6 md:px-10 md:py-9 ${i > 0 ? "border-t-2" : ""}`}
            >
              <span className="col-span-2 font-mono text-[12.5px] text-foreground/60 tabular-nums md:col-span-1">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-3 font-mono text-[12.5px] text-foreground/60 tabular-nums md:col-span-1">
                {w.year}
              </span>
              <span className="col-span-7 md:col-span-6">
                <span className="block font-mono text-[11px] tracking-[0.22em] text-foreground/55 uppercase">
                  {w.client}
                </span>
                <span className="block font-display text-[22px] leading-snug font-bold tracking-tight md:text-[28px]">
                  {w.title}
                </span>
                <span className="mt-1 block text-[13px] leading-snug text-foreground/65 italic">
                  ↳ {w.note}
                </span>
              </span>
              <span className="col-span-12 mt-3 flex items-center justify-between gap-3 md:col-span-4 md:mt-0 md:justify-end">
                <span className="hidden font-mono text-[10.5px] tracking-[0.22em] text-foreground/60 uppercase md:inline">
                  {w.discipline}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-background px-3 py-1 font-mono text-[10.5px] font-semibold tracking-[0.18em] text-foreground uppercase">
                  <span
                    aria-hidden
                    className={`size-1.5 rounded-full ${dot[w.tone as keyof typeof dot]}`}
                  />
                  {w.tag}
                </span>
                <ArrowUpRight className="size-4 shrink-0 -translate-x-1 transition group-hover:translate-x-0" />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-[14.5px] leading-relaxed text-foreground/70">
          More projects are under NDA or not public yet. Want to see the full
          picture? Let&apos;s talk.
        </p>
      </div>
    </section>
  )
}
