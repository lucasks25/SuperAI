"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"
import Reveal from "./Reveal"
import MockupCard from "./MockupCard"
import { WHATSAPP_URL } from "@/lib/constants"

const CHAT = [
  { from: "client", text: "Oi, queria saber mais sobre o atendimento" },
  { from: "ai",     text: "Claro. Me conta rapidinho o que você precisa resolver hoje?" },
  { from: "client", text: "Quero agendar uma avaliação" },
  { from: "ai",     text: "Perfeito. Tenho horários disponíveis amanhã às 10h ou 15h. Qual prefere?" },
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
      className="overflow-hidden py-20 md:py-32"
      style={{ background: "#04050D" }}
      aria-label="Agente SDR"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7C6FF5] mb-5">
                SDR com IA
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-[34px] md:text-[44px] lg:text-[52px] font-medium leading-[1.02] tracking-tight text-[#E8ECFF] mb-6">
                Transforme conversas<br />em oportunidades reais
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-[15px] text-[#7D8DB8] leading-relaxed mb-10 max-w-[460px]">
                O agente identifica se o contato é lead novo, cliente ativo ou atendimento em andamento — e conduz a conversa com critério e timing.
              </p>
            </Reveal>

            <ul className="flex flex-col gap-4 mb-10">
              {BULLETS.map((b, i) => (
                <Reveal key={b} delay={0.18 + i * 0.06}>
                  <li className="flex items-center gap-3.5 text-[14px] text-[#E8ECFF]/70">
                    <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-[#7C6FF5]" />
                    {b}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.38}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#A5A0F8] hover:opacity-70 transition-opacity"
              >
                Falar com especialista <ArrowRight size={13} />
              </a>
            </Reveal>
          </div>

          {/* Right — mockup */}
          <Reveal y={0} x={40} delay={0.15}>
            <MockupCard title="WhatsApp — SuperAI" className="max-w-sm mx-auto">
              <div className="px-4 py-3 flex items-center gap-3 bg-[#075E54] text-white">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={15} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold">Assistente SuperAI</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                    <p className="text-[10px] opacity-70">online</p>
                  </div>
                </div>
              </div>

              <div
                className="px-4 py-5 flex flex-col gap-2.5 min-h-[280px]"
                style={{ background: "linear-gradient(180deg, #0e0e1a 0%, #131326 100%)" }}
              >
                {CHAT.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.35 }}
                    className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className="max-w-[80%] px-3 py-2 text-[12px] leading-relaxed"
                      style={{
                        background: msg.from === "client" ? "rgba(124,111,245,0.25)" : "rgba(255,255,255,0.07)",
                        color: "#E8ECFF",
                        borderRadius: msg.from === "client" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
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
                  transition={{ delay: 1.9 }}
                >
                  <div className="px-4 py-3 flex gap-1 items-center" style={{ background: "rgba(255,255,255,0.07)", borderRadius: "16px 16px 16px 4px" }}>
                    {[0, 0.2, 0.4].map((d) => (
                      <motion.span
                        key={d}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: d }}
                        className="block w-1.5 h-1.5 rounded-full bg-[#7D8DB8]"
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2.2 }}
                className="mx-4 my-3 px-4 py-3 flex items-center justify-between"
                style={{
                  background: "rgba(74,222,128,0.07)",
                  border: "1px solid rgba(74,222,128,0.18)",
                }}
              >
                <div>
                  <p className="text-[11px] font-semibold text-[#4ADE80]">Lead quente</p>
                  <p className="text-[10px] text-[#7D8DB8] mt-0.5">Próxima ação: agendar</p>
                </div>
                <p className="text-sm font-bold text-[#4ADE80]">Alta</p>
              </motion.div>
            </MockupCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
