"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FEATURES = [
  {
    id: "inbox",
    title: "Caixa de Entrada Unificada",
    desc: "Acompanhe WhatsApp, Instagram, Messenger e WebChat em uma única tela com contexto completo do lead.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    mockup: InboxMockup,
  },
  {
    id: "flow",
    title: "Construtor de Fluxos com IA",
    desc: "Crie agentes inteligentes arrastando blocos. A IA entende intenções complexas sem precisar de palavras exatas.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
    ),
    mockup: FlowMockup,
  },
  {
    id: "qualification",
    title: "Qualificação de Leads",
    desc: "A IA faz as perguntas certas, enriquece o lead automaticamente e roteia para os vendedores apenas quando estão prontos.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
    mockup: QualificationMockup,
  },
  {
    id: "broadcast",
    title: "Disparos e Campanhas",
    desc: "Agende disparos em massa personalizados e reative leads frios com automações focadas em conversão.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    mockup: BroadcastMockup,
  },
]

// ── Mockups Interativos ─────────────────────────────────────────────────────────

function InboxMockup() {
  return (
    <div className="w-full h-full bg-[#11111A] rounded-xl border border-white/5 overflow-hidden flex shadow-2xl">
      {/* Sidebar */}
      <div className="w-[30%] border-r border-white/5 flex flex-col">
        <div className="p-4 border-b border-white/5">
          <div className="bg-white/5 rounded-md px-3 py-1.5 text-[10px] text-white/50">Buscar conversas...</div>
        </div>
        <div className="flex-1 overflow-hidden p-2 flex flex-col gap-1">
          <div className="p-3 bg-white/5 rounded-lg border border-white/5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-bold text-white">Marcos Silva</span>
              <span className="text-[9px] text-green-400 font-bold">WPP</span>
            </div>
            <p className="text-[10px] text-white/50 truncate">Preciso de um orçamento...</p>
          </div>
          <div className="p-3 hover:bg-white/5 rounded-lg cursor-pointer">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-bold text-white">Ana Souza</span>
              <span className="text-[9px] text-purple-400 font-bold">IG</span>
            </div>
            <p className="text-[10px] text-white/50 truncate">Vocês atendem em SP?</p>
          </div>
          <div className="p-3 hover:bg-white/5 rounded-lg cursor-pointer">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-bold text-white">Empresa X</span>
              <span className="text-[9px] text-blue-400 font-bold">WEB</span>
            </div>
            <p className="text-[10px] text-white/50 truncate">Estou vendo a demo, mas...</p>
          </div>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 flex flex-col relative bg-[#0D0D14]">
        <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#11111A]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gray-700"></div>
            <div>
              <p className="text-[11px] font-bold text-white">Marcos Silva</p>
              <p className="text-[9px] text-white/40">Online no WhatsApp</p>
            </div>
          </div>
          <div className="px-2 py-1 bg-green-500/20 text-green-400 text-[9px] font-bold rounded">Quente</div>
        </div>
        
        <div className="flex-1 p-4 flex flex-col gap-3">
          <div className="self-start bg-[#1F1F2E] px-3 py-2 rounded-xl rounded-tl-none max-w-[80%]">
            <p className="text-[10px] text-white/80">Olá, vi o anúncio e preciso de um orçamento para minha clínica.</p>
          </div>
          <div className="self-center my-1 text-[9px] text-white/30">SuperAI assumiu o atendimento</div>
          <div className="self-end bg-[#7C6FF5]/20 border border-[#7C6FF5]/30 px-3 py-2 rounded-xl rounded-tr-none max-w-[80%]">
            <p className="text-[10px] text-[#A9A0FF]">Olá Marcos! Claro, adoraríamos ajudar. Quantos pacientes vocês atendem em média por mês?</p>
          </div>
          <div className="self-start bg-[#1F1F2E] px-3 py-2 rounded-xl rounded-tl-none max-w-[80%]">
            <p className="text-[10px] text-white/80">Cerca de 300.</p>
          </div>
          <div className="self-center my-1 px-3 py-1 bg-[#252538] border border-white/10 rounded-full flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <span className="text-[9px] text-white/60">Lead Qualificado! Handoff automático.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function FlowMockup() {
  return (
    <div className="w-full h-full bg-[#0D0D14] rounded-xl border border-white/5 overflow-hidden flex flex-col relative">
      <div className="p-3 border-b border-white/5 bg-[#11111A] flex gap-2">
        <div className="px-3 py-1.5 bg-white/5 rounded-md text-[10px] font-medium text-white">Blocos</div>
        <div className="px-3 py-1.5 bg-[#7C6FF5] rounded-md text-[10px] font-bold text-white">Agente IA</div>
        <div className="px-3 py-1.5 bg-white/5 rounded-md text-[10px] font-medium text-white">Condições</div>
      </div>
      
      <div className="flex-1 relative overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        
        {/* Nodes */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[160px] bg-[#11111A] border border-[#7C6FF5]/50 rounded-lg p-3 shadow-[0_0_15px_rgba(124,111,245,0.2)]">
          <div className="flex items-center gap-2 mb-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C6FF5" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span className="text-[10px] font-bold text-white">Gatilho Inicial</span>
          </div>
          <p className="text-[9px] text-white/40">O lead enviou qualquer mensagem</p>
        </div>

        {/* Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path d="M 50% 85 L 50% 130" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 50% 195 L 30% 230" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 50% 195 L 70% 230" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        <div className="absolute top-[130px] left-1/2 -translate-x-1/2 w-[200px] bg-gradient-to-r from-[#7C6FF5]/20 to-transparent border border-[#7C6FF5]/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A9A0FF" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <span className="text-[10px] font-bold text-[#A9A0FF]">Agente Qualificador</span>
          </div>
          <p className="text-[9px] text-white/60 mb-2">Objetivo: Extrair tamanho da empresa e dor principal.</p>
          <div className="bg-[#111] rounded p-1 text-[8px] text-white/40">IA operando em modo conversacional...</div>
        </div>

        <div className="absolute top-[230px] left-[10%] w-[120px] bg-[#11111A] border border-green-500/30 rounded-lg p-2">
          <p className="text-[9px] font-bold text-green-400 text-center">Score &gt; 70</p>
          <p className="text-[8px] text-white/40 text-center mt-1">Handoff Vendas</p>
        </div>

        <div className="absolute top-[230px] right-[10%] w-[120px] bg-[#11111A] border border-red-500/30 rounded-lg p-2">
          <p className="text-[9px] font-bold text-red-400 text-center">Score &lt; 70</p>
          <p className="text-[8px] text-white/40 text-center mt-1">Nutrição Automática</p>
        </div>
      </div>
    </div>
  )
}

function QualificationMockup() {
  return (
    <div className="w-full h-full bg-[#11111A] rounded-xl border border-white/5 overflow-hidden flex flex-col p-6 shadow-2xl items-center justify-center relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#7C6FF5]/10 blur-3xl rounded-full"></div>
      
      <div className="w-full max-w-[300px] bg-[#1A1A24] border border-white/5 rounded-xl p-5 relative z-10">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">MS</div>
          <div>
            <h4 className="text-[13px] font-bold text-white">Marcos Silva</h4>
            <p className="text-[10px] text-white/40">marcos@clinica.com</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-white/50">Lead Score</span>
            <div className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded border border-green-500/20">92/100 (Hot)</div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-white/50">Tamanho da Empresa</span>
            <span className="text-[10px] text-white font-medium">10-50 funcionários</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[10px] text-white/50">Dor Principal</span>
            <span className="text-[10px] text-white font-medium">Perda de leads (Demora)</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[10px] text-white/50">Orçamento</span>
            <span className="text-[10px] text-white font-medium">R$ 1.5k - 3k / mês</span>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex gap-2">
          <button className="flex-1 bg-[#7C6FF5] text-white text-[10px] font-bold py-2 rounded-lg">Falar agora</button>
          <button className="flex-1 bg-white/5 text-white/70 text-[10px] font-bold py-2 rounded-lg border border-white/10">Agendar Demo</button>
        </div>
      </div>
    </div>
  )
}

function BroadcastMockup() {
  return (
    <div className="w-full h-full bg-[#11111A] rounded-xl border border-white/5 overflow-hidden flex flex-col">
      <div className="p-4 border-b border-white/5 flex justify-between items-center">
        <div>
          <h3 className="text-[12px] font-bold text-white">Nova Campanha WhatsApp</h3>
          <p className="text-[9px] text-white/40">Para: Leads Frios (>30 dias)</p>
        </div>
        <button className="bg-[#7C6FF5] text-white text-[9px] font-bold px-3 py-1.5 rounded-lg">Enviar Agora</button>
      </div>

      <div className="flex-1 p-4 flex gap-4">
        {/* Config */}
        <div className="w-1/2 flex flex-col gap-3">
          <div>
            <label className="text-[9px] text-white/50 mb-1 block">Público Alvo (Filtro)</label>
            <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex gap-1">
              <span className="bg-[#7C6FF5]/20 text-[#A9A0FF] text-[8px] px-2 py-0.5 rounded">Status: Frio</span>
              <span className="bg-[#7C6FF5]/20 text-[#A9A0FF] text-[8px] px-2 py-0.5 rounded">Tag: e-commerce</span>
            </div>
            <p className="text-[8px] text-white/30 mt-1">4.281 contatos selecionados</p>
          </div>
          <div>
            <label className="text-[9px] text-white/50 mb-1 block">Mensagem Base (IA personaliza para cada um)</label>
            <textarea readOnly className="w-full h-24 bg-[#0D0D14] border border-white/10 rounded-lg p-2 text-[9px] text-white/80 resize-none" value="Olá {nome}, vi que você tem um e-commerce. Queria saber se o volume de chamados tem sido um gargalo pra você nesse fim de ano..." />
          </div>
        </div>
        
        {/* Preview */}
        <div className="w-1/2 bg-[#0D0D14] border border-white/5 rounded-lg p-3 flex flex-col">
          <p className="text-[9px] text-white/50 mb-2 font-medium">Preview Gerado pela IA</p>
          <div className="flex-1 bg-[#1A1A24] rounded-lg p-3 flex flex-col justify-end gap-2">
            <div className="self-end bg-[#075E54] px-3 py-2 rounded-xl rounded-tr-none max-w-[90%]">
              <p className="text-[9px] text-white">Olá Mariana, vi que a Loja Mix é um e-commerce. Queria saber se o volume de chamados tem sido um gargalo pra você nessa Black Friday?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Componente Principal ────────────────────────────────────────────────────────

export default function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState(FEATURES[0].id)

  const activeFeature = FEATURES.find((f) => f.id === activeTab)!
  const Mockup = activeFeature.mockup

  return (
    <section className="py-24 md:py-32" style={{ background: "#05050A" }} aria-label="Plataforma">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[32px] md:text-[48px] font-bold text-white tracking-tight leading-tight mb-4">
            A plataforma completa para <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C6FF5] to-[#4ADE80]">
              gerenciar e automatizar conversas.
            </span>
          </h2>
          <p className="text-[16px] text-white/50 max-w-2xl mx-auto">
            Não é apenas um chatbot. É uma suíte de automação inteligente construída para o ciclo completo de vendas: da captura ao fechamento.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Tabs (Left) */}
          <div className="w-full lg:w-[40%] flex flex-col gap-2">
            {FEATURES.map((feature) => {
              const isActive = activeTab === feature.id
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                    isActive ? "bg-white/5 border border-white/10" : "bg-transparent border border-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#7C6FF5]"
                    />
                  )}
                  
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isActive ? "bg-[#7C6FF5]/20 text-[#7C6FF5]" : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/60"
                  }`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className={`text-[18px] font-bold mb-2 transition-colors ${
                    isActive ? "text-white" : "text-white/60 group-hover:text-white/80"
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[14px] text-white/50 leading-relaxed overflow-hidden"
                      >
                        {feature.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              )
            })}
          </div>

          {/* Mockup Showcase (Right) */}
          <div className="w-full lg:w-[60%] h-[400px] md:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                {/* Glow behind mockup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#7C6FF5]/10 blur-[80px] rounded-full pointer-events-none" />
                
                {/* Mockup Container */}
                <div className="relative w-full h-full z-10">
                  <Mockup />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
