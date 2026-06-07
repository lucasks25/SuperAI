"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Reveal from "./Reveal"
import { WHATSAPP_URL } from "@/lib/constants"

const SEGMENTS = [
  {
    id: "clinicas",
    label: "Clínicas",
    emoji: "🏥",
    color: "#7C6FF5",
    tagline: "Mais consultas. Menos ligações.",
    description: "Pacientes agendam, confirmam e recebem lembretes automaticamente pelo WhatsApp — sem ocupar sua equipe.",
    metric: { value: "↓ 60%", label: "faltas e cancelamentos" },
    flows: [
      { step: "1", title: "Paciente envia mensagem", detail: "Qualquer canal: WhatsApp, site ou indicação" },
      { step: "2", title: "IA qualifica e agenda", detail: "Verifica disponibilidade e confirma em segundos" },
      { step: "3", title: "Lembrete automático", detail: "D-1 e D-0 com link de confirmação ou remarcação" },
    ],
    tags: ["Agendamento 24/7", "Confirmação automática", "Triagem de sintomas", "CRM integrado"],
  },
  {
    id: "imobiliarias",
    label: "Imobiliárias",
    emoji: "🏠",
    color: "#E46F2F",
    tagline: "Todo lead qualificado. Nenhum perdido.",
    description: "A IA pergunta, entende a intenção de compra e encaminha apenas leads prontos para o corretor fechar.",
    metric: { value: "3×", label: "mais leads fechados" },
    flows: [
      { step: "1", title: "Lead chega pelo anúncio", detail: "Instagram, Zap Imóveis, site ou indicação" },
      { step: "2", title: "IA qualifica a intenção", detail: "Perfil, orçamento, urgência e localização" },
      { step: "3", title: "Corretor recebe o briefing", detail: "Pronto para a visita, sem perda de tempo" },
    ],
    tags: ["Qualificação automática", "Portfólio personalizado", "Follow-up sem esquecer", "Agenda de visitas"],
  },
  {
    id: "agencias",
    label: "Agências",
    emoji: "📊",
    color: "#2F9E75",
    tagline: "Relatórios na hora. Clientes satisfeitos.",
    description: "Clientes consultam resultados, aprovam peças e abrem chamados pelo WhatsApp — sem e-mails e sem espera.",
    metric: { value: "↓ 70%", label: "tempo em suporte repetitivo" },
    flows: [
      { step: "1", title: "Cliente pergunta sobre campanha", detail: "Qualquer hora, qualquer canal" },
      { step: "2", title: "IA entrega o relatório", detail: "Dados em tempo real do Google Ads, Meta e SEO" },
      { step: "3", title: "Aprovação de peças criativas", detail: "Fluxo de aprovação sem sair do WhatsApp" },
    ],
    tags: ["Relatórios on-demand", "Aprovação de peças", "Alertas de performance", "NPS automático"],
  },
  {
    id: "restaurantes",
    label: "Restaurantes",
    emoji: "🍽️",
    color: "#EAB308",
    tagline: "Mesa cheia. Operação tranquila.",
    description: "Reservas, pedidos antecipados e programa de fidelidade — tudo pelo WhatsApp sem tirar a equipe do salão.",
    metric: { value: "+40%", label: "taxa de retorno de clientes" },
    flows: [
      { step: "1", title: "Cliente reserva pelo WhatsApp", detail: "Data, horário, preferências e restrições" },
      { step: "2", title: "Confirmação e cardápio", detail: "IA envia opções do dia e registra pedidos antecipados" },
      { step: "3", title: "Pós-visita e fidelização", detail: "Avaliação automática e cupom para retorno" },
    ],
    tags: ["Reservas automáticas", "Pedidos antecipados", "Programa de fidelidade", "Avaliação automática"],
  },
]

