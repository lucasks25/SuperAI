import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import LogoCloud from "@/components/LogoCloud"
import SuperhumanSuite from "@/components/SuperhumanSuite"
import SDRSection from "@/components/SDRSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import IntegrationsSection from "@/components/IntegrationsSection"
import BecomingSuperhuman from "@/components/BecomingSuperhuman"
import FAQSection from "@/components/FAQSection"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoCloud />
      <SuperhumanSuite />
      <div id="solucoes">
        <SDRSection />
      </div>
      <HowItWorksSection />
      <IntegrationsSection />
      <BecomingSuperhuman />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
