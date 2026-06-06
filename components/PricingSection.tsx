"use client"

// Effects: Pricing Card Lift · Recommended Plan Glow · Feature Check Reveal · CTA Button Shine
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import SectionHeader from "./SectionHeader"
import Reveal from "./Reveal"
import { PRICING_PLANS, WHATSAPP_URL } from "@/lib/constants"

export default function PricingSection() {
  return (
    <section
      id="planos"
      className="py-16 relative overflow-hidden bg-[#F2F2F2]"
      aria-label="Planos"
    >
      <div className="container-xl max-w-6xl">
        <div className="bg-white rounded-[40px] border border-[#1A1A1A]/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] p-10 md:p-16 lg:p-20">
          <SectionHeader
            theme="light"
            badge="Planos"
            title="Escolha o plano ideal para sua operação"
            subtitle="Transparência total para você escalar sem surpresas."
            className="mb-16"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={0.1 * i}>
                <div
                  className={`relative rounded-3xl p-8 flex flex-col h-full transition-all border ${
                    plan.highlight 
                      ? "bg-[#1A1A1A] text-white border-transparent" 
                      : "bg-[#F7F7F7] text-[#1A1A1A] border-[#1A1A1A]/5"
                  }`}
                >
                  <div className="mb-8">
                    <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-[#1A1A1A]"}`}>{plan.name}</h3>
                    <p className={`text-sm ${plan.highlight ? "text-white/60" : "text-[#1A1A1A]/60"}`}>{plan.description}</p>
                  </div>

                  <ul className="flex flex-col gap-4 flex-1 mb-10">
                    {plan.features.map((feature, fi) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-[13px] font-medium ${plan.highlight ? "text-white/80" : "text-[#1A1A1A]/80"}`}
                      >
                        <CheckCircle size={16} className={`shrink-0 ${plan.highlight ? "text-[#7C6FF5]" : "text-[#7C6FF5]"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={WHATSAPP_URL}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block text-center py-4 rounded-xl text-[13px] font-bold transition-all ${
                      plan.highlight 
                        ? "bg-white text-[#1A1A1A] hover:bg-gray-100" 
                        : "bg-[#1A1A1A] text-white hover:bg-black"
                    }`}
                  >
                    {plan.cta}
                  </motion.a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
