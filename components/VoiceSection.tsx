"use client"

import { motion } from "framer-motion"
import { Mic, Play, CheckCircle } from "lucide-react"
import Reveal from "./Reveal"

const BARS = [18, 28, 36, 48, 32, 56, 44, 60, 52, 40, 56, 46, 32, 50, 38, 28, 44, 34, 22, 40]

const STEPS = [
  { icon: <Mic size={13} />,           label: "Áudio recebido",    color: "#C084FC", bg: "rgba(192,132,252,0.10)" },
  { icon: <span className="text-[10px] font-bold">···</span>, label: "Transcrevendo",  color: "#22D3EE", bg: "rgba(34,211,238,0.08)" },
  { icon: <CheckCircle size={13} />,   label: "Resposta gerada",   color: "#A5A0F8", bg: "rgba(124,111,245,0.10)" },
  { icon: <Play size={13} />,          label: "Áudio enviado",     color: "#4ADE80", bg: "rgba(74,222,128,0.08)"  },
]

export default function VoiceSection() {
  return (
    <section
      id="voz"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: "#080B1E" }}
      aria-label="Voz humanizada"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(192,132,252,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C084FC] mb-5">
                Voz humanizada
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-[34px] md:text-[44px] lg:text-[52px] font-medium leading-[1.02] tracking-tight text-[#E8ECFF] mb-6">
                Atendimento que<br />escuta e responde<br />como gente
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-[15px] text-[#7D8DB8] leading-relaxed max-w-[460px]">
                O agente interpreta áudios enviados pelo cliente e responde com texto ou voz humanizada — mantendo a conversa fluida e natural.
              </p>
            </Reveal>
          </div>

          {/* Right — audio player */}
          <Reveal y={0} x={40} delay={0.2}>
            <div className="max-w-md mx-auto flex flex-col gap-5">
              <div
                className="glass rounded-2xl p-6 relative overflow-hidden"
                style={{ boxShadow: "0 20px_50px_rgba(0,0,0,0.45), 0 0 30px rgba(192,132,252,0.06)" }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(192,132,252,0.10) 0%, transparent 70%)" }}
                />
                <div className="flex items-center gap-3 mb-5 relative">
                  <div className="w-9 h-9 flex items-center justify-center" style={{ background: "rgba(192,132,252,0.10)" }}>
                    <Mic size={16} className="text-[#C084FC]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#E8ECFF]">Mensagem de voz recebida</p>
                    <p className="text-[11px] text-[#7D8DB8]">Processando em tempo real</p>
                  </div>
                  <div
                    className="ml-auto w-9 h-9 flex items-center justify-center cursor-pointer"
                    style={{ background: "rgba(192,132,252,0.08)", border: "1px solid rgba(192,132,252,0.20)" }}
                  >
                    <Play size={12} className="text-[#C084FC]" />
                  </div>
                </div>

                <div className="flex items-end justify-center gap-[3px] h-14 mb-4">
                  {BARS.map((h, i) => (
                    <motion.div
                      key={i}
                      style={{ width: 4, height: h, background: "linear-gradient(180deg, #C084FC 0%, rgba(192,132,252,0.25) 100%)" }}
                      animate={{ scaleY: [0.35, 1, 0.35] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.06, ease: "easeInOut" }}
                    />
                  ))}
                </div>

                <div className="h-px rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    className="h-full"
                    style={{ background: "linear-gradient(90deg, #C084FC, #22D3EE)" }}
                    animate={{ width: ["0%", "65%"] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-[#7D8DB8]">0:04</span>
                  <span className="text-[10px] text-[#7D8DB8]">0:12</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {STEPS.map((step, i) => (
                  <Reveal key={step.label} delay={0.1 * i}>
                    <div className="glass flex flex-col items-center gap-2 px-2 py-4 text-center">
                      <div className="w-8 h-8 flex items-center justify-center" style={{ background: step.bg, color: step.color }}>
                        {step.icon}
                      </div>
                      <p className="text-[10px] font-medium text-[#7D8DB8] leading-tight">{step.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
