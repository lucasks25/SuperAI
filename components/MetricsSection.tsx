"use client"

import { useEffect, useRef, useState } from "react"
import Reveal from "./Reveal"

const METRICS = [
  { value: 10000, suffix: "+", label: "Conversas automatizadas por mês",  color: "#7C6FF5" },
  { value: 80,    suffix: "%", label: "Redução no tempo de resposta",      color: "#2F9E75" },
  { value: 3,     suffix: "min", label: "Tempo médio de atendimento",       color: "#E46F2F" },
  { value: 95,    suffix: "%", label: "Taxa de resolução automática",      color: "#EAB308" },
]

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1400
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span>
      {count.toLocaleString("pt-BR")}
      <span className="ml-0.5">{suffix}</span>
    </span>
  )
}

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#F2F2F2] py-12 md:py-16" aria-label="Métricas">
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          ref={ref}
          className="border border-[#1A1A1A]/[0.12] bg-[#171717] rounded-2xl overflow-hidden"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={0.08 * i}>
                <div
                  className={`flex flex-col justify-between px-7 py-10 md:px-8 ${
                    i !== METRICS.length - 1 ? "border-b md:border-b-0 md:border-r border-white/[0.06]" : ""
                  } ${i < 2 ? "border-b md:border-b-0" : ""}`}
                >
                  <p
                    className="text-[44px] md:text-[56px] font-medium tracking-tight leading-none mb-3"
                    style={{ color: m.color }}
                  >
                    <CountUp target={m.value} suffix={m.suffix} active={active} />
                  </p>
                  <p className="text-[13px] text-white/40 leading-snug max-w-[140px]">
                    {m.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
