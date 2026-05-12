"use client"

import { Player } from "@remotion/player"

import { PerspectiveMarquee } from "@/components/ui/remocn-perspective-marquee"

const WORDS = [
  "Produits sur mesure",
  "Plateformes internes",
  "Design system",
  "Architecture cloud",
  "Audit & conseil",
  "Ingénierie produit",
  "Data & ML appliqués",
  "Maintenance long terme",
  "On dit la vérité",
  "On rend le code",
  "Pas de sous-traitance",
]

export function MarqueeBand() {
  return (
    <section
      aria-label="Ce qu'on fait, dit franchement"
      className="relative isolate border-b-2 border-foreground bg-foreground text-background"
    >
      <div className="relative h-[180px] w-full overflow-hidden md:h-[220px]">
        <Player
          component={PerspectiveMarquee}
          inputProps={{
            items: WORDS,
            fontSize: 110,
            color: "#FBF7EF",
            fontWeight: 800,
            pixelsPerFrame: 3.5,
            rotateY: -18,
            rotateX: 4,
            perspective: 1400,
            fadeColor: "#0A0A0A",
            background: "#0A0A0A",
          }}
          durationInFrames={600}
          compositionWidth={1280}
          compositionHeight={220}
          fps={60}
          autoPlay
          loop
          controls={false}
          showVolumeControls={false}
          clickToPlay={false}
          doubleClickToFullscreen={false}
          style={{ width: "100%", height: "100%", background: "#0A0A0A" }}
        />
      </div>

      {/* Sub-strip — same container, 1px divider, no double rule */}
      <div className="flex flex-col items-start justify-between gap-2 border-t border-background/10 px-6 py-4 md:flex-row md:items-center md:px-10">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-background/75">
          ↳ Tout ce que vous lisez ici, on sait vraiment le faire.
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-background/55">
          Pas de buzzword caché
        </span>
      </div>
    </section>
  )
}
