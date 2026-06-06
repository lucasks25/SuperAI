"use client"

// Effects: Timeline Progress Line · Step Reveal on Scroll · Number Badge Glow · Progress Fill Animation
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import SectionHeader from "./SectionHeader"
import Reveal from "./Reveal"
import { HOW_IT_WORKS_STEPS } from "@/lib/constants"

export default function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"])

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="section overflow-hidden"
      style={{ background: "#04050D" }}
      aria-label="Como funciona"
    >
      <div className="container-xl">
        <SectionHeader badge="Processo" title="Do briefing ao agente funcionando" className="mb-20" />

        {/* Desktop horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
          {/* Horizontal line */}
          <div className="absolute top-6 left-[12%] right-[12%] h-px" style={{ background: "rgba(255,255,255,0.07)" }}>
            <motion.div
              className="h-full rounded-full origin-left"
              style={{ scaleX: scrollYProgress, background: "linear-gradient(90deg, #7C6FF5, #22D3EE)" }}
            />
          </div>

          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={0.15 * i}>
              <div className="flex flex-col items-center text-center pt-0">
                {/* Effect: Number Badge Glow */}
                <motion.div
                  className="relative w-12 h-12 rounded-full flex items-center justify-center mb-6 z-10"
                  style={{ background: "#080B1E", border: "2px solid rgba(124,111,245,0.3)" }}
                  whileInView={{ boxShadow: "0 0 0 4px rgba(8,11,30,1), 0 0 20px rgba(124,111,245,0.3)" }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-bold gradient-text">{step.number}</span>
                </motion.div>
                <h3 className="text-base font-semibold text-[#E8ECFF] mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-[#7D8DB8] leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden flex flex-col relative">
          <div className="absolute left-5 top-4 bottom-4 w-px overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <motion.div
              className="w-full origin-top rounded-full"
              style={{ height: lineHeight, background: "linear-gradient(180deg, #7C6FF5, #22D3EE)" }}
            />
          </div>
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={0.1 * i}>
              <div className="flex gap-6 pb-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10"
                  style={{ background: "#080B1E", border: "2px solid rgba(124,111,245,0.3)", boxShadow: "0 0 16px rgba(124,111,245,0.2)" }}
                >
                  <span className="text-xs font-bold gradient-text">{step.number}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-semibold text-[#E8ECFF] mb-1.5 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-[#7D8DB8] leading-relaxed">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
