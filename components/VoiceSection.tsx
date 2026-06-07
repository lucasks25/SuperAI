"use client"

import { motion } from "framer-motion"
import { Mic, Play, CheckCircle } from "lucide-react"
import Reveal from "./Reveal"

const BARS = [18, 28, 36, 48, 32, 56, 44, 60, 52, 40, 56, 46, 32, 50, 38, 28, 44, 34, 22, 40]

const STEPS = [
  { icon: <Mic size={13} />,           label: "Áudio recebido",  color: "#7C6FF5", bg: "rgba(124,111,245,0.08)" },
  { icon: <span className="text-[10px] font-bold">···</span>, label: "Transcrevendo", color: "#0EA5E9", bg: "rgba(14,165,233,0.08)" },
  { icon: <CheckCircle size={13} />,   label: "Resposta gerada", color: "#16A34A", bg: "rgba(22,163,74,0.08)"   },
  { icon: <Play size={13} />,          label: "Áudio enviado",   color: "#D97706", bg: "rgba(217,119,6,0.08)"   },
]

export default function VoiceSection() {
  return (
    <section
      id="voz"
      className="bg-[#F2F2F2] py-20 md:py-32 overflow-hidden"
      aria-label="Voz humanizada"
    >
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="relative z-10 border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          <div className="grid lg:grid-cols-[1.05fr_1fr] min-h-[480px]">

            {/* Left — player */}
            <div className="flex items-center justify-center px-6 py-12 md:px-10 bg-[#EFEFEB] border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/[0.10]">
              <Reveal y={0} x={-20} delay={0.15}>
                <div className="w-full max-w-[340px] flex flex-col gap-4">
                  {/* Player card */}
                  <div className="bg-white border border-[#1A1A1A]/[0.09] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-5">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 flex items-center justify-center bg-[#7C6FF5]/10">
                        <Mic size={15} className="text-[#7C6FF5]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[12px] font-semibold text-[#171717]">Mensagem de voz recebida</p>
                        <p className="text-[10px] text-[#1A1A1A]/40">Processando em tempo real</p>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center border border-[#1A1A1A]/[0.12] bg-[#F5F4EF] cursor-pointer hover:bg-white transition-colors">
                        <Play size={11} className="text-[#1A1A1A]/60" />
                      </div>
                    </div>

                    {/* Waveform */}
                    <div className="flex items-end justify-center gap-[3px] h-12 mb-3">
                      {BARS.map((h, i) => (
                        <motion.div
                          key={i}
                          style={{ width: 3, height: h * 0.75, background: "linear-gradient(180deg, #7C6FF5 0%, rgba(124,111,245,0.2) 100%)" }}
                          animate={{ scaleY: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.06, ease: "easeInOut" }}
                        />
                      ))}
                    </div>

                    <div className="h-px bg-[#1A1A1A]/[0.07] overflow-hidden">
                      <motion.div
                        className="h-full bg-[#7C6FF5]"
                        animate={{ width: ["0%", "65%"] }}
                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                      />
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <span className="text-[9px] text-[#1A1A1A]/35">0:04</span>
                      <span className="text-[9px] text-[#1A1A1A]/35">0:12</span>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="grid grid-cols-4 gap-2">
                    {STEPS.map((step, i) => (
                      <Reveal key={step.label} delay={0.1 * i}>
                        <div className="bg-white border border-[#1A1A1A]/[0.08] flex flex-col items-center gap-1.5 px-2 py-3 text-center">
                          <div className="w-7 h-7 flex items-center justify-center" style={{ background: step.bg, color: step.color }}>
                            {step.icon}
                          </div>
                          <p className="text-[9px] font-medium text-[#1A1A1A]/50 leading-tight">{step.label}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — text */}
            <div className="flex flex-col justify-center px-6 py-12 md:px-10">
              <Reveal>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7C6FF5] mb-5">
                  Voz humanizada
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-medium leading-[1.04] tracking-tight text-[#171717] mb-5">
                  Atendimento que<br />escuta e responde<br />como gente
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="text-[14px] text-[#1A1A1A]/55 leading-relaxed max-w-[400px]">
                  O agente interpreta áudios enviados pelo cliente e responde com texto ou voz humanizada — mantendo a conversa fluida e natural.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
