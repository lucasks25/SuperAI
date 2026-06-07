import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import LogoCloud from "@/components/LogoCloud"
import SuperhumanSuite from "@/components/SuperhumanSuite"
import MetricsSection from "@/components/MetricsSection"
import BeforeAfterSection from "@/components/BeforeAfterSection"
import SDRSection from "@/components/SDRSection"
import UseCasesSection from "@/components/UseCasesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
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
      <MetricsSection />
      <BeforeAfterSection />
      <div id="solucoes">
        <SDRSection />
      </div>
      <UseCasesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <BecomingSuperhuman />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
