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

// ── Variantes de Animação ────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
}

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
}

// ── Mockups Interativos ─────────────────────────────────────────────────────────

function InboxMockup() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full h-full bg-[#0D0D14]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden flex shadow-2xl">
      {/* Sidebar */}
      <div className="w-[30%] border-r border-white/10 flex flex-col bg-[#11111A]/50">
        <motion.div variants={itemVariants} className="p-4 border-b border-white/10">
          <div className="bg-white/5 rounded-lg px-3 py-2 text-[10px] text-white/50 flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Buscar conversas...
          </div>
        </motion.div>
        <div className="flex-1 overflow-hidden p-3 flex flex-col gap-2">
          <motion.div variants={itemVariants} className="p-3 bg-[#7C6FF5]/10 border border-[#7C6FF5]/20 rounded-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7C6FF5]"></div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[12px] font-bold text-white">Marcos Silva</span>
              <span className="text-[9px] text-[#4ADE80] font-bold bg-[#4ADE80]/10 px-1.5 py-0.5 rounded">WPP</span>
            </div>
            <p className="text-[10px] text-white/70 truncate">Preciso de um orçamento...</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-white/5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[12px] font-bold text-white">Ana Souza</span>
              <span className="text-[9px] text-[#A9A0FF] font-bold bg-[#A9A0FF]/10 px-1.5 py-0.5 rounded">IG</span>
            </div>
            <p className="text-[10px] text-white/50 truncate">Vocês atendem em SP?</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-white/5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[12px] font-bold text-white">Empresa X</span>
              <span className="text-[9px] text-blue-400 font-bold bg-blue-400/10 px-1.5 py-0.5 rounded">WEB</span>
            </div>
            <p className="text-[10px] text-white/50 truncate">Estou vendo a demo, mas...</p>
          </motion.div>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 flex flex-col relative bg-[#05050A]">
        <motion.div variants={itemVariants} className="p-4 border-b border-white/10 flex justify-between items-center bg-[#0D0D14]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 p-[2px]">
              <div className="w-full h-full bg-[#111] rounded-full border border-[#111] overflow-hidden"><img src="https://i.pravatar.cc/150?img=11" alt="Marcos"/></div>
            </div>
            <div>
              <p className="text-[12px] font-bold text-white">Marcos Silva</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-[9px] text-white/40">Online agora</p>
              </div>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-lg border border-green-500/20 flex items-center gap-1.5">
            <span className="text-lg leading-none mb-[2px]">🔥</span> Lead Quente
          </div>
        </motion.div>
        
        <div className="flex-1 p-5 flex flex-col gap-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>

          <motion.div variants={itemVariants} className="self-start bg-[#1F1F2E] px-4 py-3 rounded-2xl rounded-tl-none max-w-[85%] border border-white/5 shadow-lg relative z-10">
            <p className="text-[11px] text-white/90">Olá, vi o anúncio e preciso de um orçamento para minha clínica.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="self-center my-1 px-4 py-1.5 bg-[#7C6FF5]/10 border border-[#7C6FF5]/20 rounded-full flex items-center gap-2 relative z-10 backdrop-blur-sm">
            <div className="w-4 h-4 rounded-full bg-[#7C6FF5] flex items-center justify-center"><span className="text-white text-[8px] font-bold">S</span></div>
            <span className="text-[10px] text-[#A9A0FF] font-medium">SuperAI assumiu o atendimento</span>
          </motion.div>
          <motion.div variants={itemVariants} className="self-end bg-gradient-to-br from-[#7C6FF5]/20 to-[#5a4cdb]/20 border border-[#7C6FF5]/30 px-4 py-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-[0_5px_20px_rgba(124,111,245,0.15)] relative z-10 backdrop-blur-sm">
            <p className="text-[11px] text-white">Olá Marcos! Claro, adoraríamos ajudar. Quantos pacientes vocês atendem em média por mês?</p>
          </motion.div>
          <motion.div variants={itemVariants} className="self-start bg-[#1F1F2E] px-4 py-3 rounded-2xl rounded-tl-none max-w-[85%] border border-white/5 shadow-lg relative z-10">
            <p className="text-[11px] text-white/90">Cerca de 300 pacientes.</p>
          </motion.div>
          
          <motion.div variants={scaleVariants} className="self-center mt-2 px-4 py-2.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 relative z-10 shadow-[0_0_30px_rgba(74,222,128,0.1)]">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <div>
              <span className="text-[11px] font-bold text-green-400 block mb-0.5">Qualificação Concluída</span>
              <span className="text-[9px] text-white/60">Handoff automático para vendas</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function FlowMockup() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full h-full bg-[#0D0D14] rounded-2xl border border-white/10 overflow-hidden flex flex-col relative shadow-2xl">
      <motion.div variants={itemVariants} className="p-4 border-b border-white/10 bg-[#11111A] flex gap-3 items-center">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <div className="mx-2 h-4 w-px bg-white/10"></div>
        <div className="px-3 py-1.5 bg-white/5 rounded-md text-[10px] font-medium text-white/80 hover:bg-white/10 transition cursor-pointer">Blocos</div>
        <div className="px-3 py-1.5 bg-gradient-to-r from-[#7C6FF5] to-[#5a4cdb] rounded-md text-[10px] font-bold text-white shadow-[0_0_15px_rgba(124,111,245,0.4)]">Agente IA</div>
        <div className="px-3 py-1.5 bg-white/5 rounded-md text-[10px] font-medium text-white/80 hover:bg-white/10 transition cursor-pointer">Condições</div>
      </motion.div>
      
      <div className="flex-1 relative overflow-hidden bg-[#0A0A0F]">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        
        <motion.div variants={scaleVariants} className="absolute top-8 left-1/2 -translate-x-1/2 w-[180px] bg-[#1A1A24] border border-white/10 rounded-xl p-3 shadow-xl z-10 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-[#7C6FF5]/20 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A9A0FF" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <span className="text-[11px] font-bold text-white">Gatilho Inicial</span>
          </div>
          <p className="text-[9px] text-white/40 leading-relaxed">Lead enviou qualquer mensagem no WhatsApp</p>
        </motion.div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} d="M 50% 90 L 50% 140" stroke="rgba(124,111,245,0.5)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} d="M 50% 210 L 25% 260" stroke="rgba(74,222,128,0.5)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} d="M 50% 210 L 75% 260" stroke="rgba(248,113,113,0.5)" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        <motion.div variants={scaleVariants} className="absolute top-[140px] left-1/2 -translate-x-1/2 w-[240px] bg-gradient-to-br from-[#7C6FF5]/10 to-[#11111A] border border-[#7C6FF5]/40 rounded-xl p-4 shadow-[0_10px_30px_rgba(124,111,245,0.15)] z-10 backdrop-blur-md">
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#111] animate-pulse"></div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C6FF5] to-[#5a4cdb] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-[12px]">AI</span>
            </div>
            <div>
              <span className="text-[12px] font-bold text-white block">Agente Qualificador</span>
              <span className="text-[9px] text-[#A9A0FF]">IA Conversacional</span>
            </div>
          </div>
          <div className="bg-black/40 rounded-lg p-2 border border-white/5 mb-2">
            <p className="text-[9px] text-white/70 mb-1 font-medium">Objetivos da IA:</p>
            <ul className="text-[8px] text-white/50 list-disc pl-3 space-y-0.5">
              <li>Extrair tamanho da empresa</li>
              <li>Identificar urgência</li>
            </ul>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-[#7C6FF5]"></motion.div>
            </div>
            <span className="text-[8px] text-white/40 whitespace-nowrap">Analisando...</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="absolute top-[260px] left-[15%] w-[140px] bg-[#11111A]/80 backdrop-blur-md border border-green-500/30 rounded-xl p-3 shadow-lg z-10">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
            <p className="text-[10px] font-bold text-green-400">Score &gt; 70</p>
          </div>
          <p className="text-[9px] text-white/60 text-center">Transferir p/ Vendas</p>
        </motion.div>

        <motion.div variants={itemVariants} className="absolute top-[260px] right-[15%] w-[140px] bg-[#11111A]/80 backdrop-blur-md border border-red-500/30 rounded-xl p-3 shadow-lg z-10">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            <p className="text-[10px] font-bold text-red-400">Score &lt; 70</p>
          </div>
          <p className="text-[9px] text-white/60 text-center">Nutrição Automática</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

function QualificationMockup() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full h-full bg-[#05050A] rounded-2xl border border-white/10 overflow-hidden flex flex-col p-6 shadow-2xl items-center justify-center relative">
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#7C6FF5]/20 blur-[80px] rounded-full"></motion.div>
      
      <motion.div variants={scaleVariants} className="w-full max-w-[320px] bg-[#11111A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4 border-b border-white/10 pb-5 mb-5">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 p-[2px]">
              <div className="w-full h-full bg-[#111] rounded-full border border-[#111] overflow-hidden"><img src="https://i.pravatar.cc/150?img=11" alt="Marcos"/></div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#111] rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-green-500 rounded-full"></div></div>
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-white mb-0.5">Marcos Silva</h4>
            <div className="flex gap-2">
              <span className="text-[10px] text-white/40 flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/></svg> marcos@clinica.com</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <motion.div variants={itemVariants} className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 transition">
            <span className="text-[11px] text-white/50 flex items-center gap-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Lead Score</span>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-[11px] font-bold px-3 py-1 rounded-full border border-green-500/30 shadow-[0_0_15px_rgba(74,222,128,0.2)]">92/100 (Hot)</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 transition">
            <span className="text-[11px] text-white/50 flex items-center gap-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> Empresa</span>
            <span className="text-[11px] text-white font-medium bg-white/5 px-2 py-1 rounded">10-50 func.</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 transition">
            <span className="text-[11px] text-white/50 flex items-center gap-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Dor Principal</span>
            <span className="text-[11px] text-white font-medium bg-white/5 px-2 py-1 rounded">Perda de leads</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 transition">
            <span className="text-[11px] text-white/50 flex items-center gap-2"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> Orçamento</span>
            <span className="text-[11px] text-white font-medium bg-white/5 px-2 py-1 rounded">R$ 1.5k - 3k</span>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-6 pt-5 border-t border-white/10 flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-[#7C6FF5] to-[#5a4cdb] hover:from-[#6b5de3] hover:to-[#4a3ccb] text-white text-[11px] font-bold py-2.5 rounded-xl shadow-[0_5px_15px_rgba(124,111,245,0.4)] transition-all hover:-translate-y-0.5">Assumir Chat</button>
          <button className="flex-1 bg-white/5 hover:bg-white/10 text-white/90 text-[11px] font-bold py-2.5 rounded-xl border border-white/10 transition-all hover:-translate-y-0.5">Criar Tarefa</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function BroadcastMockup() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full h-full bg-[#0D0D14] rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-2xl">
      <motion.div variants={itemVariants} className="p-5 border-b border-white/10 flex justify-between items-center bg-[#11111A]">
        <div>
          <h3 className="text-[14px] font-bold text-white mb-1">Nova Campanha WhatsApp</h3>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7C6FF5] animate-pulse"></span>
            <p className="text-[10px] text-white/50">Rascunho automático gerado por IA</p>
          </div>
        </div>
        <button className="bg-[#7C6FF5] hover:bg-[#6b5de3] text-white text-[11px] font-bold px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(124,111,245,0.3)] transition-colors">Enviar Agora (4.281)</button>
      </motion.div>

      <div className="flex-1 p-5 flex gap-6 overflow-hidden">
        {/* Config */}
        <div className="w-1/2 flex flex-col gap-5">
          <motion.div variants={itemVariants}>
            <label className="text-[11px] font-bold text-white mb-2 block">1. Público Alvo</label>
            <div className="bg-[#11111A] border border-white/10 rounded-xl p-3">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#7C6FF5]/20 border border-[#7C6FF5]/30 text-[#A9A0FF] text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1">Status: Frio <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg></span>
                <span className="bg-white/5 border border-white/10 text-white/70 text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1">Tag: E-commerce <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg></span>
                <button className="bg-white/5 border border-white/10 text-white/50 text-[10px] px-2.5 py-1 rounded-lg border-dashed hover:bg-white/10 hover:text-white transition-colors">+ Filtro</button>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-[10px] text-white/50">Contatos Filtrados</span>
                <span className="text-[11px] font-bold text-[#4ADE80]">4.281 contatos</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex-1 flex flex-col">
            <label className="text-[11px] font-bold text-white mb-2 block flex items-center justify-between">
              2. Prompt Base 
              <span className="bg-gradient-to-r from-[#7C6FF5] to-[#5a4cdb] text-transparent bg-clip-text text-[9px] uppercase tracking-wider">IA Personaliza</span>
            </label>
            <textarea readOnly className="flex-1 w-full bg-[#11111A] border border-white/10 focus:border-[#7C6FF5]/50 transition-colors rounded-xl p-3 text-[11px] text-white/80 resize-none leading-relaxed outline-none" value="Olá {nome}, vi que você tem um e-commerce. Queria saber se o volume de chamados tem sido um gargalo pra você nesse fim de ano. Criamos uma IA específica para o seu nicho..." />
          </motion.div>
        </div>
        
        {/* Preview */}
        <motion.div variants={itemVariants} className="w-1/2 bg-[#11111A] border border-white/10 rounded-xl flex flex-col overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>
          <div className="p-3 border-b border-white/10 bg-[#1A1A24] flex items-center justify-between z-10">
            <p className="text-[10px] font-bold text-white/70 flex items-center gap-1.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C6FF5" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> Preview Gerado</p>
            <div className="flex gap-1">
              <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50"><path d="M15 18l-6-6 6-6"/></svg></div>
              <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50"><path d="M9 18l6-6-6-6"/></svg></div>
            </div>
          </div>
          <div className="flex-1 p-4 flex flex-col justify-end gap-3 bg-[#0A0A0F] z-10">
            <div className="self-end bg-[#075E54] px-4 py-3 rounded-2xl rounded-tr-none max-w-[90%] shadow-lg border border-white/5">
              <p className="text-[11px] text-white/90 leading-relaxed">Olá Mariana, vi que a Loja Mix é um e-commerce incrível! Queria saber se o volume de chamados tem sido um gargalo pra você nessa Black Friday. Criamos uma IA específica para o nicho de varejo que pode te ajudar...</p>
            </div>
            <div className="flex justify-end gap-1">
              <span className="text-[8px] text-white/30">Lida 11:42</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ── Componente Principal ────────────────────────────────────────────────────────

export default function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState(FEATURES[0].id)

  const activeFeature = FEATURES.find((f) => f.id === activeTab)!
  const Mockup = activeFeature.mockup

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#020204" }} aria-label="Plataforma">
      {/* Background glow global */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#7C6FF5]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[56px] font-bold text-white tracking-tight leading-tight mb-6"
          >
            A plataforma completa para <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C6FF5] via-[#A9A0FF] to-[#4ADE80]">
              gerenciar e automatizar conversas.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-white/50 max-w-2xl mx-auto"
          >
            Não é apenas um chatbot. É uma suíte de automação inteligente construída para o ciclo completo de vendas: da captura ao fechamento, em todos os canais.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Tabs (Left) */}
          <div className="w-full lg:w-[35%] flex flex-col gap-3">
            {FEATURES.map((feature) => {
              const isActive = activeTab === feature.id
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-500 relative overflow-hidden group ${
                    isActive ? "bg-white/[0.04] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.02)]" : "bg-transparent border border-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7C6FF5] to-[#4ADE80]"
                    />
                  )}
                  
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                    isActive ? "bg-gradient-to-br from-[#7C6FF5]/20 to-[#5a4cdb]/20 text-[#A9A0FF] shadow-[0_0_20px_rgba(124,111,245,0.2)]" : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/70"
                  }`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className={`text-[18px] md:text-[20px] font-bold mb-2 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/60 group-hover:text-white/90"
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
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
          <div className="w-full lg:w-[65%] h-[450px] md:h-[550px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="w-full h-full relative"
              >
                {/* Dynamic Glow behind mockup */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#7C6FF5]/15 blur-[100px] rounded-full pointer-events-none" 
                />
                
                {/* Mockup Container */}
                <div className="relative w-full h-full z-10 perspective-[2000px]">
                  <motion.div 
                    initial={{ rotateY: 5, rotateX: 2 }}
                    animate={{ rotateY: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Mockup />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
