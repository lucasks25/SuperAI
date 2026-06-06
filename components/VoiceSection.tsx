"use client"

// Effects: Animated Audio Waveform · Audio Processing Steps · Sound Glow Pulse · Glass Audio Player · Breathing Background
import { motion } from "framer-motion"
import { Mic, Play, CheckCircle } from "lucide-react"
import SectionHeader from "./SectionHeader"
import Reveal from "./Reveal"

const WAVEFORM_HEIGHTS = [18, 28, 36, 48, 32, 56, 44, 60, 52, 40, 56, 46, 32, 50, 38, 28, 44, 34, 22, 40]

const STEPS = [
  { icon: <Mic size={14} />,           label: "Áudio recebido",   color: "#C084FC", bg: "rgba(192,132,252,0.12)" },
  { icon: <span className="text-[11px] font-bold">···</span>, label: "Transcrevendo...", color: "#22D3EE", bg: "rgba(34,211,238,0.1)" },
  { icon: <CheckCircle size={14} />,   label: "Resposta gerada",  color: "#A5A0F8", bg: "rgba(124,111,245,0.12)" },
  { icon: <Play size={14} />,          label: "Áudio enviado",    color: "#4ADE80", bg: "rgba(74,222,128,0.1)"  },
]

export default function VoiceSection() {
  return (
    <section
      id="voz"
      className="section relative overflow-hidden"
      style={{ background: "#04050D" }}
      aria-label="Voz humanizada"
    >
      {/* Effect: Breathing Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(192,132,252,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative container-xl">
        <SectionHeader
          badge="Voz humanizada"
          title="Atendimento que escuta e responde como gente"
          subtitle="O agente pode interpretar áudios enviados pelo cliente e responder com texto ou voz humanizada, mantendo uma conversa mais natural."
          className="mb-16"
        />

        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          {/* Effect: Glass Audio Player */}
          <Reveal delay={0.15}>
            <div
              className="glass rounded-3xl p-6 relative overflow-hidden"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(192,132,252,0.08)" }}
            >
              {/* Effect: Sound Glow Pulse */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: [0.3, 0.65, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(192,132,252,0.12) 0%, transparent 70%)" }}
              />

              <div className="flex items-center gap-3 mb-6 relative">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(192,132,252,0.12)" }}>
                  <Mic size={18} className="text-[#C084FC]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#E8ECFF]">Mensagem de voz recebida</p>
                  <p className="text-xs text-[#7D8DB8]">Processando em tempo real</p>
                </div>
                <div
                  className="ml-auto w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                  style={{ background: "rgba(192,132,252,0.1)", border: "1px solid rgba(192,132,252,0.25)" }}
                >
                  <Play size={14} className="text-[#C084FC]" />
                </div>
              </div>

              {/* Effect: Animated Audio Waveform */}
              <div className="flex items-end justify-center gap-[3px] h-16 relative mb-4">
                {WAVEFORM_HEIGHTS.map((h, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: "4px",
                      height: `${h}px`,
                      background: "linear-gradient(180deg, #C084FC 0%, rgba(192,132,252,0.3) 100%)",
                    }}
                    animate={{ scaleY: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.06, ease: "easeInOut" }}
                  />
                ))}
              </div>

              {/* Progress bar */}
              <div className="relative h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #C084FC, #22D3EE)" }}
                  animate={{ width: ["0%", "65%"] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-[10px] text-[#7D8DB8]">0:04</span>
                <span className="text-[10px] text-[#7D8DB8]">0:12</span>
              </div>
            </div>
          </Reveal>

          {/* Effect: Audio Processing Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.label} delay={0.12 * i}>
                <motion.div
                  className="glass rounded-2xl px-3 py-4 flex flex-col items-center gap-2 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.25 }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: step.bg, color: step.color }}>
                    {step.icon}
                  </div>
                  <p className="text-[11px] font-medium text-[#7D8DB8] leading-tight">{step.label}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
