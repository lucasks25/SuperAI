"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Reveal from "./Reveal"
import { WHATSAPP_URL } from "@/lib/constants"

const SEGMENTS = [
  {
    id: "clinicas",
    emoji: "🏥",
    label: "Clínicas e Consultórios",
    tagline: "Sua agenda cheia, sua equipe livre",
    outcome: "Pacientes agendam, confirmam e recebem lembretes pelo WhatsApp — sem uma ligação sequer.",
    metric: "↓ 60% de faltas",
    tags: ["Agendamento 24/7", "Lembretes automáticos", "Triagem por sintoma", "CRM integrado"],
    color: "#7C6FF5",
    bg: "linear-gradient(135deg, #2d2654 0%, #1a1536 100%)",
    accent: "rgba(124,111,245,0.15)",
  },
  {
    id: "imobiliarias",
    emoji: "🏠",
    label: "Imobiliárias",
    tagline: "Só lead quente para o corretor",
    outcome: "A IA qualifica intenção, orçamento e urgência — e encaminha para o corretor apenas quem está pronto para fechar.",
    metric: "3× mais fechamentos",
    tags: ["Qualificação automática", "Portfólio personalizado", "Follow-up contínuo", "Agenda de visitas"],
    color: "#E46F2F",
    bg: "linear-gradient(135deg, #3d2210 0%, #251609 100%)",
    accent: "rgba(228,111,47,0.15)",
  },
  {
    id: "agencias",
    emoji: "📊",
    label: "Agências Digitais",
    tagline: "Suporte de cliente no automático",
    outcome: "Relatórios entregues na hora, aprovação de peças e abertura de chamados — tudo pelo WhatsApp, sem e-mails.",
    metric: "↓ 70% chamados manuais",
    tags: ["Relatórios on-demand", "Aprovação de peças", "Alertas de campanha", "NPS automático"],
    color: "#2F9E75",
    bg: "linear-gradient(135deg, #0e3526 0%, #081e15 100%)",
    accent: "rgba(47,158,117,0.15)",
  },
  {
    id: "restaurantes",
    emoji: "🍽️",
    label: "Restaurantes",
    tagline: "Mesa cheia, operação tranquila",
    outcome: "Reservas, preferências e pedidos antecipados — confirmados em segundos. Sua equipe cuida do que importa: o salão.",
    metric: "+40% retorno de clientes",
    tags: ["Reservas automáticas", "Pedidos antecipados", "Programa de fidelidade", "Avaliação pós-visita"],
    color: "#EAB308",
    bg: "linear-gradient(135deg, #3a2f00 0%, #1e1800 100%)",
    accent: "rgba(234,179,8,0.15)",
  },
]

function SegmentCard({ seg, i }: { seg: typeof SEGMENTS[0]; i: number }) {
  return (
    <Reveal delay={i * 0.07}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative overflow-hidden rounded-2xl flex flex-col h-full"
        style={{ background: seg.bg, border: `1px solid ${seg.color}20` }}
      >
        {/* Top accent glow */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 100% at 50% 0%, ${seg.color}18, transparent)` }}
        />

        <div className="relative flex flex-col flex-1 p-7 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[28px] leading-none mb-3">{seg.emoji}</p>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: seg.color }}
              >
                {seg.label}
              </p>
            </div>
            {/* Metric badge */}
            <div
              className="shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold"
              style={{ background: `${seg.color}18`, color: seg.color, border: `1px solid ${seg.color}25` }}
            >
              {seg.metric}
            </div>
          </div>

          {/* Tagline */}
          <h3 className="text-[22px] md:text-[26px] font-semibold leading-tight tracking-tight text-white mb-3">
            {seg.tagline}
          </h3>

          {/* Outcome */}
          <p className="text-[13px] text-white/50 leading-relaxed mb-6 flex-1">
            {seg.outcome}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {seg.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                style={{ background: `${seg.color}12`, color: `${seg.color}CC`, border: `1px solid ${seg.color}18` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-opacity hover:opacity-70 self-start"
            style={{ color: seg.color }}
          >
            Ver solução <ArrowRight size={12} />
          </a>
        </div>
      </motion.div>
    </Reveal>
  )
}

export default function UseCasesSection() {
  return (
    <section className="bg-[#F2F2F2] py-20 md:py-32" aria-label="Por segmento">
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">

        {/* Header */}
        <div className="mb-12 px-1">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7C6FF5] mb-4">Por segmento</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-[32px] md:text-[48px] font-semibold text-[#171717] leading-[1.08] tracking-tight max-w-xl">
              Feito para o seu tipo de negócio
            </h2>
          </Reveal>
          <Reveal delay={0.09}>
            <p className="text-[15px] text-[#1A1A1A]/45 mt-4 max-w-lg leading-relaxed">
              A SuperAI se adapta ao vocabulário, ao fluxo e às regras de cada segmento — sem configuração complexa.
            </p>
          </Reveal>
        </div>

        {/* 2x2 card grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {SEGMENTS.map((seg, i) => (
            <SegmentCard key={seg.id} seg={seg} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
