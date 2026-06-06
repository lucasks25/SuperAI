"use client"

import { motion } from "framer-motion"
import { BRAND_NAME, WHATSAPP_URL } from "@/lib/constants"

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative w-full h-[400px] md:h-[450px] flex items-center overflow-hidden"
    >
      {/* Background Base */}
      <div className="absolute inset-0 z-0 bg-[#5DA6EB]" />
      
      {/* Glowing Soft Orbs (Pinkish and White) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 45% 60%, #F7DCFA 0%, transparent 45%),
            radial-gradient(circle at 35% 30%, #F7DCFA 0%, transparent 40%),
            radial-gradient(circle at 75% 50%, #E6F0F9 0%, transparent 45%)
          `,
          filter: "blur(60px)",
        }}
      />

      {/* Code Text Background overlay (faint background text) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.25] pointer-events-none select-none overflow-hidden mix-blend-overlay filter blur-[0.5px]">
        <pre className="text-[15px] leading-relaxed font-mono text-white whitespace-pre-wrap text-justify transform -rotate-1 scale-110" style={{ width: "120%" }}>
{`       human: a suite that
   writing excellency. Our all-in-one workspace,
 manage. And we're building Superhuman Go, which
       of AI collaborators.
     turned to Grammarly because
     we made it our mission to
     our mission beyond
   everywhere you work.
 like you. It proves you're
 going anywhere. It lives on as part of
 next. What's changing is the
 product to the entire suite.
 not about AI, but about
 how to make
 AI-first
 these
 solutions
 human: a suite that
 writing excellency. Our all-in-one workspace,
 manage. And we're building Superhuman Go, which`}
        </pre>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Text */}
        <div className="flex-1 flex justify-start md:justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] md:text-[44px] lg:text-[54px] leading-[1.05] font-normal text-[#18181B] tracking-[-0.02em]"
          >
            A IA que trabalha<br />
            onde você<br />
            trabalha
          </motion.h2>
        </div>

        {/* Right Side: Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-start md:justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-[#18181B] px-5 py-2.5 rounded-md text-[13px] font-semibold shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            Começar com a {BRAND_NAME}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
