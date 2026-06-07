"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Reveal from "./Reveal"
import { WHATSAPP_URL } from "@/lib/constants"

const PIPELINE = [
  { label: "Detecta",   desc: "Identifica canal, intenção e perfil do contato",         color: "#7C6FF5" },
  { label: "Qualifica", desc: "Faz as perguntas certas no momento certo",                color: "#5B8FF9" },
  { label: "Agenda",    desc: "Confirma horário ou encaminha ao time de vendas",          color: "#2F9E75" },
  { label: "Registra",  desc: "Salva tudo no CRM automaticamente",                       color: "#4ADE80" },
]

const CHAT = [
  { from: "client", text: "Oi, queria saber sobre os planos" },
  { from: "ai",     text: "Olá! Para te indicar o melhor plano, me conta: quantas mensagens vocês recebem por dia?" },
  { from: "client", text: "Umas 80 a 100 por dia" },
  { from: "ai",     text: "Perfeito. Você tem CRM hoje? Ou quer que a gente já integre tudo do zero?" },
]

export default function SDRSection() {
  return (
    <section
      id="sdr"
      className="bg-[#F2F2F2] py-20 md:py-32 overflow-hidden"
      aria-label="Agente SDR"
    >
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="border border-[#1A1A1A]/[0.10] bg-[#F8F7F2] rounded-2xl overflow-hidden"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          <div className="grid lg:grid-cols-[1fr_1px_1.1fr]">

            {/* Left — text + pipeline */}
            <div className="flex flex-col justify-center px-7 py-12 md:px-10 md:py-14">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7C6FF5] mb-5">
                  SDR com IA
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="text-[30px] md:text-[42px] font-semibold leading-[1.07] tracking-tight text-[#171717] mb-4">
                  Transforme conversas<br className="hidden md:block" /> em oportunidades reais
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[14px] text-[#1A1A1A]/50 leading-relaxed mb-10 max-w-[400px]">
                  O agente qualifica cada contato com critério — e só aciona sua equipe quando o lead está pronto.
                </p>
              </Reveal>

              {/* Pipeline visual */}
              <div className="flex flex-col gap-0 mb-10">
                {PIPELINE.map((step, i) => (
                  <Reveal key={step.label} delay={0.13 + i * 0.06}>
                    <div className="flex items-stretch gap-0">
                      {/* Left: number + line */}
                      <div className="flex flex-col items-center mr-4">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 text-white"
                          style={{ background: step.color }}
                        >
                          {i + 1}
                        </div>
                        {i < PIPELINE.length - 1 && (
                          <div className="w-px flex-1 my-1.5" style={{ background: `${step.color}30`, minHeight: 20 }} />
                        )}
                      </div>
                      {/* Content */}
                      <div className="pb-5">
                        <p className="text-[15px] font-semibold text-[#171717] leading-none mb-1">{step.label}</p>
                        <p className="text-[12px] text-[#1A1A1A]/45 leading-snug">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.38}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-xl text-[13px] font-semibold text-white transition-opacity hover:opacity-80"
                  style={{ background: "#7C6FF5" }}
                >
                  Falar com especialista <ArrowRight size={13} />
                </a>
              </Reveal>
            </div>

            {/* Divider */}
            <div className="hidden lg:block bg-[#1A1A1A]/[0.08]" />

            {/* Right — WhatsApp mockup */}
            <div className="flex items-center justify-center px-7 py-12 md:px-10 bg-[#EEEEE9] border-t lg:border-t-0 border-[#1A1A1A]/[0.08]">
              <Reveal y={0} x={24} delay={0.2}>
                <div className="w-full max-w-[300px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)] border border-[#1A1A1A]/[0.07]">
                  {/* WA header */}
                  <div className="px-4 py-3 flex items-center gap-3 bg-[#075E54]">
                    <div className="w-8 h-8 rounded-full bg-[#7C6FF5] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-white">Assistente SuperAI</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                        <p className="text-[10px] text-white/60">online agora</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat */}
                  <div className="px-3.5 py-4 flex flex-col gap-2.5 bg-[#ECE5DD]">
                    {CHAT.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.28 }}
                        className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className="max-w-[84%] px-3 py-2 text-[12px] leading-relaxed shadow-sm"
                          style={{
                            background: msg.from === "client" ? "#DCF8C6" : "#FFFFFF",
                            color: "#111B21",
                            borderRadius: msg.from === "client" ? "12px 12px 3px 12px" : "12px 12px 12px 3px",
                          }}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                    {/* Typing */}
                    <motion.div
                      className="flex justify-start"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.8 }}
                    >
                      <div className="px-3 py-2.5 bg-white rounded-[12px_12px_12px_3px] flex gap-1 shadow-sm">
                        {[0, 0.18, 0.36].map((d) => (
                          <motion.span
                            key={d}
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: d }}
                            className="block w-1.5 h-1.5 rounded-full bg-[#111B21]/30"
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Lead score bar */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.1 }}
                    className="px-4 py-3 bg-white border-t border-[#1A1A1A]/[0.05] flex items-center justify-between"
                  >
                    <div>
                      <p className="text-[11px] font-bold text-[#16A34A]">Lead qualificado</p>
                      <p className="text-[10px] text-[#1A1A1A]/35 mt-0.5">Próximo passo: demonstração</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4].map((v) => (
                        <span key={v} className="w-1.5 h-5 rounded-sm" style={{ background: v <= 4 ? "#16A34A" : "#e5e7eb" }} />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
