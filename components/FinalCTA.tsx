"use client"

import { motion } from "framer-motion"
import { WHATSAPP_URL } from "@/lib/constants"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative w-full overflow-hidden bg-black"
    >


      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

          {/* Left — Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 max-w-[600px]"
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[56px] lg:text-[68px] font-black tracking-tighter leading-[1] text-white">
              Pronto para transformar<br />
              a sua operação?
            </h2>
            <p className="text-[16px] text-white/50 font-medium leading-relaxed max-w-[420px]">
              Configure seu Agente de IA em minutos e feche mais vendas hoje.
            </p>
          </motion.div>

          {/* Right — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col items-center gap-4 flex-shrink-0"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#D4FF00] hover:bg-[#c8f000] text-black px-8 py-4 rounded-full text-[16px] font-black transition-all duration-200 hover:scale-[1.03] shadow-sm"
            >
              Começar agora
              <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-[12px] text-white/30 font-medium uppercase tracking-widest">
              Sem cartão de crédito
            </span>
          </motion.div>

        </div>
      </div>


    </section>
  )
}
