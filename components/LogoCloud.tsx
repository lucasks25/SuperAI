"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import Reveal from "./Reveal"

const LOGOS = [
  { name: "CLÍNICAS", image: "" },
  { name: "IMOBILIÁRIAS", image: "" },
  { name: "OFICINAS", image: "" },
  { name: "ESTÉTICA", image: "" },
  { name: "EDUCAÇÃO", image: "" },
  { name: "RESTAURANTES", image: "" },
  { name: "AGÊNCIAS", image: "" },
  { name: "SERVIÇOS", image: "" },
]

function LogoItem({ logo }: { logo: typeof LOGOS[0] }) {
  const [error, setError] = useState(false)

  if (logo.image && !error) {
    return (
      <img
        src={logo.image}
        alt={logo.name}
        onError={() => setError(true)}
        className="h-9 md:h-12 w-auto grayscale transition-all hover:grayscale-0 opacity-40 hover:opacity-100"
      />
    )
  }

  return (
    <span className="text-[26px] md:text-[34px] font-bold text-white tracking-tighter opacity-10 hover:opacity-50 transition-opacity">
      {logo.name}
    </span>
  )
}

export default function LogoCloud() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const x = useMotionValue(0)
  const [isDragging, setIsDragging] = useState(false)

  const baseSpeed = 0.4
  const speed = useRef(baseSpeed)

  // Mede o tamanho real de UM conjunto de logos
  useEffect(() => {
    if (scrollRef.current) {
      // Dividimos por 3 porque renderizamos 3 vezes para o loop
      setContentWidth(scrollRef.current.scrollWidth / 3)
    }
  }, [])

  useAnimationFrame((t, delta) => {
    if (!isDragging && contentWidth > 0) {
      let currentX = x.get()
      let nextX = currentX - speed.current

      // Loop Infinito Matemático (ambas as direções)
      if (nextX <= -contentWidth) {
        nextX += contentWidth
      } else if (nextX > 0) {
        nextX -= contentWidth
      }

      x.set(nextX)

      // Retorno suave à velocidade base
      if (speed.current > baseSpeed) speed.current *= 0.98
      if (speed.current < baseSpeed) speed.current = baseSpeed
    }
  })

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    const startX = e.clientX
    const initialX = x.get()

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - startX
      let newX = initialX + deltaX

      // Garante que o valor de X sempre fique dentro do intervalo [ -contentWidth, 0 ]
      if (contentWidth > 0) {
        if (newX <= -contentWidth) newX += contentWidth
        if (newX > 0) newX -= contentWidth
      }

      x.set(newX)
    }

    const handlePointerUp = () => {
      setIsDragging(false)
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerup", handlePointerUp)
  }

  return (
    <section className="bg-[#020204] py-20 overflow-hidden border-b border-white/5 relative">
      {/* Gradients to fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#020204] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#020204] to-transparent z-10 pointer-events-none" />

      <div className="container-xl max-w-6xl mb-6 text-center">
        <Reveal>
          <p className="text-[12px] font-bold text-white/30 uppercase tracking-[0.2em]">
            Aprovado por líderes de operação em diversos setores
          </p>
        </Reveal>
      </div>

      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none py-8"
        onPointerDown={handlePointerDown}
      >
        <motion.div
          ref={scrollRef}
          className="flex gap-24 md:gap-36 items-center w-max"
          style={{ x }}
        >
          {/* Renderizamos 3 vezes: Uma para o centro, uma para a esquerda e uma para a direita */}
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center transition-opacity"
            >
              <LogoItem logo={logo} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
