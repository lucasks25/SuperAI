"use client"

import { motion } from "framer-motion"

export default function MetricsSection() {
  return (
    <section className="relative py-32 md:py-48 bg-white flex flex-col items-center justify-center z-10 overflow-hidden" id="inspiracao">
      
      {/* Very subtle glow for depth on white background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-black/5 blur-[120px] rounded-[100%] pointer-events-none z-0" />

      <div className="relative z-10 w-full px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[88px] font-black tracking-tighter leading-[1.1] text-black"
        >
          <span className="whitespace-nowrap">Tudo o que você precisa</span><br />
          <span className="whitespace-nowrap">para <span className="underline decoration-[#D4FF00] decoration-4 md:decoration-8 underline-offset-[8px] md:underline-offset-[12px]">escalar sua operação.</span></span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[18px] md:text-[24px] text-black/60 font-medium max-w-[700px] mx-auto mt-8 leading-relaxed"
        >
          Substitua integrações complexas por um único Agente de IA que resolve e vende sozinho.
        </motion.p>
      </div>
    </section>
  )
}
