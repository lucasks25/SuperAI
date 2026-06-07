"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const STORIES = [
  {
    company: "Clínica Odonto+",
    type: "Clínica Odontológica",
    result: "Clínica Odonto+ acelera agendamentos em 3× e reduz faltas em 60% com Agentes IA da SuperAI",
    color: "#7C6FF5",
    bg: "linear-gradient(135deg, #1e1a3e 0%, #0d0b1f 100%)",
    initials: "CO",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 12h6M9 16h6M9 8h6M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
      </svg>
    ),
  },
  {
    company: "Viva Imóveis",
    type: "Imobiliária",
    result: "Viva Imóveis triplica conversão de leads qualificados em 45 dias com Agentes IA",
    color: "#F97316",
    bg: "linear-gradient(135deg, #2a1505 0%, #110800 100%)",
    initials: "VI",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  {
    company: "Agência Pulse",
    type: "Agência Digital",
    result: "Agência Pulse elimina 70% dos chamados manuais e entrega relatórios instantâneos",
    color: "#10B981",
    bg: "linear-gradient(135deg, #041f13 0%, #020d08 100%)",
    initials: "AP",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    company: "Restaurante Cais",
    type: "Restaurante",
    result: "Restaurante Cais aumenta em 40% o retorno de clientes com fidelização automática",
    color: "#FBBF24",
    bg: "linear-gradient(135deg, #221900 0%, #0f0b00 100%)",
    initials: "RC",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    company: "OficinaPro",
    type: "Oficina Mecânica",
    result: "OficinaPro atende 3× mais clientes sem contratar nenhum funcionário adicional",
    color: "#60A5FA",
    bg: "linear-gradient(135deg, #051530 0%, #020915 100%)",
    initials: "OP",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
]

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" })
  }

  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "#000000" }}
      aria-label="Casos de sucesso"
    >
      <div className="mx-auto w-full max-w-[1440px]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-16 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[22px] md:text-[28px] font-semibold text-white tracking-tight"
          >
            Histórias de sucesso dos nossos clientes
          </motion.h2>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              aria-label="Anterior"
            >
              <ChevronLeft size={15} className="text-white/50" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              aria-label="Próximo"
            >
              <ChevronRight size={15} className="text-white/50" />
            </button>
          </div>
        </div>

        {/* Scroll cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 px-6 md:px-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {STORIES.map((s, i) => (
            <motion.article
              key={s.company}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex-none w-[220px] md:w-[240px] rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Thumbnail */}
              <div
                className="relative w-full h-[170px] flex items-center justify-center"
                style={{ background: s.bg }}
              >
                {/* Icon watermark */}
                <div className="opacity-20 flex flex-col items-center gap-2">
                  {s.icon}
                  <p className="text-[9px] text-white font-medium tracking-widest uppercase">{s.type}</p>
                </div>

                {/* Logo badge */}
                <div
                  className="absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-black text-white"
                  style={{
                    background: s.color,
                    boxShadow: `0 4px 14px ${s.color}55`,
                  }}
                >
                  {s.initials}
                </div>

                {/* Bottom fade */}
                <div
                  className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)" }}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 p-4 flex-1">
                <div>
                  <p className="text-[12px] font-semibold text-white">{s.company}</p>
                  <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.30)" }}>{s.type}</p>
                </div>
                <p className="text-[11px] leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {s.result}
                </p>
              </div>
            </motion.article>
          ))}

          {/* Ghost spacer */}
          <div className="flex-none w-8" />
        </div>
      </div>

      <style>{`div::-webkit-scrollbar{display:none}`}</style>
    </section>
  )
}
