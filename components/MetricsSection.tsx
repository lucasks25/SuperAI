"use client"

import { useEffect, useRef, useState } from "react"

const STATS = [
  {
    value: 10000,
    suffix: "+",
    prefix: "",
    label: "conversas automatizadas por mês",
    sub: "com 1 único agente ativo",
  },
  {
    value: 45,
    suffix: "s",
    prefix: "",
    label: "tempo médio de primeira resposta",
    sub: "antes eram até 8 horas",
  },
  {
    value: 95,
    suffix: "%",
    prefix: "",
    label: "resoluções sem intervenção humana",
    sub: "equipe foca só no que importa",
  },
  {
    value: 0,
    suffix: "",
    prefix: "R$",
    label: "custo extra por atendimento noturno",
    sub: "24/7 sempre incluso no plano",
  },
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
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); ob.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section aria-label="Números" style={{ background: "#0a0a0a" }}>
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1440px]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-8 py-12 md:px-12 md:py-14 flex flex-col gap-3
                ${i < 2 ? "border-b lg:border-b-0 border-white/[0.07]" : ""}
                ${i !== STATS.length - 1 ? "lg:border-r border-white/[0.07]" : ""}
              `}
            >
              <p className="text-[48px] md:text-[64px] font-semibold leading-none tracking-tight text-white">
                <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} active={active} />
              </p>
              <p className="text-[13px] font-medium leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>
                {s.label}
              </p>
              <p className="text-[11px] leading-snug" style={{ color: "rgba(255,255,255,0.25)" }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
