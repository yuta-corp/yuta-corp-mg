import { Hero, StatsStrip } from "@/components/hero"
import { Studio } from "@/components/studio"
import { Practice } from "@/components/practice"
import { Works } from "@/components/works"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CountdownBanner } from "@/components/ui/the-future-arrives-soon-cta"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main className="relative">
        <Hero />
        <StatsStrip />
        <Studio />
        <Practice />
        <Works />
        <CountdownBanner />
      </main>
      <SiteFooter />
    </>
  )
}
