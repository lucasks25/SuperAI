import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ComparisonSection from "@/components/ComparisonSection"
import UseCasesSection from "@/components/UseCasesSection"
import IntegrationsSection from "@/components/IntegrationsSection"
import HowItWorks from "@/components/HowItWorks"
import MiniTestimonials from "@/components/MiniTestimonials"
import MetricsSection from "@/components/MetricsSection"
import ScrollMarquee from "@/components/ScrollMarquee"
import FAQSection from "@/components/FAQSection"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MiniTestimonials />
      <MetricsSection />
      {/* 3. Segmentação de Audiência */}
      <div id="solucoes">
        <UseCasesSection />
      </div>

      <ScrollMarquee />

      {/* 2. Comparativo: Nós vs Eles */}
      <ComparisonSection />
      
      {/* 3. Como funciona — 3 passos */}
      <HowItWorks />

      {/* 4. Ecossistema */}
      <IntegrationsSection />
      
      {/* 7. Fechamento e Objeções */}
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
