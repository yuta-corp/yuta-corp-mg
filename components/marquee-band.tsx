"use client"

import { Player } from "@remotion/player"

import { PerspectiveMarquee } from "@/components/ui/remocn-perspective-marquee"

const WORDS = [
  "PREDICTA",
  "LAZA",
  "Next.js",
  "React Native",
  "Spring",
  "Python",
  "PostgreSQL",
  "Docker",
  "Data",
  "Scraping",
  "Transparency",
  "Impact",
]

export function MarqueeBand() {
  return (
    <section
      aria-label="What I do, said plainly"
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
        <span className="font-mono text-[10.5px] tracking-[0.28em] text-background/75 uppercase">
          ↳ Every word here is something I can actually do.
        </span>
        <span className="font-mono text-[10.5px] tracking-[0.28em] text-background/55 uppercase">
          No buzzwords
        </span>
      </div>
    </section>
  )
}
