"use client"

import { motion } from "framer-motion"

// ── Mini UIs dentro dos cards ──────────────────────────────────────────────────

function ProspectUI() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3">
      <div className="w-48 bg-white/5 border border-white/10 rounded-full px-4 py-3 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <span className="text-white text-sm font-medium">Novo Lead</span>
      </div>

      <div className="w-48 bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 rounded-full px-4 py-3 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
          <span className="text-purple-400 text-xs">🔥</span>
        </div>
        <span className="text-purple-200 text-sm font-medium">Lead Quente</span>
      </div>

      <div className="w-48 bg-white/5 border border-white/10 rounded-full px-4 py-3 flex items-center justify-between">
        <span className="text-white/60 text-sm font-medium pl-2">Pronto para contato</span>
        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
      </div>
    </div>
  )
}

function NetworkUI() {
  return (
    <div className="mt-8 relative w-full h-[180px] flex items-center justify-center">
      {/* Central Node */}
      <div className="w-14 h-14 rounded-full bg-[#7C6FF5] flex items-center justify-center shadow-[0_0_30px_rgba(124,111,245,0.4)] z-10">
        <span className="text-white font-bold text-xl">S</span>
      </div>
      
      {/* Connections (SVG) */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(124,111,245,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="rgba(124,111,245,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="rgba(124,111,245,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="rgba(124,111,245,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="rgba(124,111,245,0.3)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Avatars */}
      <div className="absolute top-[15%] left-[20%] w-8 h-8 rounded-full bg-gray-600 border border-white/20 overflow-hidden"><img src="https://i.pravatar.cc/100?img=11" alt="User"/></div>
      <div className="absolute top-[20%] right-[20%] w-9 h-9 rounded-full bg-gray-600 border border-white/20 overflow-hidden"><img src="https://i.pravatar.cc/100?img=33" alt="User"/></div>
      <div className="absolute bottom-[20%] left-[15%] w-10 h-10 rounded-full bg-gray-600 border border-white/20 overflow-hidden"><img src="https://i.pravatar.cc/100?img=47" alt="User"/></div>
      <div className="absolute bottom-[15%] right-[15%] w-8 h-8 rounded-full bg-gray-600 border border-white/20 overflow-hidden"><img src="https://i.pravatar.cc/100?img=12" alt="User"/></div>
      <div className="absolute bottom-[5%] left-[45%] w-7 h-7 rounded-full bg-gray-600 border border-white/20 overflow-hidden"><img src="https://i.pravatar.cc/100?img=5" alt="User"/></div>
    </div>
  )
}

function TasksUI() {
  return (
    <div className="mt-8 flex items-center justify-center h-[180px] relative">
      <div className="flex gap-6 w-full max-w-[280px]">
        <div className="flex flex-col gap-3 flex-1 justify-center relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <span className="text-[11px] text-white/80">Criar tarefa</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-50 shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span className="text-[11px] text-white/80">Enviar e-mail</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-50 shrink-0"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span className="text-[11px] text-white/80">Agendar follow-up</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-1 relative z-10">
          <div className="w-16 h-16 rounded-full bg-[#7C6FF5]/20 border border-[#7C6FF5]/30 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#7C6FF5] flex items-center justify-center shadow-[0_0_20px_rgba(124,111,245,0.5)]">
              <span className="text-white font-bold text-lg">S</span>
            </div>
          </div>
        </div>

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <path d="M 120 50 C 150 50, 160 90, 200 90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3"/>
          <path d="M 120 90 C 150 90, 160 90, 200 90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3"/>
          <path d="M 120 130 C 150 130, 160 90, 200 90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3"/>
        </svg>
      </div>
    </div>
  )
}

function IntegrationsUI() {
  return (
    <div className="mt-6 flex items-center justify-center h-[200px] relative">
      <div className="absolute top-[20%] left-[20%] w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" className="w-8 h-8" alt="SF"/></div>
      <div className="absolute top-[10%] right-[30%] w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-6 h-6" alt="G"/></div>
      <div className="absolute bottom-[20%] left-[30%] w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" className="w-7 h-7" alt="Slack"/></div>
      <div className="absolute bottom-[10%] right-[20%] w-12 h-12 bg-[#0078D4] rounded-xl flex items-center justify-center shadow-lg"><svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M22 6l-10-3v18l10-3V6zm-12 2l-8-2v12l8-2V8z"/></svg></div>
      <div className="absolute top-[40%] right-[10%] w-10 h-10 bg-[#FF7A59] rounded-xl flex items-center justify-center shadow-lg"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="6"/></svg></div>
      
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#7C6FF5] to-[#5a4cdb] flex items-center justify-center shadow-[0_0_40px_rgba(124,111,245,0.4)] z-10">
        <span className="text-white font-bold text-4xl">S</span>
      </div>

      <svg className="absolute inset-0 w-full h-full -z-10">
        <path d="M 80 70 Q 150 100 150 100" fill="none" stroke="rgba(124,111,245,0.3)" strokeWidth="2" />
        <path d="M 220 50 Q 150 100 150 100" fill="none" stroke="rgba(124,111,245,0.3)" strokeWidth="2" />
        <path d="M 100 160 Q 150 100 150 100" fill="none" stroke="rgba(124,111,245,0.3)" strokeWidth="2" />
        <path d="M 250 170 Q 150 100 150 100" fill="none" stroke="rgba(124,111,245,0.3)" strokeWidth="2" />
      </svg>
    </div>
  )
}

function ChatUI() {
  return (
    <div className="mt-6 mx-auto w-full max-w-[320px] bg-[#1A1A24] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
      {/* Header */}
      <div className="px-4 py-3 flex items-center gap-3 border-b border-white/5 bg-[#1F1F2E]">
        <div className="w-8 h-8 rounded-lg bg-[#7C6FF5] flex items-center justify-center text-white font-bold text-sm">S</div>
        <div>
          <p className="text-xs font-semibold text-white">SuperAI</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <p className="text-[9px] text-white/50">Online</p>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="p-4 flex flex-col gap-3 text-[11px]">
        <div className="flex items-end gap-2">
          <div className="w-5 h-5 rounded bg-[#7C6FF5] flex items-center justify-center text-white font-bold text-[9px] shrink-0">S</div>
          <div className="bg-[#2D2D40] text-white px-3 py-2 rounded-2xl rounded-bl-none max-w-[85%]">
            Olá! Como posso te ajudar hoje?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#7C6FF5]/20 border border-[#7C6FF5]/30 text-[#A9A0FF] px-3 py-2 rounded-2xl rounded-br-none max-w-[85%]">
            Quero saber mais sobre o produto.
          </div>
        </div>
        <div className="flex items-end gap-2">
          <div className="w-5 h-5 rounded bg-[#7C6FF5] flex items-center justify-center text-white font-bold text-[9px] shrink-0">S</div>
          <div className="bg-[#2D2D40] text-white px-3 py-2 rounded-2xl rounded-bl-none max-w-[85%]">
            Perfeito! Posso te enviar mais informações e agendar uma demo?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#7C6FF5]/20 border border-[#7C6FF5]/30 text-[#A9A0FF] px-3 py-2 rounded-2xl rounded-br-none max-w-[85%]">
            Sim, vamos agendar.
          </div>
        </div>
        <div className="mt-1 w-10 h-5 bg-[#2D2D40] rounded-full flex items-center justify-center gap-1">
          <span className="w-1 h-1 rounded-full bg-white/40 animate-bounce"></span>
          <span className="w-1 h-1 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.2s" }}></span>
          <span className="w-1 h-1 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.4s" }}></span>
        </div>
      </div>
    </div>
  )
}

