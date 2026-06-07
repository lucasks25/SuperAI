"use client"

import { motion } from "framer-motion"
import Reveal from "./Reveal"
import { WHATSAPP_URL } from "@/lib/constants"

const ROWS = [
  {
    before: "Cliente envia mensagem e fica horas sem resposta",
    after:  "Resposta em menos de 45 segundos — qualquer hora",
  },
  {
    before: "SDR humano liga para cada lead sem critério",
    after:  "IA qualifica, prioriza e encaminha só os leads certos",
  },
  {
    before: "Agendamentos perdidos por esquecimento da equipe",
    after:  "Agenda confirmada e lembrete automático no dia anterior",
  },
  {
    before: "CRM cheio de campos vazios preenchidos à mão",
    after:  "Cada conversa vira dado estruturado em tempo real",
  },
  {
    before: "Follow-up depende da memória do vendedor",
    after:  "Sequência automática: D+1, D+3 e D+7 sem falhar",
  },
]

export default function BeforeAfterSection() {
  return (
    <section className="bg-[#F2F2F2] py-20 md:py-28 overflow-hidden" aria-label="Antes e depois">
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">

        {/* Header */}
        <div className="mb-12 px-1">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7C6FF5] mb-4">
              A diferença
            </p>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="text-[32px] md:text-[48px] font-semibold text-[#171717] leading-[1.08] tracking-tight max-w-2xl">
              O antes e o depois não têm comparação
            </h2>
          </Reveal>
        </div>

        {/* Comparison table */}
        <div
          className="overflow-hidden rounded-2xl border border-[#1A1A1A]/[0.10]"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_1px_1fr]">
            <div className="px-6 py-4 md:px-8 bg-[#F8F7F2] flex items-center gap-2.5 border-b border-[#1A1A1A]/[0.08]">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]/60" />
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#1A1A1A]/35">Sem IA — hoje</span>
            </div>
            <div className="bg-[#1A1A1A]/[0.08] border-b border-[#1A1A1A]/[0.08]" />
            <div className="px-6 py-4 md:px-8 bg-[#0F0F1A] flex items-center justify-between border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/40">Com SuperAI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                <span className="text-[10px] text-[#4ADE80]/50 font-semibold uppercase tracking-wider">ativo</span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className={`grid grid-cols-[1fr_1px_1fr] ${i < ROWS.length - 1 ? "border-b border-[#1A1A1A]/[0.06]" : ""}`}>
                {/* Before */}
                <div className="px-6 py-5 md:px-8 md:py-6 bg-[#F8F7F2] flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#EF4444]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 1l6 6M7 1L1 7" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-[14px] text-[#1A1A1A]/45 leading-relaxed">{row.before}</p>
                </div>
                {/* Divider */}
                <div className="bg-[#1A1A1A]/[0.08]" />
                {/* After */}
                <motion.div
                  className="px-6 py-5 md:px-8 md:py-6 bg-[#0F0F1A] flex items-start gap-4"
                  whileHover={{ backgroundColor: "rgba(124,111,245,0.05)" }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#4ADE80]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4.5L3 6.5L7 2" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[14px] text-white/70 leading-relaxed">{row.after}</p>
                </motion.div>
              </div>
            </Reveal>
          ))}

          {/* Footer CTA */}
          <div className="grid grid-cols-[1fr_1px_1fr]">
            <div className="bg-[#F8F7F2] px-6 py-5 md:px-8 flex items-center">
              <p className="text-[12px] text-[#1A1A1A]/30 italic">Cenário atual da maioria das PMEs no Brasil</p>
            </div>
            <div className="bg-[#1A1A1A]/[0.08]" />
            <div className="bg-[#0F0F1A] px-6 py-5 md:px-8 flex items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#7C6FF5] hover:opacity-70 transition-opacity"
              >
                Ativar SuperAI agora
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
