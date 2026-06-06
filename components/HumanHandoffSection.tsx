"use client"

// Effects: Status Timeline Reveal · Toggle Switch Animation · AI Pause State · Human Handoff Glow
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Bot, CheckCircle, Pause } from "lucide-react"
import SectionHeader from "./SectionHeader"
import Reveal from "./Reveal"

const STATUS_STEPS = [
  { icon: <Bot size={14} />,         label: "IA ativa",                         sub: "Respondendo automaticamente",  color: "#A5A0F8", bg: "rgba(124,111,245,0.12)" },
  { icon: <Users size={14} />,       label: "Cliente pediu humano",             sub: "Solicitação detectada",         color: "#FCD34D", bg: "rgba(252,211,77,0.1)"   },
  { icon: <CheckCircle size={14} />, label: "Atendimento humanizado ativado",   sub: "Equipe notificada",            color: "#4ADE80", bg: "rgba(74,222,128,0.1)"   },
  { icon: <Pause size={14} />,       label: "IA pausada",                       sub: "Aguardando reativação",        color: "#7D8DB8", bg: "rgba(125,141,184,0.08)"  },
]

export default function HumanHandoffSection() {
  const [humanActive, setHumanActive] = useState(false)

  return (
    <section
      id="humano"
      className="section overflow-hidden"
      style={{ background: "#080B1E" }}
      aria-label="Atendimento humano"
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <SectionHeader
              badge="Atendimento humano"
              title="A IA sabe a hora de parar"
              subtitle="Quando o cliente pede atendimento humano ou quando a conversa exige intervenção manual, o agente pausa automaticamente e libera o controle para a equipe."
              align="left"
            />
            <ul className="flex flex-col gap-3 mt-2">
              {["O humano assume a conversa","A IA deixa de responder","O histórico continua disponível","A IA pode ser reativada depois"].map((item, i) => (
                <Reveal key={item} delay={0.1 * i}>
                  <li className="flex items-center gap-3 text-sm text-[#7D8DB8]">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#7C6FF5" }} />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Right — status panel */}
          <Reveal y={0} x={40} delay={0.15}>
            <div className="relative max-w-sm mx-auto">
              {/* Blurred conversation bg */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none" style={{ filter: "blur(2px)", opacity: 0.25 }}>
                <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #080B1E, #0d1030)" }}>
                  {[40, 70, 55, 80, 45, 65].map((w, i) => (
                    <div key={i} className="flex px-4 py-1.5" style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                      <div className="h-4 rounded-full" style={{ width: `${w}%`, background: "rgba(255,255,255,0.06)" }} />
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="glass rounded-3xl p-6 relative"
                style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}
              >
                {/* Toggle */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm font-semibold text-[#E8ECFF]">Atendimento humano</p>
                    <p className="text-xs text-[#7D8DB8]">{humanActive ? "Humano no controle" : "IA respondendo"}</p>
                  </div>
                  <button
                    onClick={() => setHumanActive(!humanActive)}
                    className="relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none"
                    style={{ background: humanActive ? "#4ADE80" : "rgba(124,111,245,0.3)" }}
                    aria-label="Alternar atendimento humano"
                  >
                    <motion.div
                      animate={{ x: humanActive ? 24 : 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                      className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
                    />
                  </button>
                </div>

                {/* Status timeline */}
                <div className="flex flex-col gap-3 relative">
                  <div
                    className="absolute left-[18px] top-6 bottom-6 w-px"
                    style={{ background: "linear-gradient(to bottom, #7C6FF5, #4ADE80, rgba(125,141,184,0.15))" }}
                  />
                  {STATUS_STEPS.map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.12 * i }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 relative z-10"
                        style={{
                          background: step.bg,
                          color: step.color,
                          boxShadow: i === 2 && humanActive ? `0 0 16px ${step.color}50` : "none",
                        }}
                      >
                        {step.icon}
                      </div>
                      <div className="pt-1.5">
                        <p className="text-[12px] font-semibold text-[#E8ECFF]">{step.label}</p>
                        <p className="text-[11px] text-[#7D8DB8]">{step.sub}</p>
                      </div>
                      {i === 3 && (
                        <AnimatePresence>
                          {humanActive && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.85 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.85 }}
                              className="ml-auto mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                              style={{ background: "rgba(125,141,184,0.1)", color: "#7D8DB8" }}
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
