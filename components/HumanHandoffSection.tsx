"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Bot, CheckCircle, Pause } from "lucide-react"
import Reveal from "./Reveal"

const STEPS = [
  { icon: <Bot size={13} />,         label: "IA ativa",                       sub: "Respondendo automaticamente",  color: "#A5A0F8", bg: "rgba(124,111,245,0.10)" },
  { icon: <Users size={13} />,       label: "Cliente pediu humano",           sub: "Solicitação detectada",         color: "#FCD34D", bg: "rgba(252,211,77,0.08)"  },
  { icon: <CheckCircle size={13} />, label: "Atendimento humano ativado",     sub: "Equipe notificada",            color: "#4ADE80", bg: "rgba(74,222,128,0.08)"  },
  { icon: <Pause size={13} />,       label: "IA pausada",                     sub: "Aguardando reativação",        color: "#7D8DB8", bg: "rgba(125,141,184,0.07)" },
]

export default function HumanHandoffSection() {
  const [on, setOn] = useState(false)

  return (
    <section
      id="humano"
      className="py-20 md:py-32 overflow-hidden"
      style={{ background: "#04050D" }}
      aria-label="Atendimento humano"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#4ADE80] mb-5">
                Atendimento humano
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-[34px] md:text-[44px] lg:text-[52px] font-medium leading-[1.02] tracking-tight text-[#E8ECFF] mb-6">
                A IA sabe<br />a hora de parar
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-[15px] text-[#7D8DB8] leading-relaxed mb-10 max-w-[460px]">
                Quando o cliente precisa de atendimento humano, o agente pausa automaticamente e libera o controle para a sua equipe — sem perder o histórico da conversa.
              </p>
            </Reveal>

            <ul className="flex flex-col gap-4">
              {["O humano assume a conversa", "A IA para de responder imediatamente", "Histórico completo fica disponível", "IA pode ser reativada quando necessário"].map((item, i) => (
                <Reveal key={item} delay={0.18 + i * 0.06}>
                  <li className="flex items-center gap-3.5 text-[14px] text-[#E8ECFF]/70">
                    <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-[#4ADE80]" />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Right — status panel */}
          <Reveal y={0} x={40} delay={0.2}>
            <div className="max-w-sm mx-auto">
              <div
                className="glass rounded-2xl p-6"
                style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}
              >
                {/* Toggle */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/[0.06]">
                  <div>
                    <p className="text-[13px] font-semibold text-[#E8ECFF]">Atendimento humano</p>
                    <p className="text-[11px] text-[#7D8DB8] mt-0.5">
                      {on ? "Humano no controle" : "IA respondendo"}
                    </p>
                  </div>
                  <button
                    onClick={() => setOn(!on)}
                    className="relative w-11 h-6 rounded-full transition-colors duration-300 focus-visible:outline-none"
                    style={{ background: on ? "#4ADE80" : "rgba(124,111,245,0.25)" }}
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
                    className="absolute left-[17px] top-5 bottom-5 w-px"
                    style={{ background: "linear-gradient(to bottom, #7C6FF5, #4ADE80, rgba(125,141,184,0.12))" }}
                  />
                  {STEPS.map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-3.5"
                    >
                      <div
                        className="w-[34px] h-[34px] flex items-center justify-center shrink-0 relative z-10 transition-shadow duration-300"
                        style={{
                          background: step.bg,
                          color: step.color,
                          boxShadow: i === 2 && on ? `0 0 14px ${step.color}45` : "none",
                        }}
                      >
                        {step.icon}
                      </div>
                      <div className="pt-1">
                        <p className="text-[12px] font-semibold text-[#E8ECFF]">{step.label}</p>
                        <p className="text-[11px] text-[#7D8DB8]">{step.sub}</p>
                      </div>
                      {i === 3 && (
                        <AnimatePresence>
                          {on && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.85 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.85 }}
                              className="ml-auto mt-1 px-2 py-0.5 text-[10px] font-semibold"
                              style={{ background: "rgba(125,141,184,0.08)", color: "#7D8DB8" }}
                            >
                              IA pausada
                            </motion.span>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
