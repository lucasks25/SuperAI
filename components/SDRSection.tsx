"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"
import Reveal from "./Reveal"
import { WHATSAPP_URL } from "@/lib/constants"

const CHAT = [
  { from: "client", text: "Oi, queria saber mais sobre o atendimento" },
  { from: "ai",     text: "Claro. Me conta o que você precisa resolver hoje?" },
  { from: "client", text: "Quero agendar uma avaliação" },
  { from: "ai",     text: "Perfeito. Tenho horários amanhã às 10h ou 15h. Qual prefere?" },
]

const BULLETS = [
  "Identifica nome e intenção do cliente",
  "Classifica lead novo ou cliente ativo",
  "Faz perguntas de qualificação no momento certo",
  "Registra dados e encaminha ao vendedor",
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
          className="relative z-10 border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          <div className="grid lg:grid-cols-[1fr_1.05fr] min-h-[520px]">

            {/* Left — text */}
            <div className="flex flex-col justify-center px-6 py-12 md:px-10 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/[0.10]">
              <Reveal>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7C6FF5] mb-5">
                  SDR com IA
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-medium leading-[1.04] tracking-tight text-[#171717] mb-5">
                  Transforme conversas<br />em oportunidades reais
                </h2>
              </Reveal>
              <Reveal delay={0.13}>
                <p className="text-[14px] text-[#1A1A1A]/55 leading-relaxed mb-8 max-w-[420px]">
                  O agente identifica se o contato é lead novo ou cliente ativo e conduz a conversa com critério e timing.
                </p>
              </Reveal>
              <ul className="flex flex-col gap-3.5 mb-10">
                {BULLETS.map((b, i) => (
                  <Reveal key={b} delay={0.16 + i * 0.05}>
                    <li className="flex items-center gap-3 text-[13px] font-medium text-[#1A1A1A]/70">
                      <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-[#7C6FF5]" />
                      {b}
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={0.36}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#7C6FF5] hover:opacity-60 transition-opacity"
                >
                  Falar com especialista <ArrowRight size={12} />
                </a>
              </Reveal>
            </div>

            {/* Right — WhatsApp mockup on cream */}
            <div className="flex items-center justify-center px-6 py-12 md:px-10 bg-[#EFEFEB]">
              <Reveal y={0} x={30} delay={0.18}>
                <div className="w-full max-w-[320px] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.14)] border border-[#1A1A1A]/[0.08]">
                  {/* WA header */}
                  <div className="px-4 py-3 flex items-center gap-3 bg-[#075E54] text-white">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <MessageCircle size={14} />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold">Assistente SuperAI</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                        <p className="text-[10px] opacity-70">online</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat */}
                  <div className="px-4 py-5 flex flex-col gap-2.5 min-h-[240px] bg-[#ECE5DD]">
                    {CHAT.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.3 }}
                        className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className="max-w-[82%] px-3 py-2 text-[12px] leading-relaxed shadow-sm"
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
                    <motion.div
                      className="flex justify-start"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.7 }}
                    >
                      <div className="px-3 py-2.5 bg-white rounded-[12px_12px_12px_3px] flex gap-1 shadow-sm">
                        {[0, 0.2, 0.4].map((d) => (
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

                  {/* Lead score */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.0 }}
                    className="px-4 py-3 flex items-center justify-between bg-white border-t border-[#1A1A1A]/[0.06]"
                  >
                    <div>
                      <p className="text-[11px] font-semibold text-[#16A34A]">Lead quente</p>
                      <p className="text-[10px] text-[#1A1A1A]/40 mt-0.5">Próxima ação: agendar</p>
                    </div>
                    <p className="text-[13px] font-bold text-[#16A34A]">Alta</p>
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
