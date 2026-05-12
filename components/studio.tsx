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
    t: "Transparency.",
    b: "I show the code, the numbers, the process. If something's unclear, I'm doing it wrong.",
    tone: "saffron" as const,
  },
  {
    k: "02",
    t: "Impact.",
    b: "Small projects with real weight. I'd rather build one thing that matters than ten that don't.",
    tone: "mint" as const,
  },
  {
    k: "03",
    t: "Openness.",
    b: "Code is yours from day one. Data stays open when it can. No lock-in, no secrets.",
    tone: "blush" as const,
  },
  {
    k: "04",
    t: "Patience.",
    b: "Solo means slow. But slow doesn't mean unfinished. I build for the long run.",
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
            <div className="text-eyebrow">— 01 / Manifesto</div>
            <span className="sticker mt-5 inline-flex">
              <span className="size-1.5 rounded-full bg-foreground" />
              Short version
            </span>

            {/* Highlight animation via Remotion Player */}
            <div className="mt-8 w-full overflow-hidden rounded-xl border-2 border-foreground bg-card ring-ink">
              <div className="aspect-[16/7] w-full">
                <Player
                  component={MarkerHighlight}
                  inputProps={{
                    before: "I don't ",
                    highlight: "lie",
                    after: ".",
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
              <div className="flex items-center justify-between border-t border-foreground/15 bg-background px-4 py-2 font-mono text-[10px] tracking-[0.22em] text-foreground/60 uppercase">
                <span>↳ YUTA · rule #1</span>
                <span>auto · 30fps</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 md:pl-6">
            <h2 className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.94] font-extrabold tracking-[-0.035em]">
              A manifesto,
              <br />
              <span className="relative inline-block italic">
                <span className="relative z-10">not a pitch</span>
                <span
                  aria-hidden
                  className="absolute inset-x-[-4%] inset-y-[20%] -z-0 -rotate-1 bg-mint"
                />
              </span>
              <span className="text-blush">.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-[17.5px] leading-relaxed text-foreground/85">
              YUTA Corp started with a simple belief: one person with the right
              tools can build things that matter. And an even simpler one: you
              don&apos;t need to lie to sell software. You really don&apos;t.
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
                    <span className="font-mono text-[11px] font-semibold tracking-[0.22em] uppercase">
                      {p.k}
                    </span>
                    <span
                      aria-hidden
                      className="size-2 rounded-full bg-current opacity-70"
                    />
                  </div>
                  <h3 className="font-display text-[24px] leading-tight font-bold tracking-tight">
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
      aria-label="YUTA Manifesto"
      className="bg-background text-foreground"
    >
      <FlowSection
        aria-label="Promise 01"
        className="bg-saffron text-foreground"
      >
        <ManifestoPanel
          num="i."
          eyebrow="Promise 01"
          headline="If I don't know, I'll say it."
          body="I'm one person. I don't know everything — and that's fine. When your project goes beyond my skills, I'll tell you before the quote, not after the contract."
          stamp="Really"
        />
      </FlowSection>

      <FlowSection aria-label="Promise 02" className="bg-mint text-foreground">
        <ManifestoPanel
          num="ii."
          eyebrow="Promise 02"
          headline="The code is yours. Always."
          body="From day one, the repo is under your account. I push, I document, I comment. If tomorrow you want to replace me, I'll hold the door open."
          stamp="Always"
        />
      </FlowSection>

      <FlowSection aria-label="Promise 03" className="bg-blush text-foreground">
        <ManifestoPanel
          num="iii."
          eyebrow="Promise 03"
          headline="The estimate is clear — or it's wrong."
          body="One line per task, one hour per line, a clear rate. No vague packages, no ghost consulting. If the invoice takes effort to understand, I wrote it wrong."
          stamp="Promise"
        />
      </FlowSection>

      <FlowSection
        aria-label="Promise 04"
        className="bg-foreground text-background"
      >
        <ManifestoPanel
          dark
          num="iv."
          eyebrow="Promise 04"
          headline="I stay, even when it's less glamorous."
          body="The real work starts after launch: unexpected bugs, changing data flows, projects that evolve. I sign for the long haul — not just for launch day."
          stamp="Kept"
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
      <div className="flex items-center justify-between font-mono text-[10.5px] tracking-[0.28em] uppercase opacity-75">
        <span>↳ YUTA · Manifeste</span>
        <span>{eyebrow}</span>
      </div>

      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-2">
          <span className="font-display text-[clamp(3rem,7vw,6rem)] leading-none font-extrabold italic">
            {num}
          </span>
        </div>
        <div className="md:col-span-7">
          <h3 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.94] font-extrabold tracking-[-0.035em] text-balance">
            {headline}
          </h3>
          <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed opacity-85">
            {body}
          </p>
        </div>
        <div className="flex justify-end md:col-span-3">
          <span
            className={cn(
              "inline-flex -rotate-6 items-center gap-2 rounded-full border-2 px-4 py-2 font-mono text-[12px] font-semibold tracking-[0.22em] uppercase",
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
            dark
              ? "border-background bg-background"
              : "border-foreground bg-background"
          )}
        />
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-60">
          Antananarivo · Madagascar
        </span>
      </div>
    </div>
  )
}
