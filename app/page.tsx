import { Hero, StatsStrip } from "@/components/hero"
import { Studio } from "@/components/studio"
import { Practice } from "@/components/practice"
import { Works } from "@/components/works"
import { Founder } from "@/components/founder"
import { PredictaCta } from "@/components/predicta-cta"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

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
        <Founder />
        <PredictaCta />
      </main>
      <SiteFooter />
    </>
  )
}
