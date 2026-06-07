"use client"

import type { CSSProperties } from "react"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  Bot,
  Calendar,
  MessageCircle,
  Target,
  Workflow,
  Mail,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Reveal from "./Reveal"
import { WHATSAPP_URL } from "@/lib/constants"

type VisualVariant = "inbox" | "writer" | "workspace" | "assistant" | "email"

interface Feature {
  id: string
  tab: string
  eyebrow: string
  stat: string
  icon: any
  title: string
  description: string
  bullets: string[]
  accent: string
  visual: VisualVariant
}

const SUITE_FEATURES: Feature[] = [
  {
    id: "email",
    tab: "E-mail",
    eyebrow: "E-mail Automático",
    stat: "↓ 80% tempo de resposta",
    icon: Mail,
    title: "Triagem e respostas por e-mail, no automático",
    description:
      "A IA lê a caixa de entrada, responde mensagens rotineiras e encaminha casos complexos para o setor responsável — sem ninguém precisar abrir o cliente.",
    bullets: [
      "Interpreta contexto e urgência de cada mensagem",
      "Gera rascunhos ou envia respostas automáticas",
      "Encaminha orçamentos para a equipe comercial",
      "Reduz o tempo de resposta em até 80%",
    ],
    accent: "#EAB308",
    visual: "email",
  },
  {
    id: "atendimento",
    tab: "Atendimento",
    eyebrow: "Atendimento",
    stat: "3× mais conversas simultâneas",
    icon: MessageCircle,
    title: "O agente mais produtivo para atender clientes",
    description:
      "Responda leads e clientes com contexto, velocidade e uma voz que parece da sua equipe — no WhatsApp, e-mail ou qualquer canal.",
    bullets: [
      "Responde rápido o que importa",
      "Mantém contexto de cada conversa",
      "Escreve com IA no tom da sua marca",
      "Economiza horas da sua equipe toda semana",
    ],
    accent: "#7C6FF5",
    visual: "inbox",
  },
  {
    id: "sdr",
    tab: "SDR",
    eyebrow: "SDR com IA",
    stat: "2× mais leads qualificados",
    icon: Target,
    title: "SDR de IA que qualifica oportunidades reais",
    description:
      "Transforme conversas soltas em reuniões prontas para venda, com critério e timing — sem depender de SDR humano para cada lead.",
    bullets: [
      "Qualifica leads automaticamente",
      "Identifica urgência, perfil e intenção",
      "Faz follow-up sem deixar pontas soltas",
      "Entrega oportunidades prontas ao comercial",
    ],
    accent: "#2F9E75",
    visual: "writer",
  },
  {
    id: "agenda",
    tab: "Agenda",
    eyebrow: "Agendamento automático",
    stat: "↓ 90% no-shows com lembretes",
    icon: Calendar,
    title: "Agendamentos no piloto automático",
    description:
      "Conecte calendário, regras e disponibilidade para marcar reuniões sem fricção — o agente confirma, remarca e lembra o cliente.",
    bullets: [
      "Conecta Google Calendar e calendários da equipe",
      "Encontra horários livres em tempo real",
      "Confirma, remarca e lembra o cliente",
      "Reduz tarefas manuais do time",
    ],
    accent: "#E46F2F",
    visual: "workspace",
  },
  {
    id: "automacoes",
    tab: "Automações",
    eyebrow: "Automações",
    stat: "24/7 sem intervenção humana",
    icon: Workflow,
    title: "IA que funciona dentro da sua operação",
    description:
      "Integre CRM, planilhas, WhatsApp e processos internos para sua agência escalar — sem depender de operações manuais repetitivas.",
    bullets: [
      "Conecta suas ferramentas favoritas",
      "Atualiza dados sem trabalho manual",
      "Executa fluxos de ponta a ponta",
      "Funciona em qualquer canal do negócio",
    ],
    accent: "#00A7B5",
    visual: "assistant",
  },
]

