"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

const PIPELINE = [
  { n: "01", label: "Detecta",   desc: "Canal, intenção e perfil do contato" },
  { n: "02", label: "Qualifica", desc: "Perguntas certas, no momento certo"   },
  { n: "03", label: "Converte",  desc: "Agenda ou encaminha ao time de vendas" },
  { n: "04", label: "Registra",  desc: "Salva tudo no CRM automaticamente"    },
]

const CHAT = [
  { from: "client", text: "Oi, queria saber sobre os planos" },
  { from: "ai",     text: "Olá! Para te indicar o plano ideal, me conta: quantas mensagens vocês recebem por dia?" },
  { from: "client", text: "Umas 80 a 100 por dia" },
  { from: "ai",     text: "Perfeito. Vocês já têm CRM ou preferem que a gente integre tudo do zero?" },
]

export default function SDRSection() {
  return (
    <section
      id="sdr"
      className="py-20 md:py-28"
      style={{ background: "#080808" }}
      aria-label="SDR com IA"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7C6FF5] mb-5">SDR com IA</p>
            <h2 className="text-[36px] md:text-[48px] font-bold text-white leading-[1.07] tracking-tight mb-5">
              Transforme conversas<br />em oportunidades reais
            </h2>
            <p className="text-[15px] text-white/40 leading-relaxed mb-10 max-w-md">
              O agente identifica cada contato, conduz a qualificação com critério e só aciona sua equipe quando o lead está pronto para fechar.
            </p>

            {/* Pipeline steps */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {PIPELINE.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex flex-col gap-2 rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-[10px] font-bold text-[#7C6FF5] tracking-[0.2em]">{s.n}</p>
                  <p className="text-[15px] font-semibold text-white">{s.label}</p>
                  <p className="text-[12px] text-white/35 leading-snug">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
              style={{ background: "#7C6FF5" }}
            >
              Falar com especialista <ArrowRight size={15} />
            </a>
          </div>

          {/* Right — WhatsApp mockup */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="w-full max-w-[300px] rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 8px 24px rgba(124,111,245,0.12)",
              }}
            >
              {/* WA header */}
              <div className="px-4 py-3 flex items-center gap-3 bg-[#075E54]">
                <div className="w-8 h-8 rounded-full bg-[#7C6FF5] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white">Assistente MoltoChat</p>
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
                    transition={{ delay: 0.4 + i * 0.3 }}
                    className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className="max-w-[85%] px-3 py-2 text-[12px] leading-relaxed shadow-sm"
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

              {/* Score */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.1 }}
                className="px-4 py-3 bg-white flex items-center justify-between"
                style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div>
                  <p className="text-[11px] font-bold text-[#16A34A]">Lead qualificado</p>
                  <p className="text-[10px] text-black/35 mt-0.5">Próxima ação: demonstração</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4].map((v) => (
                    <span key={v} className="w-1.5 h-5 rounded-sm bg-[#16A34A]" />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
