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
    desc: "Retrieval-Augmented Generation fundamenta cada resposta para eliminar erros e garantir informações corretas ao cliente.",
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
    desc: "Defina seus próprios guias de atendimento, scripts e limites de resposta antes de ativar o agente.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: "Segurança nível empresarial",
    desc: "Conformidade com a LGPD, criptografia de ponta a ponta e controle de acesso por papéis com 2FA.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Seus dados são seus",
    desc: "Nenhuma informação é compartilhada ou usada para treinar modelos externos. Privacidade total garantida.",
  },
]

export default function BeforeAfterSection() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#000000" }} aria-label="Por que somos confiáveis">
      <div className="mx-auto w-full max-w-[1100px] px-6 md:px-8">

        {/* Header — igual ao respond.io */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[44px] font-bold text-white leading-tight tracking-tight max-w-2xl mx-auto"
          >
            Por que os agentes de IA da SuperAI são confiáveis
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href="#como-funciona"
            className="inline-flex items-center gap-1.5 mt-4 text-[14px] text-white/40 hover:text-white/70 transition-colors"
          >
            Como a SuperAI funciona
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        {/* 4 cards — mesmo layout da print */}
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
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              {/* Ícone — exato como na print: top-left, branco, fino */}
              <div>{c.icon}</div>

              {/* Texto */}
              <div className="flex flex-col gap-2">
                <p className="text-[15px] font-semibold text-white leading-snug">{c.title}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