const CARDS = [
  {
    title: "IA para prospecção\ne enriquecimento",
    desc: "Encontre leads ideais, enriqueça dados em segundos e aumente suas chances de conversão com IA.",
    UI: ProspectUI,
    colSpan: "col-span-1 lg:col-span-4", // top 3 cards using grid of 12 (4+4+4)
  },
  {
    title: "IA que entende pessoas\ne negócios",
    desc: "Analisa perfis, comportamento e contexto para gerar insights que orientam decisões e personalizam abordagens.",
    UI: NetworkUI,
    colSpan: "col-span-1 lg:col-span-4",
  },
  {
    title: "Execução de tarefas\ncom IA",
    desc: "Automatize ações repetitivas, crie fluxos inteligentes e foque no que realmente move o resultado.",
    UI: TasksUI,
    colSpan: "col-span-1 lg:col-span-4",
  },
  {
    title: "Integração inteligente\ne fluida",
    desc: "Conecte suas ferramentas favoritas e centralize dados, atividades e insights em um só lugar.",
    UI: IntegrationsUI,
    colSpan: "col-span-1 lg:col-span-6", // bottom 2 cards using grid of 12 (6+6)
  },
  {
    title: "IA que conversa com\nseu cliente",
    desc: "Atenda, qualifique e engaje em escala com assistentes inteligentes que falam a língua do seu cliente.",
    UI: ChatUI,
    colSpan: "col-span-1 lg:col-span-6",
  },
]

export default function UseCasesSection() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#05050A" }} aria-label="Diferenciais">
      <div className="mx-auto w-full max-w-[1200px] px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto bg-gradient-to-br from-[#7C6FF5] to-[#5a4cdb] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(124,111,245,0.4)]"
          >
            <span className="text-white font-bold text-3xl">S</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[48px] font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto"
          >
            Tudo que sua equipe precisa, potencializado pela <span className="text-[#A9A0FF]">SuperAI.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={\`rounded-[24px] p-8 flex flex-col \${c.colSpan}\`}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "inset 0 0 40px rgba(255,255,255,0.01)"
              }}
            >
              <div className="mb-6">
                <h3 className="text-[20px] md:text-[22px] font-bold text-white leading-snug whitespace-pre-line mb-3">
                  {c.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-white/50 max-w-[90%]">
                  {c.desc}
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <c.UI />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
