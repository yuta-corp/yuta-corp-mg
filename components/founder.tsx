import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DotPattern } from "@/components/ui/dot-pattern-1"
import { cn } from "@/lib/utils"

export function Founder() {
  return (
    <section
      id="fondateur"
      className="relative overflow-hidden bg-background py-28 md:py-36"
    >
      <DotPattern
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_bottom_left,black_25%,transparent_70%)] fill-foreground/10"
        width={30}
        height={30}
        cr={0.6}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="grid items-start gap-12 md:grid-cols-12">
          {/* Left: editorial copy */}
          <div className="md:col-span-7">
            <div className="text-eyebrow">— 04 / The founder</div>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.94] font-extrabold tracking-[-0.035em]">
              One company,
              <br />
              one <span className="italic">person</span>
              <span className="text-saffron">.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-foreground/85">
              YUTA isn&apos;t a team. It&apos;s Tiavina Andriamamivony — a
              backend &amp; full-stack engineer based in Antananarivo who builds
              each project end to end: the idea, the design, the code, the
              infra. Creator of PREDICTA, Java/Spring Boot by trade, picoCTF
              2026 (CMU Africa) with the best team in Madagascar.
            </p>
            <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-foreground/70">
              If you want to know who&apos;s really behind the code — his
              projects, his stack, his story — his personal site has the full
              picture.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className={cn(
                  "h-12 rounded-full border-2 border-foreground bg-foreground px-6 text-base text-background hover:bg-foreground/90",
                  "shadow-[4px_4px_0_0_var(--saffron)] hover:shadow-[6px_6px_0_0_var(--saffron)] active:shadow-[2px_2px_0_0_var(--saffron)]"
                )}
              >
                <a
                  href="https://tiavina-andria.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Meet the founder
                  <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
              <a
                href="https://github.com/Tiavina-Andriamamivony"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.18em] text-foreground/70 uppercase transition hover:text-foreground"
              >
                @Tiavina-Andriamamivony
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Right: founder card */}
          <div className="md:col-span-5 md:pl-6">
            <div className="relative overflow-hidden rounded-2xl border-2 border-foreground bg-card ring-saffron">
              <div className="flex items-center justify-between border-b-2 border-foreground bg-saffron px-6 py-3 font-mono text-[10.5px] font-semibold tracking-[0.22em] text-foreground uppercase">
                <span>↳ YUTA · founder</span>
                <span>MG · 2026</span>
              </div>
              <div className="flex flex-col gap-6 p-6 md:p-8">
                <div className="font-display text-[clamp(2.5rem,5.5vw,4rem)] leading-[0.9] font-extrabold tracking-[-0.04em] italic">
                  TIAVINA<span className="text-saffron">.</span>
                </div>
                <div className="space-y-3">
                  {[
                    ["Role", "Founder · YUTA Corp"],
                    ["Stack", "Java · Spring Boot · Next.js"],
                    ["Base", "Antananarivo, Madagascar"],
                    ["Side quest", "picoCTF 2026 — CMU Africa"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-baseline justify-between gap-4 border-b border-dashed border-foreground/20 pb-2.5"
                    >
                      <span className="font-mono text-[10px] tracking-[0.24em] text-foreground/55 uppercase">
                        {k}
                      </span>
                      <span className="text-right text-[14px] font-medium text-foreground">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://tiavina-andria.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between gap-3 rounded-full border-2 border-foreground bg-background px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.2em] text-foreground uppercase transition hover:bg-saffron"
                >
                  tiavina-andria.vercel.app
                  <ArrowUpRight className="size-4 transition group-hover:rotate-45" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
