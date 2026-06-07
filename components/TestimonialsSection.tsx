"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

// Clone de: "Real success stories from customers"
// Heading centralizado · cards horizontais com logo + screenshot mockup + resultado

const STORIES = [
  {
    segment: "Clínica Odonto+",
    type: "Clínica Odontológica",
    color: "#7C6FF5",
    result: "A Clínica Odonto+ reduziu faltas em 60% e aumentou agendamentos em 3× com a SuperAI",
    metric: "↑ 3× agendamentos",
    initials: "CO",
    mockup: (
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="px-3 py-2 flex items-center gap-2 bg-[#075E54]">
          <div className="w-5 h-5 rounded-full bg-[#7C6FF5] flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <p className="text-[8px] font-semibold text-white">SuperAI · Clínica Odonto+</p>
        </div>
        <div className="px-2.5 py-2.5 flex flex-col gap-1.5" style={{ background: "#ECE5DD" }}>
          <div className="flex justify-start"><div className="px-2 py-1 text-[8px] text-[#111]" style={{ background: "#fff", borderRadius: "6px 6px 6px 2px" }}>Quero marcar uma consulta</div></div>
          <div className="flex justify-end"><div className="px-2 py-1 text-[8px] text-[#111]" style={{ background: "#DCF8C6", borderRadius: "6px 6px 2px 6px" }}>Temos horários amanhã às 10h ou 15h. Qual prefere?</div></div>
          <div className="flex justify-start"><div className="px-2 py-1 text-[8px] text-[#111]" style={{ background: "#fff", borderRadius: "6px 6px 6px 2px" }}>10h por favor!</div></div>
          <div className="flex justify-end"><div className="px-2 py-1 text-[8px] text-[#111]" style={{ background: "#DCF8C6", borderRadius: "6px 6px 2px 6px" }}>Perfeito! Consulta confirmada para amanhã às 10h ✅</div></div>
        </div>
      </div>
    ),
  },
  {
    segment: "Viva Imóveis",
    type: "Imobiliária",
    color: "#E46F2F",
    result: "A Viva Imóveis triplicou a taxa de conversão de leads qualificados em 45 dias de uso",
    metric: "3× leads qualificados",
    initials: "VI",
    mockup: (
      <div className="rounded-xl p-3 flex flex-col gap-2" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}>
        {[
          { name: "Carlos M.", tag: "Alta intenção", color: "#E46F2F", score: 92 },
          { name: "Ana P.",    tag: "Média intenção", color: "#FACC15", score: 65 },
          { name: "Bruno S.", tag: "Qualificando",   color: "#7C6FF5", score: 40 },
        ].map((lead) => (
          <div key={lead.name} className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold text-white shrink-0" style={{ background: lead.color }}>{lead.name[0]}</div>
            <p className="text-[9px] text-white/60 flex-1">{lead.name}</p>
            <span className="text-[7px] font-semibold px-1.5 py-0.5 rounded" style={{ background: `${lead.color}18`, color: lead.color }}>{lead.tag}</span>
            <span className="text-[8px] font-bold" style={{ color: lead.color }}>{lead.score}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    segment: "Agência Pulse",
    type: "Agência Digital",
    color: "#2F9E75",
    result: "A Agência Pulse eliminou 70% dos chamados manuais de clientes com relatórios automáticos",
    metric: "↓ 70% chamados manuais",
    initials: "AP",
    mockup: (
      <div className="rounded-xl p-3" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}>
        <p className="text-[8px] font-semibold text-white/30 mb-2 uppercase tracking-wider">Relatório · Outubro</p>
        {[
          { label: "Impressões",   value: "2.3M", up: true },
          { label: "CTR",          value: "4.2%", up: true },
          { label: "Leads",        value: "312",  up: true },
          { label: "Custo/Lead",   value: "R$ 8", up: false },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <p className="text-[9px] text-white/40">{row.label}</p>
            <div className="flex items-center gap-1.5">
              <p className="text-[9px] font-semibold text-white">{row.value}</p>
              <span className="text-[7px] font-bold" style={{ color: row.up ? "#4ADE80" : "#F87171" }}>{row.up ? "▲" : "▼"}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    segment: "Restaurante Cais",
    type: "Restaurante",
    color: "#FACC15",
    result: "O Restaurante Cais aumentou em 40% o retorno de clientes com o programa de fidelidade automatizado",
    metric: "+40% retorno de clientes",
    initials: "RC",
    mockup: (
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="px-3 py-2 flex items-center gap-2 bg-[#075E54]">
          <div className="w-5 h-5 rounded-full bg-[#FACC15] flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="#111"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <p className="text-[8px] font-semibold text-white">SuperAI · Restaurante Cais</p>
        </div>
        <div className="px-2.5 py-2.5 flex flex-col gap-1.5" style={{ background: "#ECE5DD" }}>
          <div className="flex justify-start"><div className="px-2 py-1 text-[8px] text-[#111]" style={{ background: "#fff", borderRadius: "6px 6px 6px 2px" }}>Mesa pra 4 amanhã às 20h?</div></div>
          <div className="flex justify-end"><div className="px-2 py-1 text-[8px] text-[#111]" style={{ background: "#DCF8C6", borderRadius: "6px 6px 2px 6px" }}>Temos mesa na varanda! Reserva confirmada ✅</div></div>
          <div className="flex justify-end"><div className="px-2 py-1 text-[8px] text-[#111]" style={{ background: "#DCF8C6", borderRadius: "6px 6px 2px 6px" }}>Enviamos o cardápio e cupom 10% 🎁</div></div>
        </div>
      </div>
    ),
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-28 overflow-hidden" style={{ background: "#000000" }} aria-label="Casos de sucesso">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-8">

        {/* Header — clone exato da print */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[44px] font-bold text-white leading-tight tracking-tight"
          >
            Histórias de sucesso dos nossos clientes
          </motion.h2>
        </div>

        {/* Cards horizontais — clone da print */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {STORIES.map((s, i) => (
            <motion.div
              key={s.segment}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col gap-4 rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Logo / company header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-black text-white shrink-0"
                  style={{ background: s.color }}
                >
                  {s.initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white">{s.segment}</p>
                  <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{s.type}</p>
                </div>
              </div>

              {/* Mini UI mockup */}
              {s.mockup}

              {/* Result */}
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {s.result}
              </p>

              {/* Metric */}
              <p className="text-[12px] font-bold" style={{ color: s.color }}>{s.metric}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
            style={{ background: "#7C6FF5" }}
          >
            Quero ser o próximo caso de sucesso <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
