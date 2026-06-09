import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PricingCards from "@/components/PricingCards"
import PricingSimulator from "@/components/PricingSimulator"

export default function PlanosPage() {
  return (
    <main className="bg-[#F9FAFB] min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
        {/* Background Decorative Mesh */}
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-black to-transparent pointer-events-none z-0 opacity-[0.03]" />

        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 text-center mb-20">
          <h1 className="text-[48px] md:text-[64px] font-black tracking-tighter leading-[1.05] text-black mb-6">
            Um agente para cada <span className="bg-[#D4FF00] px-3">tamanho</span> de negócio.
          </h1>
          <p className="text-[18px] md:text-[22px] font-medium text-gray-500 leading-relaxed max-w-[600px] mx-auto">
            Escolha o plano ideal e comece a automatizar suas vendas e atendimentos no piloto automático.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="relative z-20">
          <PricingCards />
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-24 md:py-32 bg-[#05050A] relative overflow-hidden">
        {/* Minimalist White Lines Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 80 0 L 0 0 0 80' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px"
          }}
        />

        <div className="relative z-20">
          <div className="text-center mb-12 px-6">
            <h2 className="text-[32px] md:text-[48px] font-black tracking-tighter leading-tight text-white mb-4">
              Escolha o plano <span className="underline decoration-[#D4FF00] decoration-4 md:decoration-8 underline-offset-[4px] md:underline-offset-[8px]">perfeito</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/50 font-medium max-w-[500px] mx-auto">
              Simule o seu volume de leads para descobrir o melhor formato e calcule o retorno automático sobre o investimento.
            </p>
          </div>
          <PricingSimulator />
        </div>
      </section>

      <Footer />
    </main>
  )
}
