"use client"

import { useEffect, useRef, useState } from "react"

const STATS = [
  { value: 10000, suffix: "+", prefix: "",   label: "conversas automatizadas por mês",  sub: "com 1 único agente ativo",      color: "#7C6FF5" },
  { value: 45,    suffix: "s", prefix: "",   label: "tempo médio de primeira resposta", sub: "antes eram até 8 horas",        color: "#4ADE80" },
  { value: 95,    suffix: "%", prefix: "",   label: "resoluções sem intervenção humana", sub: "equipe foca só no que importa", color: "#60A5FA" },
  { value: 0,     suffix: "",  prefix: "R$", label: "custo extra por atendimento noturno", sub: "24 / 7 sempre incluso no plano", color: "#FACC15" },
]

function CountUp({ value, prefix, suffix, active }: { value: number; prefix: string; suffix: string; active: boolean }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    if (prefix === "R$" && value === 0) { setN(0); return }
    let step = 0
    const total = 55
    const id = setInterval(() => {
      step++
      setN(Math.floor(value * (step / total)))
      if (step >= total) { setN(value); clearInterval(id) }
    }, 1500 / total)
    return () => clearInterval(id)
  }, [active, value, prefix])

  if (prefix === "R$" && value === 0) return <span>R$&nbsp;0</span>
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
    <section className="py-0" aria-label="Números">
      <div ref={ref} className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="overflow-hidden rounded-2xl border border-white/[0.06]"
          style={{ background: "#080808" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`px-8 py-10 md:px-10 md:py-12 flex flex-col gap-2.5
                  ${i < 2 ? "border-b lg:border-b-0 border-white/[0.06]" : ""}
                  ${i !== STATS.length - 1 ? "lg:border-r border-white/[0.06]" : ""}
                `}
              >
                <p className="text-[52px] md:text-[72px] font-semibold leading-none tracking-tight" style={{ color: s.color }}>
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} active={active} />
                </p>
                <p className="text-[14px] font-medium text-white/80 leading-snug">{s.label}</p>
                <p className="text-[12px] text-white/30 leading-snug">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
