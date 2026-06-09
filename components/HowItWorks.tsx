"use client"

import { motion } from "framer-motion"
import { SiWhatsapp, SiInstagram } from "react-icons/si"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-24 md:py-32 border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] md:text-[56px] font-black tracking-tighter leading-[1.05] text-gray-900 mb-4">
            Configure em 3 passos simples
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[480px] mx-auto leading-relaxed">
            Simples assim. Sem código, sem equipe técnica, sem complicação.
          </p>
        </motion.div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            {/* Visual */}
            <div className="rounded-2xl bg-[#D4FF00] h-[260px] md:h-[280px] flex items-center justify-center mb-5 overflow-hidden relative">
              {/* Dot grid pattern */}
              <div className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.12) 1.5px, transparent 1.5px)",
                  backgroundSize: "18px 18px"
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  className="inline-flex items-center gap-2 bg-black text-white text-[14px] font-black uppercase tracking-wider px-6 py-3 rounded-full hover:scale-105 transition-transform"
                >
                  Criar conta grátis
                  <ArrowRight size={16} strokeWidth={3} />
                </a>
                <span className="text-[12px] font-semibold text-black/50">Sem cartão de crédito</span>
              </div>
            </div>
            {/* Text */}
            <div>
              <p className="text-[14px] font-black text-gray-900 mb-1">Passo 1: Crie sua conta</p>
              <p className="text-[14px] text-gray-500">Comece de graça — nenhum cartão de crédito necessário.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {/* Visual */}
            <div className="rounded-2xl h-[260px] md:h-[280px] flex items-center justify-center mb-5 overflow-hidden relative"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,85,255,0.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,85,255,0.06) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
                backgroundColor: "#EEF2FF"
              }}
            >
              <div className="relative z-10 flex items-center gap-5">
                {/* Logo MoltoChat */}
                <div className="w-[80px] h-[80px] rounded-2xl bg-white shadow-lg flex items-center justify-center border border-gray-100">
                  <span className="text-[28px] font-black text-[#0055FF] tracking-tighter">M</span>
                </div>
                {/* Link icon */}
                <div className="w-[48px] h-[48px] rounded-full bg-white shadow flex items-center justify-center border border-gray-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </div>
                {/* WhatsApp */}
                <div className="w-[80px] h-[80px] rounded-2xl bg-white shadow-lg flex items-center justify-center border border-gray-100">
                  <SiWhatsapp size={40} color="#25D366" />
                </div>
              </div>
            </div>
            {/* Text */}
            <div>
              <p className="text-[14px] font-black text-gray-900 mb-1">Passo 2: Conecte seu WhatsApp</p>
              <p className="text-[14px] text-gray-500">Integre em menos de 2 minutos, sem código e sem técnico.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            {/* Visual */}
            <div className="rounded-2xl bg-gray-50 border border-gray-100 h-[260px] md:h-[280px] flex items-center justify-center mb-5 overflow-hidden p-6">
              <div className="w-full flex flex-col gap-2.5">
                {[
                  "Resposta automática",
                  "Qualificação de leads",
                  "Agendamento de reuniões",
                  "Suporte 24h por dia",
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm">
                    <span className="text-[13px] font-semibold text-gray-800">{item}</span>
                    <div className="flex items-center gap-1.5 bg-[#0055FF] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg">
                      <CheckCircle2 size={10} strokeWidth={3} />
                      Ativo
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Text */}
            <div>
              <p className="text-[14px] font-black text-gray-900 mb-1">Passo 3: Comece a vender</p>
              <p className="text-[14px] text-gray-500">Seu agente responde, qualifica e agenda enquanto você dorme.</p>
            </div>
          </motion.div>

        </div>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white text-[14px] font-black uppercase tracking-wider px-8 py-4 rounded-full transition-all hover:scale-[1.02]"
          >
            Começar agora
          </a>
          <a
            href="#planos"
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-800 text-[14px] font-bold px-8 py-4 rounded-full transition-colors"
          >
            Ver planos
          </a>
        </motion.div>

      </div>
    </section>
  )
}
