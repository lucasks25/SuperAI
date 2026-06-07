"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Bot, CheckCircle, Pause } from "lucide-react"
import Reveal from "./Reveal"

const STEPS = [
  { icon: <Bot size={13} />,         label: "IA ativa",                     sub: "Respondendo automaticamente", color: "#7C6FF5", bg: "rgba(124,111,245,0.08)" },
  { icon: <Users size={13} />,       label: "Cliente pediu humano",         sub: "Solicitação detectada",        color: "#D97706", bg: "rgba(217,119,6,0.08)"   },
  { icon: <CheckCircle size={13} />, label: "Humano ativado",               sub: "Equipe notificada",           color: "#16A34A", bg: "rgba(22,163,74,0.08)"    },
  { icon: <Pause size={13} />,       label: "IA pausada",                   sub: "Aguardando reativação",       color: "#94A3B8", bg: "rgba(148,163,184,0.07)"  },
]

export default function HumanHandoffSection() {
  const [on, setOn] = useState(false)

  return (
    <section
      id="humano"
      className="bg-[#F2F2F2] py-20 md:py-32 overflow-hidden"
      aria-label="Atendimento humano"
    >
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="relative z-10 border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          <div className="grid lg:grid-cols-[1fr_1.05fr] min-h-[480px]">

            {/* Left — text */}
            <div className="flex flex-col justify-center px-6 py-12 md:px-10 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/[0.10]">
              <Reveal>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#16A34A] mb-5">
                  Atendimento humano
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-medium leading-[1.04] tracking-tight text-[#171717] mb-5">
                  A IA sabe<br />a hora de parar
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="text-[14px] text-[#1A1A1A]/55 leading-relaxed mb-8 max-w-[400px]">
                  Quando o cliente precisa de um humano, o agente pausa automaticamente e libera o controle para a sua equipe — sem perder o histórico.
                </p>
              </Reveal>
              <ul className="flex flex-col gap-3.5">
                {["O humano assume a conversa", "A IA para de responder imediatamente", "Histórico completo fica disponível", "IA pode ser reativada quando necessário"].map((item, i) => (
                  <Reveal key={item} delay={0.18 + i * 0.05}>
                    <li className="flex items-center gap-3 text-[13px] font-medium text-[#1A1A1A]/70">
                      <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-[#16A34A]" />
                      {item}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* Right — panel */}
            <div className="flex items-center justify-center px-6 py-12 md:px-10 bg-[#EFEFEB]">
              <Reveal y={0} x={30} delay={0.2}>
                <div className="w-full max-w-[300px] bg-white border border-[#1A1A1A]/[0.09] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-6">
                  {/* Toggle */}
                  <div className="flex items-center justify-between mb-7 pb-6 border-b border-[#1A1A1A]/[0.07]">
                    <div>
                      <p className="text-[13px] font-semibold text-[#171717]">Atendimento humano</p>
                      <p className="text-[11px] text-[#1A1A1A]/40 mt-0.5">
                        {on ? "Humano no controle" : "IA respondendo"}
                      </p>
                    </div>
                    <button
                      onClick={() => setOn(!on)}
                      className="relative w-11 h-6 rounded-full transition-colors duration-300 focus-visible:outline-none"
                      style={{ background: on ? "#16A34A" : "rgba(124,111,245,0.20)" }}
                      aria-label="Alternar atendimento humano"
                    >
                      <motion.span
                        animate={{ x: on ? 22 : 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 22 }}
                        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow block"
                      />
                    </button>
                  </div>

                  {/* Timeline */}
                  <div className="flex flex-col gap-4 relative">
                    <div
                      className="absolute left-[16px] top-5 bottom-5 w-px"
                      style={{ background: "linear-gradient(to bottom, #7C6FF5, #16A34A, rgba(148,163,184,0.2))" }}
                    />
                    {STEPS.map((step, i) => (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-3.5"
                      >
                        <div
                          className="w-8 h-8 flex items-center justify-center shrink-0 relative z-10 transition-shadow duration-300"
                          style={{
                            background: step.bg,
                            color: step.color,
                            boxShadow: i === 2 && on ? `0 0 10px ${step.color}40` : "none",
                          }}
                        >
                          {step.icon}
                        </div>
                        <div className="pt-1">
                          <p className="text-[12px] font-semibold text-[#171717]">{step.label}</p>
                          <p className="text-[11px] text-[#1A1A1A]/40">{step.sub}</p>
                        </div>
                        {i === 3 && (
                          <AnimatePresence>
                            {on && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.85 }}
                                className="ml-auto mt-1 px-2 py-0.5 text-[9px] font-semibold bg-[#F1F5F9] text-[#94A3B8]"
                              >
                                pausada
                              </motion.span>
                            )}
                          </AnimatePresence>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
