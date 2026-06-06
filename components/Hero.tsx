"use client"

// Effects: Full-bleed background image · Hero CTA Magnetic Hover
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#04050D" }}
      aria-label="Apresentação"
    >
      {/* Full-bleed background image — static, no scroll effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroimagem.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Text content */}
      <div className="relative z-20 container-xl flex flex-col items-center text-center pt-28 pb-48 md:pt-36 md:pb-56">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-[40px] leading-[1.05] md:text-[60px] lg:text-[72px] font-normal text-white tracking-[-0.02em] mb-4"
        >
          Superpoderes,<br />
          em todo lugar que você trabalha
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58 }}
          className="text-base md:text-[20px] text-white/80 max-w-2xl leading-relaxed mb-8 font-normal tracking-tight"
        >
          WhatsApp, CRM e IA que trabalha em qualquer aba e conversa
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.72 }}
          className="flex justify-center mb-8"
        >
          {/* Superhuman Style Primary Button */}
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-4 pl-7 pr-2.5 py-2.5 rounded-full text-[15px] font-semibold text-white bg-[#0A0B10] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:bg-[#12141C]"
          >
            Começar Agora
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7C6FF5] to-[#5B4FCF] flex items-center justify-center shadow-[0_0_15px_rgba(124,111,245,0.4)] transition-transform group-hover:rotate-[-45deg]">
              <ArrowRight size={18} className="text-white" />
            </div>
          </motion.a>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-xs text-white/30 tracking-widest uppercase font-bold"
        >
          IA treinada para o seu negócio
        </motion.p>
      </div>
    </section>
  )
}