export default function UseCasesSection() {
  const [active, setActive] = useState(0)
  const seg = SEGMENTS[active]

  return (
    <section className="bg-[#F2F2F2] py-20 md:py-32" aria-label="Por segmento">
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">

        {/* Header */}
        <div className="mb-10 px-1">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7C6FF5] mb-3">Por segmento</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-[28px] md:text-[40px] font-medium text-[#171717] leading-tight tracking-tight max-w-xl">
              Feito para o seu tipo de negócio
            </h2>
          </Reveal>
        </div>

        <div
          className="border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl overflow-hidden"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          {/* Segment tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#1A1A1A]/[0.10]">
            {SEGMENTS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`relative flex h-14 items-center justify-center gap-2.5 text-[13px] font-medium transition-all
                  ${i !== SEGMENTS.length - 1 ? "border-r border-[#1A1A1A]/[0.08]" : ""}
                  ${i < 2 ? "border-b md:border-b-0 border-[#1A1A1A]/[0.08]" : ""}`}
                style={{
                  background: active === i ? `${s.color}0E` : "transparent",
                  color: active === i ? s.color : "rgba(34,33,31,0.45)",
                }}
              >
                {active === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: s.color }}
                  />
                )}
                <span className="text-base leading-none">{s.emoji}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="grid md:grid-cols-[1fr_1px_1.2fr]"
            >
              {/* Left: narrative */}
              <div className="flex flex-col justify-center px-7 py-10 md:px-10">
                {/* Metric badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold mb-6 self-start"
                  style={{ background: `${seg.color}15`, color: seg.color, border: `1px solid ${seg.color}25` }}
                >
                  <span className="text-[15px] font-black">{seg.metric.value}</span>
                  <span className="font-medium opacity-80">{seg.metric.label}</span>
                </div>

                <h3 className="text-[22px] md:text-[30px] font-medium text-[#171717] leading-tight tracking-tight mb-4">
                  {seg.tagline}
                </h3>
                <p className="text-[14px] text-[#1A1A1A]/55 leading-relaxed mb-8 max-w-sm">
                  {seg.description}
                </p>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {seg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] font-medium"
                      style={{
                        background: `${seg.color}10`,
                        color: seg.color,
                        border: `1px solid ${seg.color}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold transition-opacity hover:opacity-70 self-start"
                  style={{ color: seg.color }}
                >
                  Falar com especialista
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Divider */}
              <div className="hidden md:block bg-[#1A1A1A]/[0.08]" />

              {/* Right: step flow */}
              <div className="flex flex-col justify-center px-7 py-10 md:px-10 border-t md:border-t-0 border-[#1A1A1A]/[0.08]">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/30 mb-7">Como funciona</p>

                <div className="flex flex-col gap-0">
                  {seg.flows.map((flow, fi) => (
                    <div key={fi} className="flex gap-5 relative">
                      {/* Step number + vertical line */}
                      <div className="flex flex-col items-center shrink-0">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
                          style={{
                            background: `${seg.color}15`,
                            color: seg.color,
                            border: `1.5px solid ${seg.color}35`,
                          }}
                        >
                          {flow.step}
                        </div>
                        {fi < seg.flows.length - 1 && (
                          <div
                            className="w-px flex-1 my-2"
                            style={{ background: `${seg.color}25`, minHeight: 28 }}
                          />
                        )}
                      </div>
                      {/* Text */}
                      <div className="pb-7">
                        <p className="text-[15px] font-medium text-[#171717] leading-snug mb-1">{flow.title}</p>
                        <p className="text-[13px] text-[#1A1A1A]/45 leading-relaxed">{flow.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom accent card */}
                <div
                  className="mt-2 rounded-xl px-5 py-4 flex items-center gap-4"
                  style={{ background: `${seg.color}0C`, border: `1px solid ${seg.color}20` }}
                >
                  <span className="text-2xl">{seg.emoji}</span>
                  <p className="text-[13px] text-[#1A1A1A]/60 leading-snug">
                    Configurado e rodando em até{" "}
                    <strong className="text-[#171717]">48 horas</strong> para{" "}
                    <strong className="text-[#171717]">{seg.label.toLowerCase()}</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
