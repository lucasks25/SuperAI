"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import Reveal from "./Reveal"
import { HOW_IT_WORKS_STEPS } from "@/lib/constants"
import { WHATSAPP_URL } from "@/lib/constants"

export default function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="bg-[#020204] py-24 md:py-32 relative"
      aria-label="Como funciona"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#7C6FF5]/10 to-[#4ADE80]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto w-full max-w-[1200px] px-6 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-[32px] md:text-[48px] font-bold text-white tracking-tight leading-tight">
              O fluxo de um <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C6FF5] to-[#4ADE80]">SDR incansável</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[16px] md:text-[18px] text-white/50 max-w-2xl mx-auto mt-4">
              Veja como nossos Agentes convertem visitantes frios em reuniões agendadas no seu calendário, sem intervenção humana.
            </p>
          </Reveal>
        </div>

        <div
          className="relative z-10 border border-white/10 bg-white/[0.02] rounded-3xl backdrop-blur-md shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex min-h-[78px] items-center justify-between gap-4 border-b border-white/10 px-6 md:px-10 bg-white/[0.01]">
            <Reveal>
              <h3 className="text-[18px] md:text-[22px] font-semibold text-white">
                Como o Agente opera
              </h3>
            </Reveal>
            <Reveal delay={0.05}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden h-9 items-center justify-center border border-[#7C6FF5]/40 px-5 rounded-full text-[12px] font-bold uppercase text-[#7C6FF5] transition-colors hover:bg-[#7C6FF5] hover:text-white sm:inline-flex shadow-[0_0_15px_rgba(124,111,245,0.1)]"
              >
                Falar com especialista
              </a>
            </Reveal>
          </div>

          {/* Progress bar */}
          <div className="h-[2px] bg-white/5 overflow-hidden">
            <motion.div
              className="h-full origin-left"
              style={{
                scaleX: scrollYProgress,
                background: "linear-gradient(90deg, #7C6FF5, #4ADE80)",
              }}
            />
          </div>

          {/* Steps */}
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <div key={step.number}>
              {i > 0 && (
                <div className="h-[1px] bg-white/5 mx-6 md:mx-10" />
              )}
              <Reveal delay={0.08 * i}>
                <article
                  className="grid md:grid-cols-[280px_1fr] min-h-[140px] hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex flex-col justify-center gap-2 px-6 py-8 md:px-10 border-b md:border-b-0 md:border-r border-white/5">
                    <span className="text-[48px] md:text-[64px] font-bold leading-none text-white/10 select-none tracking-tighter">
                      {step.number}
                    </span>
                    <h4 className="text-[18px] md:text-[22px] font-semibold text-white leading-tight tracking-tight">
                      {step.title}
                    </h4>
                  </div>
                  <div className="flex items-center px-6 py-8 md:px-10">
                    <p className="text-[15px] md:text-[17px] text-white/60 leading-relaxed max-w-[600px]">
                      {step.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