const VISUAL_BACKGROUNDS: Record<VisualVariant, string> = {
  inbox:
    "linear-gradient(90deg, #F4A8B4 0%, #BBA0FF 33%, #8DBEF8 34%, #B9DBF7 100%)",
  writer:
    "linear-gradient(135deg, #9BBF6D 0%, #C7D9AA 26%, #83C7D8 58%, #776BFF 100%)",
  workspace:
    "linear-gradient(135deg, #062719 0%, #244B25 44%, #F1A72E 100%)",
  assistant:
    "linear-gradient(135deg, #A6BF78 0%, #DDE8B8 34%, #C8C0F4 68%, #70D8C6 100%)",
  email:
    "linear-gradient(135deg, #FDE047 0%, #F59E0B 44%, #EA580C 100%)",
}

export default function SuperhumanSuite() {
  const [activeId, setActiveId] = useState("email")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0.1,
      }
    )

    SUITE_FEATURES.forEach((feature) => {
      const el = document.getElementById(feature.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleTabClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -220
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const activeFeature = SUITE_FEATURES.find((f) => f.id === activeId) || SUITE_FEATURES[0]

  return (
    <section id="produto" className="bg-[#F2F2F2] py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="relative z-10 border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          {/* Sticky Header Group */}
          <div className="sticky top-[80px] z-30 bg-[#F8F7F2]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col">
            <div className="flex min-h-[78px] items-center justify-between gap-4 border-b border-[#1A1A1A]/[0.12] px-5 md:px-8">
              <Reveal>
                <h2 className="text-[24px] font-medium leading-tight text-[#22211F] md:text-[31px]">
                  Sua suite de IA
                </h2>
              </Reveal>

              <Reveal delay={0.05}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden h-9 items-center justify-center border border-[#7C57E8]/40 px-4 text-[10px] font-semibold uppercase text-[#7C57E8] transition-colors hover:bg-[#7C57E8] hover:text-white sm:inline-flex"
                >
                  Conhecer suite
                </a>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 border-b border-[#1A1A1A]/[0.15] md:grid-cols-5">
              {SUITE_FEATURES.map((feature, index) => {
                const Icon = feature.icon
                const isActive = activeId === feature.id
                return (
                  <button
                    key={feature.id}
                    onClick={() => handleTabClick(feature.id)}
                    className={"relative flex h-12 items-center justify-center gap-2.5 border-[#1A1A1A]/[0.15] text-[13px] font-medium text-[#22211F] transition-colors hover:bg-[#F0EFEB]/50 " +
                      (index !== SUITE_FEATURES.length - 1 ? "md:border-r " : " ") +
                      (index % 2 === 0 && index !== 4 ? "border-r md:border-r-0 " : " ") +
                      (index < 4 ? "border-b md:border-b-0 " : " ") +
                      (index === 4 ? "col-span-2 md:col-span-1" : "")
                    }
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSuiteTab"
                        className="absolute inset-0 bg-white shadow-sm z-0"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon size={14} color={feature.accent} strokeWidth={2.4} />
                      {feature.tab}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Suite Container with 2 columns on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] relative">
            
            {/* Left Column: Text Articles */}
            <div className="flex flex-col">
              {SUITE_FEATURES.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={feature.id} className="relative">
                    {index > 0 && (
                      <div className="h-4 border-b border-[#1A1A1A]/[0.08] bg-[#EBEBEB]" />
                    )}
                    <article
                      id={feature.id}
                      className={"scroll-mt-60 bg-[#F8F7F2] flex flex-col justify-between px-5 py-12 md:px-6 md:py-24 lg:px-8 " +
                        (index !== SUITE_FEATURES.length - 1 ? "border-b border-[#1A1A1A]/[0.12]" : "")
                      }
                    >
                      <div>
                        <Reveal delay={0.04}>
                          <div className="mb-6 flex items-center justify-between gap-3 flex-wrap">
                            <div className="flex items-center gap-2.5 text-[12px] font-medium text-[#22211F]/[0.65]">
                              <Icon size={14} color={feature.accent} strokeWidth={2.5} />
                              <span>{feature.eyebrow}</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded" style={{ background: feature.accent + "18", color: feature.accent }}>
                              {feature.stat}
                            </span>
                          </div>
                        </Reveal>

                        <Reveal delay={0.08}>
                          <h3 className="max-w-[540px] text-[28px] font-medium leading-[1.1] text-[#171717] md:text-[36px]">
                            {feature.title}
                          </h3>
                        </Reveal>

                        <Reveal delay={0.12}>
                          <p className="mt-4 max-w-[540px] text-[14px] leading-relaxed text-[#1A1A1A]/70 md:text-[15px]">
                            {feature.description}
                          </p>
                        </Reveal>

                        <Reveal delay={0.16}>
                          <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#6E4BD8] transition-opacity hover:opacity-70"
                          >
                            Falar com especialista
                            <ArrowRight size={13} />
                          </a>
                        </Reveal>
                      </div>

                      <ul className="mt-10 space-y-3.5">
                        {feature.bullets.map((bullet, bulletIndex) => (
                          <Reveal key={bullet} delay={0.18 + bulletIndex * 0.04}>
                            <li className="flex items-start gap-3.5 text-[13px] font-medium leading-snug text-[#1A1A1A]/90 md:text-[14px]">
                              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#171717]" />
                              <span>{bullet}</span>
                            </li>
                          </Reveal>
                        ))}
                      </ul>

                      {/* Mobile Inline Visual */}
                      <div className="block md:hidden mt-8 w-full">
                        <SuiteVisual
                          variant={feature.visual}
                          accent={feature.accent}
                          index={index}
                        />
                      </div>
                    </article>
                  </div>
                )
              })}
            </div>

            {/* Right Column: Sticky Mockup Window (Desktop Only) */}
            <div className="hidden md:block relative border-l border-[#1A1A1A]/[0.12]">
              <div className="sticky top-[240px] p-6 lg:p-10 h-[520px] lg:h-[580px] w-full flex items-center justify-center">
                <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#1A1A1A]/[0.15]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature.id}
                      initial={{ opacity: 0, scale: 0.96, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <SuiteVisual
                        variant={activeFeature.visual}
                        accent={activeFeature.accent}
                        index={SUITE_FEATURES.indexOf(activeFeature)}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function SuiteVisual({
  variant,
  accent,
  index,
}: {
  variant: VisualVariant
  accent: string
  index: number
}) {
  const style = {
    "--suite-accent": accent,
    background: VISUAL_BACKGROUNDS[variant],
  } as CSSProperties

  return (
    <div
      className="relative w-full h-full min-h-[340px] md:min-h-full overflow-hidden flex items-center justify-center p-4 md:p-6 lg:p-8"
      style={style}
    >
      <div className="absolute inset-0 opacity-[0.22] mix-blend-overlay bg-[linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[length:24px_24px]" />
      <div className="absolute inset-y-0 left-[34%] w-px bg-white/[0.45]" />
      <div className="absolute inset-y-0 right-[17%] w-px bg-white/[0.35]" />
      
      <div className="absolute bottom-3 left-3 z-20 flex h-5 w-5 items-center justify-center border border-[#1A1A1A]/[0.35] bg-white/25 text-[10px] text-[#1A1A1A]/70 font-bold">
        {index + 1}
      </div>

      <div className="w-full h-full max-w-[420px] max-h-[380px] flex items-center justify-center relative z-10">
        {variant === "inbox" && <InboxMockup />}
        {variant === "writer" && <WriterMockup />}
        {variant === "workspace" && <WorkspaceMockup />}
        {variant === "assistant" && <AssistantMockup />}
        {variant === "email" && <EmailMockup />}
      </div>
    </div>
  )
}

// ── Mockup Animado Atendimento (Inbox) ─────────────────────────────────────────────────────────
function InboxMockup() {
  const [messages, setMessages] = useState<Array<{ id: number; sender: "user" | "ai"; text: string }>>([])
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let active = true
    const run = async () => {
      while (active) {
        setMessages([])
        setIsTyping(false)
        await new Promise((r) => setTimeout(r, 800))
        if (!active) break
        setMessages([{ id: 1, sender: "user", text: "Olá! Vocês integram com o HubSpot CRM?" }])
        await new Promise((r) => setTimeout(r, 1200))
        if (!active) break
        setIsTyping(true)
        await new Promise((r) => setTimeout(r, 1800))
        if (!active) break
        setIsTyping(false)
        setMessages((prev) => [
          ...prev,
          { id: 2, sender: "ai", text: "Olá! Sim, integramos 100% nativo. Sincronizamos leads, histórico e status em tempo real." },
        ])
        await new Promise((r) => setTimeout(r, 2000))
        if (!active) break
        setMessages((prev) => [
          ...prev,
          { id: 3, sender: "user", text: "Excelente! Como funciona o handoff para vendedores?" },
        ])
        await new Promise((r) => setTimeout(r, 1200))
        if (!active) break
        setIsTyping(true)
        await new Promise((r) => setTimeout(r, 1800))
        if (!active) break
        setIsTyping(false)
        setMessages((prev) => [
          ...prev,
          { id: 4, sender: "ai", text: "Assim que a IA qualifica o lead, ela agenda a reunião e transfere a conversa no WhatsApp para o vendedor." },
        ])
        await new Promise((r) => setTimeout(r, 4500))
      }
    }
    run()
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="w-full h-full bg-[#0D0D14]/95 rounded-xl border border-black/10 overflow-hidden flex shadow-2xl text-left">
      {/* Sidebar */}
      <div className="w-[30%] border-r border-white/5 flex flex-col bg-[#11111A]/50">
        <div className="p-3 border-b border-white/5">
          <div className="bg-white/5 rounded-md px-2 py-1 text-[9px] text-white/40 flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Buscar...
          </div>
        </div>
        <div className="flex-1 overflow-hidden p-2 flex flex-col gap-1.5">
          <div className="p-2 bg-[#7C6FF5]/10 border border-[#7C6FF5]/20 rounded-lg relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7C6FF5]"></div>
            <div className="flex justify-between items-center mb-0.5">
              <span className="text-[10px] font-bold text-white">Marcos Silva</span>
              <span className="text-[8px] text-[#4ADE80] font-semibold bg-[#4ADE80]/10 px-1 py-0.2 rounded">WPP</span>
            </div>
            <p className="text-[9px] text-[#7C6FF5] truncate">Falar com especialista</p>
          </div>
          <div className="p-2 hover:bg-white/5 rounded-lg transition-colors border border-transparent">
            <div className="flex justify-between items-center mb-0.5">
              <span className="text-[10px] font-bold text-white/80">Ana Souza</span>
              <span className="text-[8px] text-[#A9A0FF] font-semibold bg-[#A9A0FF]/10 px-1 py-0.2 rounded">IG</span>
            </div>
            <p className="text-[9px] text-white/40 truncate">Qual o preço do plano?</p>
          </div>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#05050A]">
        <div className="p-3 border-b border-white/5 flex justify-between items-center bg-[#0D0D14]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 p-[1.5px]">
              <div className="w-full h-full bg-[#111] rounded-full border border-[#111] overflow-hidden flex items-center justify-center text-[8px] font-bold text-white">MS</div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-white">Marcos Silva</p>
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-[8px] text-white/40">Online</p>
              </div>
            </div>
          </div>
          <div className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[8px] font-bold rounded border border-green-500/20 flex items-center gap-1">
            🔥 Lead Quente
          </div>
        </div>
        
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-y-auto">
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={"max-w-[85%] rounded-lg p-2 text-[9.5px] leading-snug " +
                (m.sender === "user"
                  ? "self-start bg-[#1F1F2E] text-white/90 border border-white/5"
                  : "self-end bg-gradient-to-br from-[#7C6FF5]/20 to-[#5a4cdb]/20 border border-[#7C6FF5]/30 text-white"
                )
              }
            >
              <p>{m.text}</p>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="self-end bg-gradient-to-br from-[#7C6FF5]/10 to-[#5a4cdb]/10 border border-[#7C6FF5]/20 p-2 rounded-lg flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 bg-[#A9A0FF] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
              <span className="w-1.5 h-1.5 bg-[#A9A0FF] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
              <span className="w-1.5 h-1.5 bg-[#A9A0FF] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Mockup Animado E-mail (EmailMockup) ─────────────────────────────────────────────────────────
function EmailMockup() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 4)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full h-full bg-[#0D0D14]/95 rounded-xl border border-black/10 overflow-hidden flex flex-col shadow-2xl text-left bg-gradient-to-b from-[#0D0D14] to-[#05050A]">
      <div className="flex h-9 items-center justify-between border-b border-white/5 px-4 text-[9px] font-semibold text-white/50 bg-[#11111A]">
        <div className="flex items-center gap-1.5 bg-[#1A1A24]/40 px-2 py-1 rounded">
          <Mail size={10} className="text-[#EAB308]" />
          <span>Caixa de Entrada</span>
        </div>
        <span className="bg-[#EAB308]/15 text-[#EAB308] px-1.5 py-0.2 rounded text-[8px] font-bold">1 Novo</span>
      </div>

      <div className="flex-1 p-3 flex flex-col gap-2 bg-[#05050A]">
        {/* Email Items */}
        <div className={"p-2.5 rounded-lg border transition-all duration-500 relative overflow-hidden " +
          (step >= 1 ? "bg-white/5 border-white/10" : "bg-[#11111A]/30 border-white/5")
        }>
          {step === 0 && (
            <div className="absolute top-2 right-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></span>
              <span className="text-[7px] text-blue-400 font-bold">Novo</span>
            </div>
          )}
          <div className="flex justify-between items-start mb-1">
            <span className="text-[10px] font-bold text-white">Carlos Silva - CEO TechMed</span>
            <span className="text-[8px] text-white/40">12:35</span>
          </div>
          <p className="text-[9px] font-bold text-white/80 mb-1">Solicitação de Orçamento - Clínica</p>
          <p className="text-[8px] text-white/40 line-clamp-1">Preciso de um sistema para automatizar o agendamento de consultas...</p>
          
          {/* AI Status */}
          <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-white/5">
            <span className="text-[8px] text-white/40">Status da IA</span>
            <span className={"text-[8px] px-1.5 py-0.5 rounded font-bold uppercase transition-all duration-300 " +
              (step === 0 ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
               step === 1 ? "bg-purple-500/10 text-purple-400 border border-purple-500/20 animate-pulse" :
               "bg-green-500/10 text-green-400 border border-green-500/20")
            }>
              {step === 0 ? "Pendente" : step === 1 ? "Lendo e Interpretando..." : "Respondido por IA"}
            </span>
          </div>
        </div>

        {/* AI Response Preview Card */}
        <div className="h-[140px]">
          <AnimatePresence mode="wait">
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="bg-gradient-to-br from-[#EAB308]/5 to-transparent border border-[#EAB308]/20 rounded-lg p-3 relative overflow-hidden"
              >
                <div className="flex items-center gap-1.5 mb-1.5 text-[8.5px] font-semibold text-[#EAB308]">
                  <Bot size={10} />
                  <span>Resposta Gerada pela IA</span>
                </div>
                <div className="space-y-1.5 text-[8px] text-white/75 font-mono bg-black/40 p-2 rounded border border-white/5 leading-normal">
                  <p><span className="text-white/40">Para:</span> carlos@techmed.com.br</p>
                  <p>Olá Carlos, recebemos seu e-mail. Nossa solução de IA atende perfeitamente clínicas como a TechMed. Aqui está o link para agendarmos uma demonstração: superai.com.br/agenda</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// ── Mockup Animado SDR (WriterMockup) ──────────────────────────────────────────────────────────
function WriterMockup() {
  const [score, setScore] = useState(30)
  const [step, setStep] = useState(0)

  useEffect(() => {
    let active = true
    const run = async () => {
      while (active) {
        setScore(30)
        setStep(0)
        await new Promise((r) => setTimeout(r, 800))
        if (!active) break
        setScore(55)
        setStep(1)
        await new Promise((r) => setTimeout(r, 1200))
        if (!active) break
        setScore(78)
        setStep(2)
        await new Promise((r) => setTimeout(r, 1200))
        if (!active) break
        setScore(95)
        setStep(3)
        await new Promise((r) => setTimeout(r, 4500))
      }
    }
    run()
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="w-full h-full bg-[#0D0D14]/95 rounded-xl border border-black/10 overflow-hidden flex flex-col p-4 shadow-2xl text-left bg-gradient-to-b from-[#0D0D14] to-[#05050A]">
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#2F9E75]/20 flex items-center justify-center text-[#2F9E75] font-bold text-xs">S</div>
          <div>
            <h4 className="text-[11px] font-bold text-white">SDR de IA Qualificador</h4>
            <p className="text-[8px] text-white/40">Análise cognitiva do lead</p>
          </div>
        </div>
        <div className="bg-[#2F9E75]/10 border border-[#2F9E75]/20 text-[#2F9E75] text-[8px] font-bold px-2 py-0.5 rounded">
          Ativo 24/7
        </div>
      </div>

      <div className="grid grid-cols-[1fr_1.1fr] gap-3 flex-1 overflow-hidden">
        {/* Chat log / Transcript */}
        <div className="bg-black/30 border border-white/5 rounded-lg p-2 flex flex-col gap-2 overflow-y-auto">
          <p className="text-[7.5px] uppercase font-bold text-white/30 tracking-wider">Transcrição do Chat</p>
          <div className="space-y-2 leading-relaxed">
            <p className="text-[8px] text-white/50"><span className="text-[#A9A0FF] font-semibold">Lead:</span> Oi, meu nome é Roberta e sou da clínica OdontoMais.</p>
            {step >= 1 && <p className="text-[8px] text-white/50"><span className="text-[#A9A0FF] font-semibold">Lead:</span> Somos 12 médicos atendendo cerca de 400 pacientes/mês.</p>}
            {step >= 2 && <p className="text-[8px] text-white/50"><span className="text-[#A9A0FF] font-semibold">Lead:</span> O no-show dos pacientes tem prejudicado nossa verba.</p>}
            {step >= 3 && <p className="text-[8px] text-white/50"><span className="text-[#A9A0FF] font-semibold">Lead:</span> Temos até uns R$ 1.500/mês para investir nisso.</p>}
          </div>
        </div>

        {/* CRM Leads Profile */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-bold text-white">Perfil do Lead</span>
              <span className={"text-[9px] font-extrabold px-1.5 py-0.5 rounded transition-all duration-300 " +
                (score >= 80 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(74,222,128,0.15)]" : "bg-white/5 text-white/50")
              }>
                Score: {score}
              </span>
            </div>
            
            <div className="space-y-2 text-[8px]">
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-white/40 font-medium">Clínica</span>
                <span className={"font-semibold text-white transition-opacity " + (step >= 1 ? "opacity-100" : "opacity-20")}>OdontoMais</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-white/40 font-medium">Segmento</span>
                <span className={"font-semibold text-white transition-opacity " + (step >= 1 ? "opacity-100" : "opacity-20")}>Clínica Médica</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-white/40 font-medium">Dor</span>
                <span className={"font-semibold text-red-400 transition-opacity " + (step >= 2 ? "opacity-100" : "opacity-20")}>Absenteísmo (No-shows)</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-white/40 font-medium">Verba</span>
                <span className={"font-semibold text-white transition-opacity " + (step >= 3 ? "opacity-100" : "opacity-20")}>R$ 1.500/mês</span>
              </div>
            </div>
          </div>

          <div className="h-[28px]">
            <AnimatePresence>
              {step >= 3 && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-[#2F9E75]/10 border border-[#2F9E75]/30 p-1.5 rounded text-center text-[7.5px] text-emerald-400 font-bold flex items-center justify-center gap-1"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  Lead Qualificado p/ Vendas
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Mockup Animado Agenda (WorkspaceMockup) ──────────────────────────────────────────────────────────
function WorkspaceMockup() {
  const [clicked, setClicked] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    let active = true
    const run = async () => {
      while (active) {
        setClicked(false)
        setConfirmed(false)
        await new Promise((r) => setTimeout(r, 1200))
        if (!active) break
        setClicked(true)
        await new Promise((r) => setTimeout(r, 1000))
        if (!active) break
        setConfirmed(true)
        await new Promise((r) => setTimeout(r, 4500))
      }
    }
    run()
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="w-full h-full bg-[#0D0D14]/95 rounded-xl border border-black/10 overflow-hidden flex flex-col p-4 shadow-2xl text-left bg-gradient-to-b from-[#0D0D14] to-[#05050A]">
      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
        <h4 className="text-[11px] font-bold text-white">Agendamento Automático</h4>
        <span className="text-[8px] bg-[#E46F2F]/10 border border-[#E46F2F]/20 text-[#E46F2F] font-bold px-1.5 py-0.5 rounded">
          Calendário Conectado
        </span>
      </div>

      <div className="grid grid-cols-[1.1fr_1fr] gap-3 flex-1 overflow-hidden">
        {/* Calendar Grid */}
        <div className="bg-black/30 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[7px] text-white/40 mb-2">
            <span className="font-bold text-white/70">Junho 2026</span>
            <div className="flex gap-1 font-bold">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[7px]">
            {["D", "S", "T", "Q", "Q", "S", "S"].map((d) => (
              <span key={d} className="text-white/30 font-bold">{d}</span>
            ))}
            {Array.from({ length: 28 }).map((_, i) => {
              const day = i + 1
              const isAvailable = day === 10 || day === 11 || day === 12
              return (
                <div
                  key={i}
                  className={"p-1 rounded flex items-center justify-center font-semibold " +
                    (day === 10 && clicked
                      ? "bg-[#E46F2F] text-white scale-110 shadow-[0_0_8px_rgba(228,111,47,0.4)] transition-all duration-300"
                      : isAvailable
                      ? "bg-[#E46F2F]/10 text-[#E46F2F] border border-[#E46F2F]/20"
                      : "text-white/20")
                  }
                >
                  {day}
                </div>
              )
            })}
          </div>
          <div className="text-[7.5px] text-white/40 pt-1.5 border-t border-white/5 flex justify-between items-center">
            <span>Fuso Horário</span>
            <span className="text-white/60">São Paulo (GMT-3)</span>
          </div>
        </div>

        {/* Confirmation Status */}
        <div className="flex flex-col justify-between">
          <div className="bg-white/5 border border-white/10 rounded-lg p-2">
            <p className="text-[7px] font-bold text-white/30 uppercase tracking-wider mb-2">Horários Livres</p>
            <div className="space-y-1.5">
              <div className={"p-1.5 rounded text-[8px] font-semibold text-center border transition-all duration-300 " +
                (clicked ? "bg-[#E46F2F]/10 border-[#E46F2F]/30 text-[#E46F2F]" : "bg-white/5 border-transparent text-white/70")
              }>
                10:00 - Quarta, 10
              </div>
              <div className="p-1.5 rounded text-[8px] font-semibold text-center bg-white/5 border border-transparent text-white/70">
                14:00 - Quinta, 11
              </div>
            </div>
          </div>

          <div className="h-[65px]">
            <AnimatePresence>
              {confirmed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 5 }}
                  className="bg-green-500/10 border border-green-500/20 text-green-400 p-2 rounded-lg leading-normal"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/20 flex items-center justify-center"><span className="text-[8px] font-bold">✓</span></div>
                    <span className="text-[8px] font-bold uppercase tracking-wider">Marcado!</span>
                  </div>
                  <p className="text-[7px] text-white/70">
                    Reunião confirmada no Google Meet. Notificação via WhatsApp enviada ao lead.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Mockup Animado Automações (AssistantMockup) ──────────────────────────────────────────────────────────
function AssistantMockup() {
  const [activeNode, setActiveNode] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((n) => (n + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full bg-[#0D0D14]/95 rounded-xl border border-black/10 overflow-hidden flex flex-col p-4 shadow-2xl relative bg-gradient-to-b from-[#0D0D14] to-[#05050A]">
      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
        <h4 className="text-[11px] font-bold text-white">Editor de Fluxos de IA</h4>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
          <span className="text-[8px] text-white/40">Visualizador de Ações</span>
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden bg-[#07070B] rounded-lg border border-white/5 p-4 flex flex-col items-center justify-center gap-5">
        {/* Node Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

        {/* Trigger Node */}
        <div className={"z-10 w-[180px] rounded-lg border p-2 flex items-center gap-2 transition-all duration-300 bg-[#11111A]/90 backdrop-blur " +
          (activeNode === 0 ? "border-[#00A7B5] shadow-[0_0_12px_rgba(0,167,181,0.25)] bg-[#00A7B5]/5" : "border-white/10")
        }>
          <div className="w-5 h-5 rounded-md bg-[#00A7B5]/20 flex items-center justify-center text-[#00A7B5]">
            <MessageCircle size={10} />
          </div>
          <div className="text-left">
            <span className="text-[8px] font-bold text-white block">Gatilho WhatsApp</span>
            <span className="text-[6.5px] text-white/40">Mensagem recebida</span>
          </div>
        </div>

        {/* Connection Line 1 */}
        <div className="h-4 w-px border-l border-dashed border-white/20 relative">
          <div className={"absolute top-0 bottom-0 left-[-1px] w-[2px] bg-[#00A7B5] transition-all duration-1000 " +
            (activeNode === 1 ? "h-full opacity-100" : "h-0 opacity-0")
          } />
        </div>

        {/* AI Agent Node */}
        <div className={"z-10 w-[180px] rounded-lg border p-2 flex items-center gap-2 transition-all duration-300 bg-[#11111A]/90 backdrop-blur " +
          (activeNode === 1 || activeNode === 2 ? "border-[#7C6FF5] shadow-[0_0_12px_rgba(124,111,245,0.25)] bg-[#7C6FF5]/5" : "border-white/10")
        }>
          <div className="w-5 h-5 rounded-md bg-[#7C6FF5]/20 flex items-center justify-center text-[#7C6FF5]">
            <Bot size={10} />
          </div>
          <div className="text-left">
            <span className="text-[8px] font-bold text-white block">SDR de IA (Qualificador)</span>
            <span className="text-[6.5px] text-white/40">Extraindo dados e score</span>
          </div>
        </div>

        {/* Router Split Line */}
        <div className="h-4 w-px border-l border-dashed border-white/20 relative">
          <div className={"absolute top-0 bottom-0 left-[-1px] w-[2px] bg-[#7C6FF5] transition-all duration-1000 " +
            (activeNode === 2 ? "h-full opacity-100" : "h-0 opacity-0")
          } />
        </div>

        {/* Split Action Nodes */}
        <div className="flex gap-4">
          <div className={"z-10 w-[110px] rounded-lg border p-1.5 flex items-center gap-1.5 transition-all duration-300 bg-[#11111A]/90 backdrop-blur " +
            (activeNode === 3 ? "border-[#E46F2F] shadow-[0_0_10px_rgba(228,111,47,0.2)] bg-[#E46F2F]/5" : "border-white/10")
          }>
            <div className="w-4 h-4 rounded bg-[#E46F2F]/20 flex items-center justify-center text-[#E46F2F]">
              <Calendar size={8} />
            </div>
            <div className="text-left">
              <span className="text-[7.5px] font-bold text-white block">Marcar Reunião</span>
              <span className="text-[6px] text-white/40">Agenda Conectada</span>
            </div>
          </div>

          <div className={"z-10 w-[110px] rounded-lg border p-1.5 flex items-center gap-1.5 transition-all duration-300 bg-[#11111A]/90 backdrop-blur " +
            (activeNode === 4 ? "border-[#2F9E75] shadow-[0_0_10px_rgba(47,158,117,0.2)] bg-[#2F9E75]/5" : "border-white/10")
          }>
            <div className="w-4 h-4 rounded bg-[#2F9E75]/20 flex items-center justify-center text-[#2F9E75]">
              <Target size={8} />
            </div>
            <div className="text-left">
              <span className="text-[7.5px] font-bold text-white block">Atualizar CRM</span>
              <span className="text-[6px] text-white/40">HubSpot/Salesforce</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
