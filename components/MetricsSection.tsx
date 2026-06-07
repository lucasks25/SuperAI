"use client"

import { useEffect, useRef, useState } from "react"
import Reveal from "./Reveal"

const METRICS = [
  {
    value: 10000,
    suffix: "+",
    label: "conversas automatizadas",
    context: "por mês com 1 único agente",
    color: "#7C6FF5",
    icon: "💬",
  },
  {
    value: 45,
    suffix: "s",
    label: "tempo médio de resposta",
    context: "antes eram até 8 horas",
    color: "#2F9E75",
    icon: "⚡",
  },
  {
    value: 95,
    suffix: "%",
    label: "resoluções sem humano",
    context: "sua equipe só entra quando vale",
    color: "#E46F2F",
    icon: "🤖",
  },
  {
    value: 0,
    suffix: "",
    label: "reais extras por atendimento",
    context: "fora do horário comercial",
    color: "#EAB308",
    displayAs: "R$ 0",
    icon: "💰",
  },
]

function CountUp({
  target,
  suffix,
  displayAs,
  active,
}: {
  target: number
  suffix: string
  displayAs?: string
  active: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    if (displayAs) return
    const duration = 1600
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, target, displayAs])

  if (displayAs) return <span>{displayAs}</span>

  return (
    <span>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#F2F2F2] py-8 md:py-12" aria-label="Resultados">
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          ref={ref}
          className="border border-white/[0.06] bg-[#111118] rounded-2xl overflow-hidden"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          {/* Top label */}
          <div className="px-7 pt-7 pb-0 md:px-10">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7C6FF5]/70">
                Resultados reais · clientes SuperAI
              </p>
            </Reveal>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-5">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={0.07 * i}>
                <div
                  className={`flex flex-col gap-3 px-7 py-8 md:px-10 ${
                    i !== METRICS.length - 1
                      ? "border-b md:border-b-0 md:border-r border-white/[0.05]"
                      : ""
                  } ${i < 2 ? "border-b md:border-b-0 border-white/[0.05]" : ""}`}
                >
                  {/* Icon */}
                  <span className="text-[20px] leading-none">{m.icon}</span>

                  {/* Number */}
                  <p
                    className="text-[40px] md:text-[52px] font-medium tracking-tight leading-none"
                    style={{ color: m.color }}
                  >
                    <CountUp
                      target={m.value}
                      suffix={m.suffix}
                      displayAs={m.displayAs}
                      active={active}
                    />
                  </p>

                  {/* Label */}
                  <div>
                    <p className="text-[13px] font-medium text-white/70 leading-snug">{m.label}</p>
                    <p className="text-[11px] text-white/30 mt-1 leading-snug">{m.context}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.05] px-7 py-4 md:px-10 flex items-center justify-between gap-4">
            <p className="text-[11px] text-white/25">
              Médias calculadas sobre base ativa de clientes · atualizado mensalmente
            </p>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-[10px] text-white/30 font-medium uppercase tracking-wider">Ao vivo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
