"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Users, Zap } from "lucide-react"

function AppMockup() {
  return (
    <div className="w-full h-full bg-[#0D0D14] flex flex-col relative overflow-hidden">
      {/* Top Header */}
      <div className="h-12 border-b border-white/5 bg-[#11111A] flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex bg-[#1A1A24] rounded-md p-1 gap-1">
          <div className="px-3 py-1 bg-white/5 rounded text-[10px] text-white/80 font-medium">Caixa de Entrada</div>
          <div className="px-3 py-1 rounded text-[10px] text-white/40 font-medium">Contatos</div>
          <div className="px-3 py-1 rounded text-[10px] text-white/40 font-medium">Automações</div>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#7C6FF5] flex items-center justify-center text-[10px] font-bold text-white">L</div>
      </div>

      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-[280px] border-r border-white/5 bg-[#11111A] flex flex-col">
          <div className="p-4 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-white text-sm font-bold">Conversas Ativas</h3>
            <span className="bg-[#7C6FF5] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">12</span>
          </div>
          <div className="flex-1 p-2 flex flex-col gap-1">
            <div className="p-3 bg-white/5 border border-white/5 rounded-xl cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[12px] font-bold text-white">Mariana Costa</span>
                <span className="text-[9px] text-[#4ADE80] font-bold bg-[#4ADE80]/10 px-2 py-0.5 rounded">WhatsApp</span>
              </div>
              <p className="text-[11px] text-white/50 truncate mb-2">Sim, as condições me atendem!</p>
              <div className="flex gap-1">
                <span className="text-[9px] text-white/40 bg-white/5 px-2 py-0.5 rounded">Lead Quente</span>
                <span className="text-[9px] text-white/40 bg-white/5 px-2 py-0.5 rounded">Varejo</span>
              </div>
            </div>
            
            <div className="p-3 hover:bg-white/[0.02] rounded-xl cursor-pointer transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[12px] font-bold text-white">João Pedro</span>
                <span className="text-[9px] text-[#A9A0FF] font-bold bg-[#A9A0FF]/10 px-2 py-0.5 rounded">Instagram</span>
              </div>
              <p className="text-[11px] text-white/50 truncate mb-2">Qual o valor do plano Pro?</p>
              <div className="flex gap-1">
                <span className="text-[9px] text-white/40 bg-white/5 px-2 py-0.5 rounded">Qualificando</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col relative bg-[#0A0A0F]">
          {/* Contact Header */}
          <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#11111A]/50 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[2px]">
                <div className="w-full h-full bg-[#111] rounded-full border-2 border-[#111] overflow-hidden">
                  <img src="https://i.pravatar.cc/150?img=47" alt="User" />
                </div>
              </div>
              <div>
                <h2 className="text-white text-[13px] font-bold">Mariana Costa</h2>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-[10px] text-white/40">Online agora</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[11px] text-white/70 hover:bg-white/10 transition">Ver Perfil CRM</button>
              <button className="px-3 py-1.5 bg-[#7C6FF5] text-white font-medium rounded-lg text-[11px] hover:bg-[#6b5de3] transition">Assumir Chat</button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>

            <div className="self-center px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-2 z-10">
              <span className="text-[9px] text-white/40">Hoje, 10:42</span>
            </div>

            <div className="flex items-end gap-2 z-10">
              <div className="w-7 h-7 rounded-full overflow-hidden shrink-0"><img src="https://i.pravatar.cc/150?img=47" alt="User" /></div>
              <div className="bg-[#1F1F2E] px-4 py-3 rounded-2xl rounded-tl-none max-w-[70%] border border-white/5">
                <p className="text-[12px] text-white/90">Olá, vi o anúncio no Instagram. Vocês atendem empresas do varejo?</p>
              </div>
            </div>

            <div className="self-center my-2 px-3 py-1 bg-[#252538] border border-white/10 rounded-full flex items-center gap-2 z-10">
              <div className="w-1.5 h-1.5 bg-[#7C6FF5] rounded-full animate-pulse"></div>
              <span className="text-[9px] text-white/60">SuperAI identificou a intenção e está respondendo</span>
            </div>

            <div className="flex justify-end gap-2 z-10">
              <div className="bg-[#7C6FF5]/20 border border-[#7C6FF5]/30 px-4 py-3 rounded-2xl rounded-tr-none max-w-[70%]">
                <p className="text-[12px] text-[#A9A0FF]">Olá Mariana! Sim, temos um módulo específico para o varejo que se conecta ao seu ERP. Qual o seu volume médio de atendimentos mensais?</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#7C6FF5] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-[10px]">S</span>
              </div>
            </div>

            <div className="flex items-end gap-2 z-10">
              <div className="w-7 h-7 rounded-full overflow-hidden shrink-0"><img src="https://i.pravatar.cc/150?img=47" alt="User" /></div>
              <div className="bg-[#1F1F2E] px-4 py-3 rounded-2xl rounded-tl-none max-w-[70%] border border-white/5">
                <p className="text-[12px] text-white/90">Aproximadamente 5.000 chamados. As condições me atendem!</p>
              </div>
            </div>

            <div className="self-center mt-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 z-10">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400">💰</span>
              </div>
              <div>
                <p className="text-[11px] font-bold text-green-400">Lead Qualificado (Hot)</p>
                <p className="text-[9px] text-white/50">Handoff automático para a equipe de vendas.</p>
              </div>
            </div>

          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/5 bg-[#11111A] relative z-10">
            <div className="w-full bg-[#1A1A24] border border-white/5 rounded-xl px-4 py-3 flex items-center justify-between opacity-50 cursor-not-allowed">
              <span className="text-[12px] text-white/30">Agente de IA controlando a conversa...</span>
              <button className="text-[#7C6FF5] text-[12px] font-medium">Assumir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      style={{ background: "#05050A" }}
      aria-label="Apresentação"
    >
      {/* Background Effects */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#7C6FF5]/20 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

      <div className="relative z-20 mx-auto w-full max-w-[1200px] px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[12px] font-medium text-white/80">SuperAI Plataforma já disponível</span>
          <ArrowRight size={12} className="text-white/50 ml-1" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-bold text-white tracking-tight leading-[1.05] mb-6 max-w-4xl"
        >
          Automatize o atendimento e <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C6FF5] via-[#A9A0FF] to-[#4ADE80]">
            qualifique leads 24/7
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] md:text-[20px] text-white/50 max-w-2xl leading-relaxed mb-10 font-medium"
        >
          A plataforma definitiva de Agentes de IA conversacionais. Transforme visitantes em clientes pagantes pelo WhatsApp, Instagram e Site — sem aumentar sua equipe.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto"
        >
          <a
            href="#contato"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#7C6FF5] text-white font-bold text-[15px] hover:bg-[#6b5de3] transition-all shadow-[0_0_30px_rgba(124,111,245,0.3)] hover:shadow-[0_0_40px_rgba(124,111,245,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Começar Gratuitamente
            <ArrowRight size={18} />
          </a>
          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-[15px] hover:bg-white/10 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Agendar Demonstração
          </a>
        </motion.div>

        {/* Feature Ticks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-20"
        >
          <div className="flex items-center gap-2 text-[13px] text-white/40 font-medium">
            <MessageCircle size={16} className="text-[#7C6FF5]" /> Omnichannel
          </div>
          <div className="flex items-center gap-2 text-[13px] text-white/40 font-medium">
            <Zap size={16} className="text-[#4ADE80]" /> Setup em minutos
          </div>
          <div className="flex items-center gap-2 text-[13px] text-white/40 font-medium">
            <Users size={16} className="text-[#A9A0FF]" /> Handoff Humano Fluido
          </div>
        </motion.div>

        {/* Huge App Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="w-full relative"
        >
          {/* Decorative glow behind the mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#7C6FF5]/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative mx-auto w-full max-w-[1000px] aspect-[16/10] md:aspect-[16/9] bg-[#11111A] rounded-t-2xl md:rounded-[24px] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden">
            <AppMockup />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
