"use client"

import { motion } from "framer-motion"

// Clone de: "Why respond.io's AI Agents are secure and reliable"
// Fundo preto puro · heading centralizado · 4 cards em linha · ícone SVG + título + descrição

const CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "Alta precisão nas respostas",
    desc: "Retrieval-Augmented Generation (RAG) fundamenta cada resposta para eliminar alucinações e garantir informações 100% corretas ao cliente.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="6" x2="20" y2="6"/>
        <line x1="8" y1="12" x2="20" y2="12"/>
        <line x1="4" y1="18" x2="16" y2="18"/>
        <circle cx="4" cy="12" r="2" fill="white"/>
      </svg>
    ),
    title: "Regras totalmente personalizadas",
    desc: "Defina seus próprios guias de atendimento, scripts, objeções de vendas e limites operacionais antes de ativar o Agente IA.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: "Segurança nível Enterprise",
    desc: "Conformidade total com a LGPD, criptografia de ponta a ponta e auditoria completa das conversas entre a IA e o lead.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Seus dados são 100% seus",
    desc: "Nenhuma informação da sua empresa ou de seus leads é compartilhada ou usada para treinar os modelos fundacionais de IA.",
  },
]

export default function SecuritySection() {
  return (
    <section className="py-24 md:py-32 border-b border-white/5" style={{ background: "#020204" }} aria-label="Por que somos confiáveis">
      <div className="mx-auto w-full max-w-[1100px] px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[44px] font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto"
          >
            Por que operações que faturam milhões confiam na MoltoChat
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href="#como-funciona"
            className="inline-flex items-center gap-1.5 mt-6 text-[14px] text-[#4ADE80] font-bold uppercase tracking-wider hover:text-white transition-colors"
          >
            Nossa tecnologia e segurança
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex flex-col gap-5 rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div>{c.icon}</div>

              <div className="flex flex-col gap-2">
                <p className="text-[15px] font-bold text-white leading-snug">{c.title}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
