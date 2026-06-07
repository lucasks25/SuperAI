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
      className="bg-[#F2F2F2] py-20 md:py-32"
      aria-label="Como funciona"
    >
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="relative z-10 border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          {/* Header */}
          <div className="flex min-h-[78px] items-center justify-between gap-4 border-b border-[#1A1A1A]/[0.12] px-5 md:px-8">
            <Reveal>
              <h2 className="text-[24px] font-medium leading-tight text-[#22211F] md:text-[31px]">
                Como funciona
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden h-9 items-center justify-center border border-[#7C57E8]/40 px-4 text-[10px] font-semibold uppercase text-[#7C57E8] transition-colors hover:bg-[#7C57E8] hover:text-white sm:inline-flex"
              >
                Falar com especialista
              </a>
            </Reveal>
          </div>

          {/* Progress bar */}
          <div className="h-px bg-[#1A1A1A]/[0.06] overflow-hidden">
            <motion.div
              className="h-full origin-left"
              style={{
                scaleX: scrollYProgress,
                background: "linear-gradient(90deg, #7C6FF5, #22D3EE)",
              }}
            />
          </div>

          {/* Steps */}
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <div key={step.number}>
              {i > 0 && (
                <div className="h-4 border-b border-[#1A1A1A]/[0.08] bg-[#EBEBEB]" />
              )}
              <Reveal delay={0.08 * i}>
                <article
                  className={`grid md:grid-cols-[260px_1fr] min-h-[140px] bg-[#F8F7F2] ${
                    i !== HOW_IT_WORKS_STEPS.length - 1
                      ? "border-b border-[#1A1A1A]/[0.10]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-5 px-5 py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#1A1A1A]/[0.08]">
                    <span className="text-[72px] font-medium leading-none text-[#1A1A1A]/[0.05] select-none tracking-tighter shrink-0">
                      {step.number}
                    </span>
                    <h3 className="text-[20px] md:text-[24px] font-medium text-[#171717] leading-tight tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <div className="flex items-center px-5 py-8 md:px-10">
                    <p className="text-[15px] text-[#1A1A1A]/55 leading-relaxed max-w-[560px]">
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
