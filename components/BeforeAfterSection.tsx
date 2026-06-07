"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"
import { WHATSAPP_URL } from "@/lib/constants"

const BEFORE = [
  {
    icon: "⏳",
    title: "Horas de espera",
    detail: "Clientes ficam sem resposta fora do horário comercial e desistem antes de fechar.",
  },
  {
    icon: "📋",
    title: "CRM desatualizado",
    detail: "Sua equipe preenche dados manualmente — ou simplesmente não preenche.",
  },
  {
    icon: "🔁",
    title: "Mesmas perguntas todo dia",
    detail: '"Qual o valor?", "Tem disponibilidade?", "Como funciona?" — repetidas mil vezes.',
  },
  {
    icon: "📉",
    title: "Leads esquecidos",
    detail: "Follow-ups que nunca acontecem porque a equipe não tem tempo de acompanhar.",
  },
]

const AFTER = [
  {
    icon: "⚡",
    title: "Resposta em 45 segundos",
    detail: "A IA atende 24/7 no WhatsApp, site e e-mail — sem deixar nenhum cliente esperando.",
  },
  {
    icon: "🗄️",
    title: "CRM sempre atualizado",
    detail: "Cada conversa vira dados estruturados. Seu time vê o histórico completo em tempo real.",
  },
  {
    icon: "🎯",
    title: "IA responde e qualifica",
    detail: "As perguntas repetitivas viram oportunidades. A IA converte, sua equipe fecha.",
  },
  {
    icon: "🔔",
    title: "Zero lead perdido",
    detail: "Follow-up automático no timing certo: D+1, D+3, D+7 — personalizado por perfil.",
  },
]

export default function BeforeAfterSection() {
  return (
    <section className="bg-[#F2F2F2] py-20 md:py-28" aria-label="Antes e depois">
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7C6FF5] mb-3">
              A transformação
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-[28px] md:text-[40px] font-medium text-[#171717] leading-tight tracking-tight">
              Do caos ao controle, em 48 horas
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[15px] text-[#1A1A1A]/45 mt-4 max-w-md mx-auto leading-relaxed">
              Veja como o dia a dia muda quando a IA assume as tarefas que travam seu negócio.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* ── SEM IA ── */}
          <Reveal delay={0.06}>
            <div
              className="border border-[#1A1A1A]/[0.10] bg-[#F8F7F2] rounded-2xl overflow-hidden h-full"
              style={{ clipPath: "inset(0 round 16px)" }}
            >
              {/* Header bar */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[#1A1A1A]/[0.08]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/30" />
                </div>
                <span className="text-[12px] font-semibold text-[#1A1A1A]/40 uppercase tracking-wider">
                  Sem IA — hoje
                </span>
              </div>

              {/* Cards */}
              <div className="p-5 flex flex-col gap-3">
                {BEFORE.map((item, i) => (
                  <Reveal key={item.title} delay={0.08 + i * 0.06}>
                    <div className="flex items-start gap-4 rounded-xl px-4 py-4 bg-[#EF4444]/[0.04] border border-[#EF4444]/[0.08]">
                      <span className="text-[22px] leading-none shrink-0 mt-0.5 grayscale opacity-60">{item.icon}</span>
                      <div>
                        <p className="text-[14px] font-medium text-[#171717]/70 line-through decoration-[#EF4444]/40 mb-1">
                          {item.title}
                        </p>
                        <p className="text-[12px] text-[#1A1A1A]/40 leading-snug">{item.detail}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── COM SUPERAI ── */}
          <Reveal delay={0.12}>
            <div
              className="border border-[#7C6FF5]/20 bg-[#0F0F1A] rounded-2xl overflow-hidden h-full"
              style={{ clipPath: "inset(0 round 16px)" }}
            >
              {/* Header bar */}
              <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80]/30" />
                  </div>
                  <span className="text-[12px] font-semibold text-white/35 uppercase tracking-wider">
                    Com SuperAI
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                  <span className="text-[10px] text-[#4ADE80]/60 font-medium uppercase tracking-wider">ativo</span>
                </div>
              </div>

              {/* Cards */}
              <div className="p-5 flex flex-col gap-3">
                {AFTER.map((item, i) => (
                  <Reveal key={item.title} delay={0.12 + i * 0.06}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="flex items-start gap-4 rounded-xl px-4 py-4 border"
                      style={{
                        background: "rgba(124,111,245,0.06)",
                        borderColor: "rgba(124,111,245,0.15)",
                      }}
                    >
                      <span className="text-[22px] leading-none shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-[14px] font-medium text-white/85 mb-1">{item.title}</p>
                        <p className="text-[12px] text-white/40 leading-snug">{item.detail}</p>
                      </div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>

              {/* CTA inside */}
              <div className="px-5 pb-5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[13px] font-semibold text-white transition-opacity hover:opacity-80"
                  style={{ background: "linear-gradient(135deg, #9b8ff7 0%, #7C6FF5 100%)" }}
                >
                  Quero essa transformação
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
