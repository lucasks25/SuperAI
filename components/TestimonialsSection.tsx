"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Clone de: "Real success stories from customers"
// Cards com foto no topo + logo sobreposto + nome + resultado
// Scroll lateral com setas

const STORIES = [
  {
    company: "Clínica Odonto+",
    type: "Clínica Odontológica",
    result: "A Clínica Odonto+ acelerou agendamentos em 3× e reduziu faltas em 60% com a SuperAI",
    color: "#7C6FF5",
    gradientFrom: "#2d2654",
    gradientTo: "#1a1536",
    initials: "CO",
    photoLabel: "Dra. Ana Ferreira",
  },
  {
    company: "Viva Imóveis",
    type: "Imobiliária",
    result: "A Viva Imóveis triplicou a taxa de conversão de leads qualificados em 45 dias",
    color: "#E46F2F",
    gradientFrom: "#3d2210",
    gradientTo: "#251609",
    initials: "VI",
    photoLabel: "Carlos Mendes",
  },
  {
    company: "Agência Pulse",
    type: "Agência Digital",
    result: "A Agência Pulse eliminou 70% dos chamados manuais e entrega relatórios instantâneos",
    color: "#2F9E75",
    gradientFrom: "#0e3526",
    gradientTo: "#081e15",
    initials: "AP",
    photoLabel: "Beatriz Lima",
  },
  {
    company: "Restaurante Cais",
    type: "Restaurante",
    result: "O Restaurante Cais aumentou em 40% o retorno de clientes com fidelização automática",
    color: "#FACC15",
    gradientFrom: "#3a2f00",
    gradientTo: "#1e1800",
    initials: "RC",
    photoLabel: "Chef Roberto",
  },
  {
    company: "OficinaPro",
    type: "Oficina Mecânica",
    result: "A OficinaPro passou a atender 3× mais clientes sem contratar nenhum funcionário a mais",
    color: "#60A5FA",
    gradientFrom: "#0d1f3c",
    gradientTo: "#070f1e",
    initials: "OP",
    photoLabel: "Marcos Silva",
  },
]

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = 280
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" })
  }

  return (
    <section className="py-24 md:py-28 overflow-hidden" style={{ background: "#000000" }} aria-label="Casos de sucesso">
      <div className="mx-auto w-full max-w-[1440px]">

        {/* Header + setas — mesmo layout da print */}
        <div className="flex items-center justify-between px-6 md:px-12 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[38px] font-bold text-white leading-tight tracking-tight"
          >
            Histórias de sucesso dos nossos clientes
          </motion.h2>

          {/* Setas de navegação — igual à print */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              aria-label="Anterior"
            >
              <ChevronLeft size={16} className="text-white/60" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              aria-label="Próximo"
            >
              <ChevronRight size={16} className="text-white/60" />
            </button>
          </div>
        </div>

        {/* Scroll horizontal — clone da print */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4 px-6 md:px-12"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {STORIES.map((s, i) => (
            <motion.div
              key={s.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex-none w-[240px] rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              {/* Área da foto — placeholder colorido com logo sobreposto */}
              <div
                className="relative w-full h-[160px] flex items-center justify-center"
                style={{
                  background: `linear-gradient(145deg, ${s.gradientFrom} 0%, ${s.gradientTo} 100%)`,
                }}
              >
                {/* Placeholder central — será substituído por foto */}
                <div className="flex flex-col items-center gap-2 opacity-30">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <p className="text-[9px] text-white font-medium">{s.photoLabel}</p>
                </div>

                {/* Logo badge sobreposto — canto superior esquerdo, igual à print */}
                <div
                  className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-black text-white shadow-lg"
                  style={{
                    background: s.color,
                    boxShadow: `0 4px 12px ${s.color}50`,
                  }}
                >
                  {s.initials}
                </div>

                {/* Overlay gradient no fundo da foto */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-10"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}
                />
              </div>

              {/* Conteúdo abaixo da foto */}
              <div className="flex flex-col gap-2.5 p-4 flex-1">
                <div>
                  <p className="text-[13px] font-semibold text-white leading-snug">{s.company}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.type}</p>
                </div>

                <p className="text-[12px] leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {s.result}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Card fantasma — indica que há mais */}
          <div className="flex-none w-[60px]" />
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}
