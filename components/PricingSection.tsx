"use client"

import { ArrowRight } from "lucide-react"
import Reveal from "./Reveal"
import { PRICING_PLANS, WHATSAPP_URL } from "@/lib/constants"

export default function PricingSection() {
  return (
    <section
      id="planos"
      className="bg-[#F2F2F2] py-20 md:py-32"
      aria-label="Planos"
    >
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="relative z-10 border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] overflow-hidden"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          {/* Header */}
          <div className="flex min-h-[78px] items-center justify-between gap-4 border-b border-[#1A1A1A]/[0.12] px-5 md:px-8">
            <Reveal>
              <h2 className="text-[24px] font-medium leading-tight text-[#22211F] md:text-[31px]">
                Planos
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="hidden text-[13px] text-[#1A1A1A]/40 sm:block">
                Proposta personalizada para cada operação
              </p>
            </Reveal>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {PRICING_PLANS.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative flex flex-col ${
                  i !== PRICING_PLANS.length - 1
                    ? "border-b md:border-b-0 md:border-r border-[#1A1A1A]/[0.12]"
                    : ""
                } ${plan.highlight ? "bg-[#171717]" : "bg-[#F8F7F2]"}`}
              >
                {plan.badge && (
                  <span className="absolute top-0 right-0 px-3 py-1 text-[9px] font-bold uppercase tracking-widest bg-[#7C6FF5] text-white">
                    {plan.badge}
                  </span>
                )}
                <Reveal delay={0.08 * i}>
                  <div className="flex flex-col h-full px-6 py-10 md:px-8">
                    <div className="mb-8">
                      <h3
                        className={`text-[32px] font-medium tracking-tight mb-3 ${
                          plan.highlight ? "text-white" : "text-[#171717]"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`text-[13px] leading-relaxed ${
                          plan.highlight ? "text-white/45" : "text-[#1A1A1A]/45"
                        }`}
                      >
                        {plan.description}
                      </p>
                    </div>

                    <ul className="flex flex-col gap-3.5 flex-1 mb-12">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-3 text-[13px] font-medium leading-snug ${
                            plan.highlight ? "text-white/65" : "text-[#1A1A1A]/65"
                          }`}
                        >
                          <span
                            className={`mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full ${
                              plan.highlight ? "bg-[#7C6FF5]" : "bg-[#171717]"
                            }`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider transition-opacity hover:opacity-60 ${
                        plan.highlight ? "text-white" : "text-[#171717]"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
