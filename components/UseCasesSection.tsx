"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { InstagramLeadAnim, WhatsappDuvidaAnim, EscalaConversasAnim, CtaMarcaAnim } from "@/components/ChatAnimations"

const CARDS = [
  {
    title: "IA para prospecção\ne enriquecimento",
    desc: "Encontre leads ideais, enriqueça dados em segundos e aumente suas chances de conversão com IA.",
  },
  {
    title: "Execução de tarefas\ncom IA",
    desc: "Automatize ações repetitivas, crie fluxos inteligentes e foque no que realmente move o resultado.",
  },
  {
    title: "Integração\ninteligente e fluida",
    desc: "Conecte suas ferramentas favoritas e centralize dados, atividades e insights em um só lugar.",
  },
  {
    title: "IA que conversa\ncom seu cliente",
    desc: "Atenda, qualifique e engaje em escala com assistentes inteligentes que falam a língua do seu cliente.",
  },
]

const ANIM_COMPONENTS = [InstagramLeadAnim, WhatsappDuvidaAnim, EscalaConversasAnim, CtaMarcaAnim]

export default function UseCasesSection() {
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * (CARDS.length - 0.01))
    if (index >= CARDS.length) index = CARDS.length - 1
    if (index < 0) index = 0
    setActive(index)
  })

  const ActiveAnim = ANIM_COMPONENTS[active]

  return (
    <section ref={containerRef} className="relative w-full bg-[#D4FF00]" style={{ height: `${CARDS.length * 100}vh` }} id="casos-de-uso">

      {/* Sticky Inner Container */}
      <div className="sticky top-0 w-full h-screen flex flex-col overflow-hidden">

        {/* Subtle wavy lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='240' height='120' viewBox='0 0 240 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,60 Q60,20 120,60 T240,60' fill='none' stroke='%23000' stroke-width='1.5' stroke-linecap='round' stroke-opacity='0.04'/%3E%3C/svg%3E")`,
            backgroundSize: "240px 120px",
            transform: "rotate(-5deg) scale(1.2)",
            transformOrigin: "center",
          }}
        />

        <div className="relative z-10 w-full h-full flex flex-col md:flex-row">

          {/* Text + CTA — left on desktop, fills full height on mobile */}
          <div className="flex-1 flex flex-col p-5 sm:p-8 md:p-16 lg:p-24 md:border-r border-black/10 relative overflow-y-auto md:overflow-visible">

            <div className="flex flex-col max-w-[800px] mt-14 md:mt-20">
              {/* Progress dots */}
              <div className="flex items-center gap-2 mb-3 md:mb-24">
                {CARDS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 transition-all duration-300 rounded-full ${i === active ? "w-12 bg-black" : "w-6 bg-black/20"}`}
                  />
                ))}
              </div>

              {/* Animated text — fixed height prevents layout jump on tab change */}
              <div className="relative mb-3 md:mb-0 h-[160px] md:h-[200px]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col"
                  >
                    <h2 className="text-[38px] sm:text-[42px] md:text-[42px] lg:text-[46px] xl:text-[52px] font-black leading-[1.05] text-black tracking-tighter mb-2 md:mb-4 whitespace-pre-line">
                      {CARDS[active].title}
                    </h2>
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] text-black/80 font-medium leading-relaxed max-w-[600px]">
                      {CARDS[active].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mockup — mobile only, inline below text */}
              <div className="md:hidden flex justify-center mt-5">
                <div className="w-[58%] aspect-[4/5] bg-[#05050A] rounded-[1.2rem] shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0"
                    >
                      <ActiveAnim />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* CTA — mobile: below the card with spacing */}
              <div className="md:hidden mt-6 w-full">
                <button className="w-full bg-black text-white rounded-full py-4 font-black uppercase tracking-[0.2em] text-[13px] hover:bg-black/90 hover:scale-[1.02] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                  Começar Agora
                </button>
              </div>
            </div>

            {/* CTA — desktop only, pinned to bottom */}
            <div className="hidden md:block mt-auto w-full max-w-[550px]">
              <button className="w-full bg-black text-white rounded-full py-6 font-black uppercase tracking-[0.2em] text-[15px] hover:bg-black/90 hover:scale-[1.02] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                Começar Agora
              </button>
            </div>
          </div>

          {/* Animation mockup — right column on desktop only */}
          <div className="hidden md:flex md:order-2 flex-1 p-8 md:p-16 lg:p-24 items-center justify-center">
            <div className="w-full max-w-[400px] aspect-[4/5] bg-[#05050A] rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <ActiveAnim />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
