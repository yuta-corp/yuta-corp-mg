"use client"

import Image from "next/image"
import { Player } from "@remotion/player"

import { MarkerHighlight } from "@/components/ui/marker-highlight"
import FlowArt, { FlowSection } from "@/components/ui/story-scroll"
import { DotPattern } from "@/components/ui/dot-pattern-1"
import { cn } from "@/lib/utils"

const PRINCIPLES = [
  {
    k: "01",
    t: "On dit ce qu'on sait faire.",
    b: "Et surtout ce qu'on ne sait pas faire. Si votre projet demande un savoir qu'on n'a pas, on vous présente quelqu'un qui l'a.",
    tone: "saffron" as const,
  },
  {
    k: "02",
    t: "On rend le code.",
    b: "Repo, comptes, mots de passe, documentation. Tout est à vous, dès le premier jour. Vous pouvez nous remplacer demain matin.",
    tone: "mint" as const,
  },
  {
    k: "03",
    t: "On facture lisiblement.",
    b: "Un tableur, pas un PDF flou. Vous voyez chaque heure, chaque ligne. Si vous ne comprenez pas une facture, on la refait.",
    tone: "blush" as const,
  },
  {
    k: "04",
    t: "On reste après le lancement.",
    b: "Un produit, c'est dix ans. On signe pour la durée. Maintenance, astreintes, évolutions — sans contrat caché.",
    tone: "ink" as const,
  },
]

const toneClass = {
  saffron: "bg-saffron border-foreground",
  mint: "bg-mint border-foreground",
  blush: "bg-blush border-foreground",
  ink: "bg-foreground text-background border-foreground",
}

export function Studio() {
  return (
    <section id="studio" className="relative bg-background">
      {/* === HEADER w/ Remotion MarkerHighlight === */}
      <div className="relative overflow-hidden border-b-2 border-foreground bg-background py-24 md:py-32">
        <DotPattern
          className="absolute inset-0 h-full w-full fill-foreground/20"
          width={26}
          height={26}
          cr={0.7}
        />

        <div className="relative mx-auto grid max-w-[1480px] gap-12 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <div className="text-eyebrow">— 01 / Studio</div>
            <span className="sticker mt-5 inline-flex">
              <span className="size-1.5 rounded-full bg-foreground" />
              Manifeste, version courte
            </span>

            {/* Highlight animation via Remotion Player */}
            <div className="mt-8 w-full overflow-hidden rounded-xl border-2 border-foreground bg-card ring-ink">
              <div className="aspect-[16/7] w-full">
                <Player
                  component={MarkerHighlight}
                  inputProps={{
                    before: "On ne ",
                    highlight: "ment",
                    after: " pas.",
                    markerColor: "#F5C518",
                    baseColor: "#0A0A0A",
                    highlightedTextColor: "#0A0A0A",
                    backgroundColor: "#FBF7EF",
                    fontSize: 108,
                    fontWeight: 800,
                    speed: 1.2,
                  }}
                  durationInFrames={120}
                  compositionWidth={1120}
                  compositionHeight={490}
                  fps={30}
                  autoPlay
                  loop
                  controls={false}
                  clickToPlay={false}
                  doubleClickToFullscreen={false}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="flex items-center justify-between border-t border-foreground/15 bg-background px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/60">
                <span>↳ YUTA · règle n°1</span>
                <span>auto · 30fps</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 md:pl-6">
            <h2 className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-extrabold leading-[0.94] tracking-[-0.035em]">
              Un studio,
              <br />
              <span className="relative inline-block italic">
                <span className="relative z-10">pas une agence</span>
                <span
                  aria-hidden
                  className="absolute inset-x-[-4%] inset-y-[20%] -z-0 -rotate-1 bg-mint"
                />
              </span>
              <span className="text-blush">.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-[17.5px] leading-relaxed text-foreground/85">
              YUTA est née d&apos;une conviction simple : Madagascar a les talents
              techniques pour produire des logiciels que le monde utiliserait.
              Et d&apos;une conviction encore plus simple : on n&apos;a pas besoin
              de mentir pour vendre du logiciel. Vraiment pas.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <article
                  key={p.k}
                  className={cn(
                    "group relative flex flex-col gap-3 rounded-2xl border-2 p-6 transition-transform duration-300 hover:-translate-y-1 hover:-rotate-[0.6deg] md:p-7",
                    toneClass[p.tone],
                    "ring-ink"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em]">
                      {p.k}
                    </span>
                    <span
                      aria-hidden
                      className="size-2 rounded-full bg-current opacity-70"
                    />
                  </div>
                  <h3 className="font-display text-[24px] font-bold leading-tight tracking-tight">
                    {p.t}
                  </h3>
                  <p className="text-[14px] leading-relaxed opacity-85">
                    {p.b}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === STORY SCROLL — manifesto, four panels stacking on scroll === */}
      <Manifesto />
    </section>
  )
}

