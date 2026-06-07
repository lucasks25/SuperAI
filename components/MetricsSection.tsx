"use client"

import { useEffect, useRef, useState } from "react"
import Reveal from "./Reveal"

const STATS = [
  { value: 10000, suffix: "+", prefix: "",    label: "conversas por mês",     sub: "com 1 agente ativo",       color: "#7C6FF5" },
  { value: 45,    suffix: "s",  prefix: "",    label: "tempo de resposta",     sub: "antes eram 8 horas",       color: "#4ADE80" },
  { value: 95,    suffix: "%",  prefix: "",    label: "resoluções automáticas", sub: "sem nenhum humano",       color: "#E46F2F" },
  { value: 0,     suffix: "",   prefix: "R$",  label: "custo extra à noite",   sub: "24 / 7 sempre incluso",    color: "#EAB308" },
]

function CountUp({ value, prefix, suffix, active }: { value: number; prefix: string; suffix: string; active: boolean }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active || (prefix === "R$" && value === 0)) return
    const steps = 55
    let step = 0
    const timer = setInterval(() => {
      step++
      setN(Math.floor(value * (step / steps)))
      if (step >= steps) { setN(value); clearInterval(timer) }
    }, 1400 / steps)
    return () => clearInterval(timer)
  }, [active, value, prefix])

  if (prefix === "R$" && value === 0) return <span>R$ 0</span>
  return <span>{prefix}{n.toLocaleString("pt-BR")}{suffix}</span>
}

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); ob.disconnect() } }, { threshold: 0.2 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section className="bg-[#F2F2F2] py-8 md:py-10" aria-label="Resultados">
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          ref={ref}
          className="overflow-hidden rounded-2xl border border-white/[0.05]"
          style={{ background: "linear-gradient(135deg, #0D0D18 0%, #111120 100%)", clipPath: "inset(0 round 16px)" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-white/[0.06]">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div className={`px-8 py-10 md:px-10 md:py-12 flex flex-col gap-2 ${i < 2 ? "border-b lg:border-b-0 border-white/[0.06]" : ""}`}>
                  <p
                    className="text-[48px] md:text-[64px] font-semibold leading-none tracking-tight"
                    style={{ color: s.color }}
                  >
                    <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} active={active} />
                  </p>
                  <p className="text-[14px] font-medium text-white/75 mt-1 leading-snug">{s.label}</p>
                  <p className="text-[12px] text-white/28 leading-snug">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="border-t border-white/[0.05] px-8 md:px-10 py-3.5 flex items-center justify-between">
            <p className="text-[11px] text-white/20 font-medium tracking-wide">
              Dados médios · base ativa de clientes SuperAI
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-[10px] text-white/25 uppercase tracking-widest font-semibold">ao vivo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
