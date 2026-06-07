"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const STORIES = [
  {
    company: "Doctor Heal",
    logo: "Doctor Heal",
    result: "Doctor Heal Speeds Up Appointment Bookings 62% with SuperAI's AI Agents",
    bgImage: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee4?w=400&q=80",
  },
  {
    company: "Anglo Health Care",
    logo: "ANGLO HEALTH CARE",
    result: "Anglo Healthcare Increases Conversions by 60% with SuperAI's AI Agents",
    bgImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
  },
  {
    company: "trueCost",
    logo: "truecost",
    result: "US Health Insurance Broker Responds to Leads 10x Faster with AI Agents",
    bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
  },
  {
    company: "PARCELDAILY",
    logo: "PARCELDAILY",
    result: "ParcelDaily Boosts Conversions by 60% with Meta's CAPI + SuperAI",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
  },
]

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" })
  }

  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "#000000" }}
      aria-label="Casos de sucesso"
    >
      <div className="mx-auto w-full max-w-[1200px]">

        {/* Header */}
        <div className="flex flex-col items-center px-6 md:px-16 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[36px] font-bold text-white tracking-tight mb-8"
          >
            Real success stories from customers
          </motion.h2>

          <div className="w-full flex justify-end gap-3 px-2 mb-4">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-70"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} className="text-white/70" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-70"
              aria-label="Próximo"
            >
              <ChevronRight size={20} className="text-white/70" />
            </button>
          </div>
        </div>

        {/* Scroll cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 px-6 md:px-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {STORIES.map((s, i) => (
            <motion.article
              key={s.company}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative flex-none w-[280px] h-[380px] rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: \`url('\${s.bgImage}')\` }}
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10" />

              {/* Content */}
              <div className="relative z-20 flex flex-col h-full p-6">
                {/* Logo Area */}
                <div className="flex justify-center mt-2">
                  <h3 className="text-white font-bold text-xl tracking-wider uppercase opacity-90 text-center">
                    {s.logo}
                  </h3>
                </div>

                <div className="mt-auto">
                  <p className="text-[14px] font-medium leading-relaxed text-white/90">
                    {s.result}
                  </p>
                </div>
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

