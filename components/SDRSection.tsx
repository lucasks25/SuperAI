"use client"

// Effects: Chat Bubble Sequence · Message Typing Indicator · Lead Score Glow · Glass Device Frame
import { motion } from "framer-motion"
import { CheckCircle, MessageCircle } from "lucide-react"
import SectionHeader from "./SectionHeader"
import Reveal from "./Reveal"
import MockupCard from "./MockupCard"

const CHAT = [
  { from: "client", text: "Oi, queria saber mais sobre o atendimento" },
  { from: "ai",     text: "Claro. Me conta rapidinho o que você precisa resolver hoje?" },
  { from: "client", text: "Quero agendar uma avaliação" },
  { from: "ai",     text: "Perfeito. Tenho horários disponíveis amanhã às 10h ou 15h. Qual prefere?" },
]

const BULLETS = [
  "Identifica nome e intenção do cliente",
  "Classifica lead novo ou cliente",
  "Faz perguntas de qualificação",
  "Registra dados importantes",
  "Encaminha para vendedor quando necessário",
]

const bubbleVariants = {
  hidden:  { opacity: 0, y: 12, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.45, delay: 0.4 + i * 0.35, ease: "easeOut" },
  }),
}

export default function SDRSection() {
  return (
    <section
      id="sdr"
      className="section overflow-hidden"
      style={{ background: "#04050D" }}
      aria-label="Agente SDR"
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <SectionHeader
              badge="SDR com IA"
              title="Transforme conversas em oportunidades reais"
              subtitle="O agente identifica se o contato é novo lead, cliente ativo ou atendimento em andamento, e conduz a conversa conforme o contexto."
              align="left"
            />
            <ul className="flex flex-col gap-3 mt-2">
              {BULLETS.map((bullet, i) => (
                <Reveal key={bullet} delay={0.12 * i}>
                  <li className="flex items-center gap-3 text-sm text-[#7D8DB8]">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(124,111,245,0.12)" }}>
                      <CheckCircle size={12} className="text-[#A5A0F8]" />
                    </div>
                    {bullet}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Right — WhatsApp mockup */}
          <Reveal y={0} x={40} delay={0.15}>
            <MockupCard title="WhatsApp — SuperAI" className="max-w-sm mx-auto">
              {/* WA header */}
              <div className="px-4 py-3 flex items-center gap-3 bg-[#075E54] text-white">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold">Assistente SuperAI</p>
                  <p className="text-[10px] opacity-70">online</p>
                </div>
              </div>

              {/* Chat area */}
              <div
                className="px-4 py-5 flex flex-col gap-2.5 min-h-[280px]"
                style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)" }}
              >
                {CHAT.map((msg, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={bubbleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className="max-w-[80%] px-3 py-2 text-[12px] leading-relaxed shadow-sm"
                      style={{
                        background: msg.from === "client" ? "rgba(124,111,245,0.3)" : "rgba(255,255,255,0.08)",
                        color: "#E8ECFF",
                        borderRadius: msg.from === "client" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                      }}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Effect: Message Typing Indicator */}
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-2xl rounded-bl-[4px] px-4 py-3 flex gap-1 items-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                    {[0, 0.2, 0.4].map((d) => (
                      <motion.div
                        key={d}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: d }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#7D8DB8" }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Effect: Lead Score Glow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                viewport={{ once: true }}
                className="mx-4 my-3 rounded-xl px-4 py-3 flex items-center justify-between"
                style={{
                  background: "rgba(74,222,128,0.08)",
                  border: "1px solid rgba(74,222,128,0.2)",
                  boxShadow: "0 0 20px rgba(74,222,128,0.1)",
                }}
              >
                <div>
                  <p className="text-[11px] font-semibold text-[#4ADE80]">Lead quente</p>
                  <p className="text-[10px] text-[#7D8DB8]">Próxima ação: agendar</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#7D8DB8]">Probabilidade</p>
                  <p className="text-sm font-bold text-[#4ADE80]">Alta</p>
                </div>
              </motion.div>
            </MockupCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
