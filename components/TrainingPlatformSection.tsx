"use client"

// Effects: Dashboard Depth Card · Sidebar Active Indicator · Typing Knowledge Fields · Preview Chat Update
import { motion } from "framer-motion"
import { BookOpen, Mic, Settings, Clock, List, Zap, Users, MessageCircle } from "lucide-react"
import SectionHeader from "./SectionHeader"
import Reveal from "./Reveal"

const SIDEBAR_ITEMS = [
  { icon: <BookOpen size={14} />, label: "Conhecimento",       active: true  },
  { icon: <Mic size={14} />,      label: "Tom de voz",         active: false },
  { icon: <Settings size={14} />, label: "Serviços",           active: false },
  { icon: <Clock size={14} />,    label: "Horários",           active: false },
  { icon: <List size={14} />,     label: "Regras",             active: false },
  { icon: <Zap size={14} />,      label: "Integrações",        active: false },
  { icon: <Users size={14} />,    label: "Atend. humano",      active: false },
]

const KNOWLEDGE_FIELDS = [
  { label: "Como a empresa deve se apresentar?", value: "Somos uma clínica especializada em…" },
  { label: "Quais serviços oferece?",            value: "Avaliação, tratamento, consulta de retorno…" },
  { label: "Quais perguntas fazer antes de agendar?", value: "Nome, telefone e motivo do contato" },
  { label: "Quando chamar um humano?",           value: "Quando o cliente solicitar ou em casos urgentes" },
]

const PREVIEW_CHAT = [
  { from: "client", text: "Qual o horário de atendimento?" },
  { from: "ai",     text: "Atendemos de segunda a sexta, das 8h às 18h. Posso agendar um horário?" },
]

export default function TrainingPlatformSection() {
  return (
    <section
      id="plataforma"
      className="section overflow-hidden"
      style={{ background: "#04050D" }}
      aria-label="Plataforma de treinamento"
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <div className="flex flex-col gap-6 lg:pt-16">
            <SectionHeader
              badge="Plataforma multiempresa"
              title="Cada empresa treina o agente do seu jeito"
              subtitle="Configure serviços, horários, tom de voz, regras, perguntas, documentos e fluxos específicos para cada negócio."
              align="left"
            />
            <Reveal delay={0.25}>
              <p className="text-sm text-[#7D8DB8] leading-relaxed">
                Ideal para operações com várias empresas, unidades ou segmentos diferentes.
              </p>
            </Reveal>
            <ul className="flex flex-col gap-3 mt-2">
              {["Base de conhecimento personalizada","Tom de voz configurável","Regras e fluxos específicos","Preview em tempo real","Múltiplas empresas na mesma plataforma"].map((item, i) => (
                <Reveal key={item} delay={0.1 * i}>
                  <li className="flex items-center gap-3 text-sm text-[#7D8DB8]">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#7C6FF5" }} />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Right — Dashboard */}
          <Reveal y={0} x={40} delay={0.2}>
            <div
              className="glass rounded-3xl overflow-hidden relative"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 8px 32px rgba(0,0,0,0.3)" }}
            >
              {/* Device bar */}
              <div className="flex items-center gap-1.5 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#266BB9]/50" />
                <span className="ml-2 text-[10px] text-[#7D8DB8]">MoltoChat — Treinamento do Agente</span>
              </div>

              <div className="flex min-h-[400px]">
                {/* Sidebar */}
                <div className="w-40 py-3" style={{ borderRight: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                  <p className="px-3 text-[9px] font-bold text-[#7D8DB8] uppercase tracking-wider mb-2">Configurações</p>
                  {SIDEBAR_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 mx-2 px-2 py-2 rounded-lg cursor-pointer relative"
                      style={{ background: item.active ? "rgba(124,111,245,0.12)" : "transparent" }}
                    >
                      {/* Effect: Sidebar Active Indicator */}
                      {item.active && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full" style={{ background: "#7C6FF5" }} />
                      )}
                      <span style={{ color: item.active ? "#A5A0F8" : "#7D8DB8" }}>{item.icon}</span>
                      <span className="text-[10px] font-medium" style={{ color: item.active ? "#A5A0F8" : "#7D8DB8" }}>{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-4 flex flex-col gap-3">
                  <p className="text-[11px] font-bold text-[#E8ECFF]">Base de conhecimento</p>

                  {/* Effect: Typing Knowledge Fields */}
                  {KNOWLEDGE_FIELDS.map((field, i) => (
                    <motion.div
                      key={field.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 * i }}
                      className="rounded-xl p-3"
                      style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
                    >
                      <p className="text-[9px] text-[#7D8DB8] mb-1">{field.label}</p>
                      <p className="text-[10px] text-[#E8ECFF] font-medium">{field.value}</p>
                    </motion.div>
                  ))}

                  {/* Effect: Preview Chat Update */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="rounded-xl overflow-hidden mt-1"
                    style={{ border: "1px solid rgba(124,111,245,0.2)", background: "rgba(124,111,245,0.05)" }}
                  >
                    <div className="px-3 py-1.5 flex items-center gap-1.5" style={{ borderBottom: "1px solid rgba(124,111,245,0.15)" }}>
                      <MessageCircle size={10} className="text-[#A5A0F8]" />
                      <span className="text-[9px] font-semibold text-[#A5A0F8]">Preview do chat</span>
                    </div>
                    <div className="p-3 flex flex-col gap-2">
                      {PREVIEW_CHAT.map((msg, i) => (
                        <div key={i} className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}>
                          <div
                            className="text-[9px] px-2.5 py-1.5 rounded-xl max-w-[85%]"
                            style={{
                              background: msg.from === "client" ? "rgba(124,111,245,0.25)" : "rgba(255,255,255,0.06)",
                              color: "#E8ECFF",
                            }}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
