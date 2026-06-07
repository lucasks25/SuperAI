"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const CASES = [
  {
    value: "80%",
    company: "Only Tourism",
    desc: "automates 80% of visa inquiries with AI Agents",
  },
  {
    value: "81.4%",
    company: "Diskat",
    desc: "automates sales for an 81.4% conversion rate with AI Agents",
  },
  {
    value: "24%",
    company: "GETUTOR",
    desc: "increased bookings by 24% in 2 months with AI Agents",
  },
  {
    value: "200%",
    company: "iMotorbike",
    desc: "captures 200% more leads with AI Agents",
  },
]

function LiveCounter() {
  const [count, setCount] = useState(8_000)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  // Count-up on enter
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) { setStarted(true); ob.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [started])

  // Quick count-up 8_000 → 10_000 on start
  useEffect(() => {
    if (!started) return
    const target = 10_000
    const duration = 2800
    const steps = 60
    const increment = (target - 8_000) / steps
    let step = 0
    const id = setInterval(() => {
      step++
      setCount(Math.min(Math.round(8_000 + increment * step), target))
      if (step >= steps) clearInterval(id)
    }, duration / steps)
    return () => clearInterval(id)
  }, [started])

  // Slow live increment after count-up
  useEffect(() => {
    if (!started) return
    const delay = setTimeout(() => {
      const id = setInterval(() => setCount(c => c + 1), 2800)
      return () => clearInterval(id)
    }, 3200)
    return () => clearTimeout(delay)
  }, [started])

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
    </span>
  )
}

export default function MetricsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#000000" }}
      aria-label="Números"
    >
      {/* Blue glow behind counter */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          top: "-250px",
          width: "1200px",
          height: "800px",
          background: "radial-gradient(ellipse at center, rgba(56,189,248,0.2) 0%, rgba(37,99,235,0.08) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-6 pt-20 pb-0">

        {/* Label */}
        <p className="text-center text-[12px] font-medium tracking-[0.18em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.30)" }}>
          Number of conversations successfully handled by AI Agents
        </p>

        {/* Big live counter */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-semibold leading-none tracking-tight mb-12"
          style={{
            fontSize: "clamp(64px, 10vw, 120px)",
            color: "#ffffff",
            letterSpacing: "-0.03em",
          }}
        >
          <LiveCounter />
        </motion.p>

        {/* Metrics card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl grid grid-cols-2 lg:grid-cols-4 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          {CASES.map((c, i) => (
            <div
              key={c.company}
              className={`px-6 py-7 flex flex-col gap-2
                ${i < 2 ? "border-b lg:border-b-0 border-white/[0.08]" : ""}
                ${i !== CASES.length - 1 ? "lg:border-r border-white/[0.08]" : ""}
              `}
            >
              <p className="text-[36px] md:text-[44px] font-bold leading-none text-white tracking-tight">
                {c.value}
              </p>
              <p className="text-[11px] font-semibold underline underline-offset-2 decoration-white/20" style={{ color: "rgba(255,255,255,0.55)" }}>
                {c.company}
              </p>
              <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.28)" }}>
                {c.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient fade to black */}
      <div
        className="relative h-28 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #000000 100%)",
        }}
      />
    </section>
  )
}
