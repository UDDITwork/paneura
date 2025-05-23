import Hero from "@/components/home/hero"
import ServicesOverview from "@/components/home/services-overview"
import HallOfFame from "@/components/home/hall-of-fame"
import AiAgents from "@/components/home/ai-agents"
import VerticalDomains from "@/components/home/vertical-domains"
import ContactCta from "@/components/home/contact-cta"
import Testimonials from "@/components/home/testimonials"
import TechStack from "@/components/home/tech-stack"
import CreativeSupport from "@/components/home/creative-support"
import RapidWebsite from "@/components/home/rapid-website"
import Portfolio from "@/components/home/portfolio"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <HallOfFame />
      <AiAgents />
      <VerticalDomains />
      <ServicesOverview />
      <Portfolio />
      <CreativeSupport />
      <RapidWebsite />
      <TechStack />
      <Testimonials />
      <ContactCta />
    </main>
  )
}