function Manifesto() {
  return (
    <FlowArt
      aria-label="Manifeste YUTA"
      className="bg-background text-foreground"
    >
      <FlowSection
        aria-label="Promesse 01"
        className="bg-saffron text-foreground"
      >
        <ManifestoPanel
          num="i."
          eyebrow="Promesse 01"
          headline="Si on ne sait pas, on le dit."
          body="On a sept personnes au studio. Tous ne savent pas tout faire — et c'est tant mieux. Quand votre projet dépasse notre cercle, on vous l'annonce avant le devis, pas après le contrat."
          stamp="Vraiment"
        />
      </FlowSection>

      <FlowSection
        aria-label="Promesse 02"
        className="bg-mint text-foreground"
      >
        <ManifestoPanel
          num="ii."
          eyebrow="Promesse 02"
          headline="Le code vous appartient. Toujours."
          body="Au premier jour, le repository est sous votre organisation. On y pousse, on documente, on commente. Si demain vous voulez nous remplacer, on tient la porte ouverte."
          stamp="Toujours"
        />
      </FlowSection>

      <FlowSection
        aria-label="Promesse 03"
        className="bg-blush text-foreground"
      >
        <ManifestoPanel
          num="iii."
          eyebrow="Promesse 03"
          headline="Le devis est lisible — ou il est faux."
          body="Une ligne par tâche, une heure par ligne, un taux clair. Pas de forfait flou, pas de “consulting” fantôme. Si la facture vous demande un effort pour la comprendre, on l'a mal écrite."
          stamp="Promis"
        />
      </FlowSection>

      <FlowSection
        aria-label="Promesse 04"
        className="bg-foreground text-background"
      >
        <ManifestoPanel
          dark
          num="iv."
          eyebrow="Promesse 04"
          headline="On reste, même quand c'est moins glamour."
          body="Le vrai métier commence après la mise en production : les bugs imprévus, les flux de données qui changent, les équipes qui se renouvellent. On signe pour la durée — pas juste pour le lancement."
          stamp="Tenu"
        />
      </FlowSection>
    </FlowArt>
  )
}

function ManifestoPanel({
  num,
  eyebrow,
  headline,
  body,
  stamp,
  dark = false,
}: {
  num: string
  eyebrow: string
  headline: string
  body: string
  stamp: string
  dark?: boolean
}) {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-[1480px] flex-col justify-between gap-10 px-2 py-10">
      <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.28em] opacity-75">
        <span>↳ YUTA · Manifeste</span>
        <span>{eyebrow}</span>
      </div>

      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-2">
          <span className="font-display text-[clamp(3rem,7vw,6rem)] font-extrabold leading-none italic">
            {num}
          </span>
        </div>
        <div className="md:col-span-7">
          <h3 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[0.94] tracking-[-0.035em] text-balance">
            {headline}
          </h3>
          <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed opacity-85">
            {body}
          </p>
        </div>
        <div className="md:col-span-3 flex justify-end">
          <span
            className={cn(
              "inline-flex -rotate-6 items-center gap-2 rounded-full border-2 px-4 py-2 font-mono text-[12px] font-semibold uppercase tracking-[0.22em]",
              dark
                ? "border-background bg-background text-foreground"
                : "border-foreground bg-foreground text-background"
            )}
          >
            <span className="size-1.5 rounded-full bg-current" />
            {stamp}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Image
          src="/logo.png"
          alt=""
          width={48}
          height={48}
          aria-hidden
          className={cn(
            "size-10 rounded-full border-2",
            dark ? "border-background bg-background" : "border-foreground bg-background"
          )}
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
          Antananarivo · Madagascar
        </span>
      </div>
    </div>
  )
}
