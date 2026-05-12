import { ArrowUpRight } from "lucide-react"

const WORKS = [
  {
    year: "2025",
    client: "Coopérative d'Antalaha",
    discipline: "Plateforme métier",
    title: "Traçabilité de la filière vanille, du planteur au cargo.",
    tag: "En production",
    tone: "saffron",
    note: "Code rendu, équipe formée. On reste en astreinte.",
  },
  {
    year: "2025",
    client: "Banque privée — MG",
    discipline: "Back-office",
    title: "Refonte des outils internes de conformité et de KYC.",
    tag: "Phase 02",
    tone: "mint",
    note: "Sous NDA. On peut en parler avec votre DPO si besoin.",
  },
  {
    year: "2024",
    client: "ONG humanitaire",
    discipline: "Produit SaaS",
    title: "Allocation de ressources entre 14 antennes terrain.",
    tag: "Maintenance",
    tone: "blush",
    note: "200 €/mois. C'est notre coût réel, pas une remise.",
  },
  {
    year: "2024",
    client: "Atelier d'architecture",
    discipline: "Site & catalogue",
    title: "Identité numérique et catalogue des projets livrés.",
    tag: "Livré",
    tone: "ink",
    note: "Petit projet. On l'a fait parce qu'on les aimait bien.",
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
            <div className="text-eyebrow">— 03 / Travaux récents</div>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,6.5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.035em]">
              Voilà ce qu&apos;on
              <br />
              a vraiment <span className="italic">livré</span>
              <span className="text-saffron">.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition hover:bg-saffron"
          >
            Demander les détails
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
              <span className="col-span-2 font-mono text-[12.5px] tabular-nums text-foreground/60 md:col-span-1">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-3 font-mono text-[12.5px] tabular-nums text-foreground/60 md:col-span-1">
                {w.year}
              </span>
              <span className="col-span-7 md:col-span-6">
                <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">
                  {w.client}
                </span>
                <span className="block font-display text-[22px] font-bold leading-snug tracking-tight md:text-[28px]">
                  {w.title}
                </span>
                <span className="mt-1 block text-[13px] italic leading-snug text-foreground/65">
                  ↳ {w.note}
                </span>
              </span>
              <span className="col-span-12 mt-3 flex items-center justify-between gap-3 md:col-span-4 md:mt-0 md:justify-end">
                <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.22em] text-foreground/60 md:inline">
                  {w.discipline}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-background px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground">
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
          Plusieurs missions sont sous accord de confidentialité — c&apos;est
          normal, on respecte. Demandez-nous une présentation détaillée et on
          vient en parler de vive voix (vraiment, on prend l&apos;avion s&apos;il le faut).
        </p>
      </div>
    </section>
  )
}
