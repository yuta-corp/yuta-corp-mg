import { ArrowUpRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DotPattern } from "@/components/ui/dot-pattern-1"
import { cn } from "@/lib/utils"

const PRACTICES = [
  {
    num: "01",
    tone: "saffron",
    title: "On fabrique\nle produit.",
    body: "Du premier croquis griffonné au jour de la mise en ligne. Vous arrivez avec une idée, on repart avec un truc qui marche, qui tient la charge, qu'on peut vous expliquer.",
    bullets: [
      "Atelier de cadrage (gratuit)",
      "Design produit + maquettes vivantes",
      "Ingénierie full-stack",
      "Mise en production & monitoring",
    ],
    honest:
      "Délai typique : 3 à 6 mois. Si on vous promet 4 semaines, on ment.",
    cta: "Demander un cadrage",
  },
  {
    num: "02",
    tone: "mint",
    title: "On range\nl'existant.",
    body: "Vos équipes croulent sous les tableurs, les outils ne se parlent plus, le back-office est devenu un musée. On audite, on refond progressivement, on forme — pas de big bang.",
    bullets: [
      "Audit lisible (pas une présentation de 80 slides)",
      "Refonte par modules",
      "Intégrations API / bases existantes",
      "Formation interne incluse",
    ],
    honest:
      "On ne casse pas ce qui marche. Même si ça nous démange un peu.",
    cta: "Faire l'audit",
  },
  {
    num: "03",
    tone: "blush",
    title: "On vous donne\nun avis.",
    body: "Missions courtes, regard externe. Quand votre équipe technique hésite sur une stack, une archi, un recrutement — on vient écouter une journée et on dit ce qu'on en pense.",
    bullets: [
      "Revue d'architecture",
      "Choix de stack ou de fournisseur",
      "Accompagnement CTO part-time",
      "Plan de remédiation chiffré",
    ],
    honest:
      "On dit notre avis honnête. Pas toujours celui que vous voulez entendre.",
    cta: "Réserver une journée",
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
        className="absolute inset-0 h-full w-full fill-foreground/10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        width={32}
        height={32}
        cr={0.6}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-eyebrow">— 02 / Pratique</div>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6.5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.035em]">
              Trois manières
              <br />
              de <span className="italic">travailler</span>
              <span className="text-blush">.</span>
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 max-w-xl text-[16.5px] leading-relaxed text-foreground/80">
            Pas de catalogue, pas de formules « starter / pro / enterprise ».
            Chaque mission commence par une conversation et finit par un objet
            qui marche. Voici les trois formes que ça prend, dit franchement,
            avec les délais réels.
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
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    Pratique · {String(i + 1).padStart(2, "0")}
                  </span>
                </header>

                <h3 className="whitespace-pre-line font-display text-[34px] font-extrabold leading-[0.95] tracking-[-0.025em] md:text-[40px]">
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
                <span className="font-semibold uppercase tracking-[0.18em]">
                  Franchement →{" "}
                </span>
                {p.honest}
              </div>

              {/* Ink footer CTA — inside the card, no absolute overhang */}
              <div className="flex items-center justify-between gap-3 border-t-2 border-foreground bg-foreground px-6 py-4 text-background md:px-8">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-background/65">
                  Étape suivante
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
              <div className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-saffron">
                — Ce qu&apos;on ne fait pas
              </div>
              <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
                On vous dit non
                <br />
                quand il faut.
              </h3>
            </div>
            <ul className="grid flex-1 grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:max-w-xl">
              {[
                "Sites vitrines à 100 €",
                "Crypto / Web3 spéculatif",
                "“Sous-traitance” cachée",
                "Maquettes Figma sans code",
                "Migrations en une nuit",
                "Engagements verbaux",
              ].map((x) => (
                <li
                  key={x}
                  className="flex items-baseline gap-2 font-mono text-[12.5px] uppercase tracking-[0.16em] text-background/80"
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
