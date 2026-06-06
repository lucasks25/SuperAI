import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import LogoCloud from "@/components/LogoCloud"
import SuperhumanSuite from "@/components/SuperhumanSuite"
import SDRSection from "@/components/SDRSection"
import VoiceSection from "@/components/VoiceSection"
import HumanHandoffSection from "@/components/HumanHandoffSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import IntegrationsSection from "@/components/IntegrationsSection"
import BecomingSuperhuman from "@/components/BecomingSuperhuman"
import PricingSection from "@/components/PricingSection"
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
        <VoiceSection />
        <HumanHandoffSection />
      </div>
      <HowItWorksSection />
      <IntegrationsSection />
      <BecomingSuperhuman />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
