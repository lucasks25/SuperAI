"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Reveal from "./Reveal"

interface SuperhumanFeatureProps {
  id?: string
  badge: string
  title: string
  description: string
  bullets: string[]
  linkText?: string
  linkHref?: string
  imageSide?: "left" | "right"
  bgColor?: string
  imageBgColor?: string
  graphic?: React.ReactNode
}

export default function SuperhumanFeature({
  id,
  badge,
  title,
  description,
  bullets,
  linkText = "Saiba mais",
  linkHref = "#",
  imageSide = "right",
  bgColor = "bg-white",
  imageBgColor = "bg-[#F9FAFB]",
  graphic,
}: SuperhumanFeatureProps) {
  const isImageRight = imageSide === "right"

  return (
    <section id={id} className={`py-24 ${bgColor} overflow-hidden`}>
      <div className="container-xl">
        <div className={`flex flex-col ${isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16 md:gap-24`}>
          
          {/* Text Content */}
          <div className="flex-1 max-w-xl">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/40 mb-6 block">
                {badge}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-[36px] md:text-[48px] font-bold text-[#1A1A1A] leading-[1.05] tracking-tighter mb-8">
                {title}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg text-[#1A1A1A]/60 leading-relaxed mb-10">
                {description}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a href={linkHref} className="flex items-center gap-2 text-[15px] font-bold text-[#1A1A1A] hover:opacity-70 transition-opacity mb-12">
                {linkText}
                <ArrowRight size={18} />
              </a>
            </Reveal>

            <ul className="space-y-5">
              {bullets.map((bullet, i) => (
                <Reveal key={i} delay={0.4 + i * 0.1}>
                  <li className="flex items-center gap-4 text-[15px] font-medium text-[#1A1A1A]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/20" />
                    {bullet}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Graphic Content */}
          <div className={`flex-1 w-full relative flex items-center justify-center ${imageBgColor} rounded-[40px] p-12 md:p-20 min-h-[400px] md:min-h-[500px]`}>
            {graphic ? graphic : (
              <div className="relative w-full aspect-video bg-white rounded-xl shadow-2xl border border-[#1A1A1A]/5 overflow-hidden flex items-center justify-center text-xs font-mono text-gray-300">
                [Graphic: {title}]
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
