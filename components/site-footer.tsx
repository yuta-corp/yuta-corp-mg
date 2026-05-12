import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const COLUMNS = [
  {
    title: "Manifesto",
    links: [
      { label: "About", href: "#studio" },
      { label: "Principles", href: "#studio" },
      { label: "Projects", href: "#travaux" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web & mobile", href: "#pratique" },
      { label: "Data & scraping", href: "#pratique" },
      { label: "UI/UX & consulting", href: "#pratique" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "yuta-mg@proton.me", href: "mailto:yuta-mg@proton.me" },
      { label: "Antananarivo, Madagascar", href: "#contact" },
      { label: "Open for projects", href: "#contact" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="yuta-grain relative isolate overflow-hidden border-t-2 border-foreground bg-foreground text-background"
    >
      <div className="yuta-lines pointer-events-none absolute inset-0 text-background opacity-25" />

      {/* HUGE wordmark across the top */}
      <div className="relative mx-auto max-w-[1480px] px-6 pt-24 md:px-10 md:pt-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-saffron bg-saffron px-3 py-1 font-mono text-[10.5px] font-semibold tracking-[0.22em] text-foreground uppercase">
              <span className="animate-blink size-1.5 rounded-full bg-foreground" />
              Open for projects
            </span>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92] font-extrabold tracking-[-0.04em]">
              Say hello,
              <br />
              I actually
              <br />
              <span className="text-saffron italic">reply</span>.
            </h2>
            <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-background/75">
              No chatbot, no &ldquo;thank you for your interest, we&apos;ll get
              back to you within 5 business days&rdquo;. Just me, reading your
              message and answering.
            </p>
          </div>

          <a
            href="mailto:yuta-mg@proton.me"
            className="group inline-flex items-center gap-3 self-start rounded-full border-2 border-background bg-saffron px-6 py-4 font-display text-xl font-bold tracking-tight text-foreground transition hover:bg-background hover:text-foreground md:self-end"
          >
            yuta-mg@proton.me
            <ArrowUpRight className="size-5 transition group-hover:rotate-45" />
          </a>
        </div>
      </div>

      {/* Columns */}
      <div className="relative mx-auto mt-20 grid max-w-[1480px] gap-12 border-t border-background/20 px-6 pt-12 pb-12 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={56}
              height={56}
              className="size-12 rounded-full border-2 border-background bg-background object-cover"
            />
            <div>
              <div className="font-display text-2xl leading-none font-extrabold tracking-tight">
                YUTA<span className="text-saffron">.</span>
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-[0.28em] text-background/55 uppercase">
                Corporation — MG
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-background/70">
            A solo developer based in Antananarivo, Madagascar. Building
            projects that matter, one at a time. Transparent by default, open by
            choice.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:col-span-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[10.5px] tracking-[0.28em] text-saffron uppercase">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14.5px] text-background/85 transition hover:text-saffron"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* MASSIVE wordmark — ghost saffron with a solid saffron dot */}
      <div className="relative overflow-hidden border-t border-background/20">
        <div className="mx-auto max-w-[1480px] px-6 py-10 md:px-10">
          <div
            aria-hidden
            className="font-display text-[clamp(5rem,22vw,22rem)] leading-[0.82] font-extrabold tracking-[-0.06em] text-saffron/[0.16] select-none"
          >
            YUTA<span className="text-saffron">.</span>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative border-t-2 border-background/30">
        <div className="mx-auto flex max-w-[1480px] flex-col items-start justify-between gap-3 px-6 py-6 md:flex-row md:items-center md:px-10">
          <p className="font-mono text-[10.5px] tracking-[0.22em] text-background/55 uppercase">
            © {new Date().getFullYear()} YUTA Corporation. Hand-made in
            Antananarivo.
          </p>
          <p className="font-mono text-[10.5px] tracking-[0.22em] text-background/55 uppercase">
            Lat. -18.879 · Lon. 47.508 · Alt. 1276 m
          </p>
        </div>
      </div>
    </footer>
  )
}
