"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

const SEGMENTS = [
  {
    id: "clinicas",
    label: "Clínicas e Consultórios",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    tagline: "Sua agenda sempre cheia, sua equipe sempre livre",
    desc: "Pacientes agendam, confirmam e recebem lembretes pelo WhatsApp — sem uma ligação sequer para a recepção.",
    metric: "↓ 60% de faltas",
    tags: ["Agendamento 24/7", "Lembretes automáticos", "Triagem por sintoma"],
    color: "#7C6FF5",
  },
  {
    id: "imobiliarias",
    label: "Imobiliárias",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    tagline: "Só lead quente chega ao corretor",
    desc: "A IA qualifica intenção, orçamento e urgência antes de acionar seu time — zero tempo perdido com leads frios.",
    metric: "3× mais fechamentos",
    tags: ["Qualificação automática", "Follow-up contínuo", "Agenda de visitas"],
    color: "#E46F2F",
  },
  {
    id: "agencias",
    label: "Agências Digitais",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    tagline: "Relatórios e suporte no automático",
    desc: "Clientes consultam resultados, aprovam peças e abrem chamados pelo WhatsApp — sem e-mails e sem espera.",
    metric: "↓ 70% chamados manuais",
    tags: ["Relatórios on-demand", "Aprovação de peças", "Alertas de campanha"],
    color: "#2F9E75",
  },
  {
    id: "restaurantes",
    label: "Restaurantes",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    tagline: "Mesa cheia, operação tranquila",
    desc: "Reservas confirmadas, pedidos antecipados e programa de fidelidade — tudo via WhatsApp, sem tirar a equipe do salão.",
    metric: "+40% retorno de clientes",
    tags: ["Reservas automáticas", "Pedidos antecipados", "Programa de fidelidade"],
    color: "#FACC15",
  },
]

export default function UseCasesSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#080808" }} aria-label="Por segmento">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7C6FF5] mb-4"
          >
            Por segmento
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[32px] md:text-[48px] font-bold text-white leading-tight tracking-tight mb-4"
          >
            Feito para o seu tipo de negócio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[16px] text-white/40 max-w-lg mx-auto leading-relaxed"
          >
            A SuperAI aprende o vocabulário, o fluxo e as regras do seu segmento — sem configuração complexa.
          </motion.p>
        </div>

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-3">
          {SEGMENTS.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl p-7 md:p-8 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderTop: `2px solid ${s.color}`,
              }}
            >
              {/* Subtle glow top */}
              <div
                className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 70% 100% at 50% 0%, ${s.color}12, transparent)` }}
              />

              {/* Icon + label */}
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${s.color}15`, color: s.color }}
                >
                  {s.icon}
                </div>
                <span
                  className="text-[11px] font-bold px-3 py-1 rounded-full"
                  style={{ background: `${s.color}12`, color: s.color, border: `1px solid ${s.color}20` }}
                >
                  {s.metric}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: `${s.color}90` }}>
                  {s.label}
                </p>
                <h3 className="text-[22px] md:text-[26px] font-bold text-white leading-tight tracking-tight">
                  {s.tagline}
                </h3>
                <p className="text-[14px] text-white/40 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                    style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.08)" }}
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
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-opacity hover:opacity-60 self-start"
                style={{ color: s.color }}
              >
                Ver solução <ArrowRight size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
