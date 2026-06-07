"use client"

import type { CSSProperties } from "react"
import {
  ArrowRight,
  Bot,
  Calendar,
  MessageCircle,
  Target,
  Workflow,
  Mail,
} from "lucide-react"
import Reveal from "./Reveal"
import { WHATSAPP_URL } from "@/lib/constants"

type VisualVariant = "inbox" | "writer" | "workspace" | "assistant" | "email"

const SUITE_FEATURES = [
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
    visual: "email" as VisualVariant,
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
    visual: "inbox" as VisualVariant,
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
    visual: "writer" as VisualVariant,
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
    visual: "workspace" as VisualVariant,
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
    visual: "assistant" as VisualVariant,
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
                  href="#contato"
                  className="hidden h-9 items-center justify-center border border-[#7C57E8]/40 px-4 text-[10px] font-semibold uppercase text-[#7C57E8] transition-colors hover:bg-[#7C57E8] hover:text-white sm:inline-flex"
                >
                  Conhecer suite
                </a>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 border-b border-[#1A1A1A]/[0.15] md:grid-cols-5">
              {SUITE_FEATURES.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <a
                    key={feature.id}
                    href={`#${feature.id}`}
                    className={`flex h-12 items-center justify-center gap-2.5 border-[#1A1A1A]/[0.15] text-[13px] font-medium text-[#22211F] transition-colors hover:bg-white ${
                      index !== SUITE_FEATURES.length - 1 ? "md:border-r" : ""
                    } ${index % 2 === 0 && index !== 4 ? "border-r md:border-r-0" : ""} ${
                      index < 4 ? "border-b md:border-b-0" : ""
                    } ${index === 4 ? "col-span-2 md:col-span-1" : ""} ${index === 0 ? "bg-white" : "bg-transparent hover:bg-[#F0EFEB]"}`}
                  >
                    <Icon size={14} color={feature.accent} strokeWidth={2.4} />
                    {feature.tab}
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            {SUITE_FEATURES.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={feature.id}>
                  {index > 0 && (
                    <div className="h-4 border-b border-[#1A1A1A]/[0.08] bg-[#EBEBEB]" />
                  )}
                  <article
                    id={feature.id}
                    className={`grid min-h-[430px] scroll-mt-24 bg-[#F8F7F2] md:grid-cols-[1fr_1.08fr] ${
                      index !== SUITE_FEATURES.length - 1
                        ? "border-b border-[#1A1A1A]/[0.12]"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col justify-between px-5 py-9 md:px-6 md:py-12 lg:px-8">
                      <div>
                        <Reveal delay={0.04}>
                          <div className="mb-6 flex items-center justify-between gap-3 flex-wrap">
                            <div className="flex items-center gap-2.5 text-[12px] font-medium text-[#22211F]/[0.65]">
                              <Icon size={14} color={feature.accent} strokeWidth={2.5} />
                              <span>{feature.eyebrow}</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1" style={{ background: `${feature.accent}18`, color: feature.accent }}>
                              {feature.stat}
                            </span>
                          </div>
                        </Reveal>

                        <Reveal delay={0.08}>
                          <h3 className="max-w-[540px] text-[31px] font-medium leading-[1.02] text-[#171717] md:text-[39px]">
                            {feature.title}
                          </h3>
                        </Reveal>

                        <Reveal delay={0.12}>
                          <p className="mt-4 max-w-[540px] text-[14px] leading-relaxed text-[#1A1A1A]/60 md:text-[15px]">
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

                        <ul className="mt-11 space-y-3.5">
                          {feature.bullets.map((bullet, bulletIndex) => (
                            <Reveal key={bullet} delay={0.18 + bulletIndex * 0.04}>
                              <li className="flex items-start gap-3.5 text-[13px] font-medium leading-snug text-[#1A1A1A]/90 md:text-[14px]">
                                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#171717]" />
                                <span>{bullet}</span>
                              </li>
                            </Reveal>
                          ))}
                        </ul>
                      </div>

                      <SuiteVisual
                        variant={feature.visual}
                        accent={feature.accent}
                        index={index}
                      />
                    </article>
                  </div>
                )
              })}
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
      className="relative min-h-[360px] overflow-hidden border-t border-[#1A1A1A]/[0.15] md:min-h-full md:border-l md:border-t-0"
      style={style}
    >
      <div className="absolute inset-0 opacity-[0.22] mix-blend-overlay bg-[linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[length:24px_24px]" />
      <div className="absolute inset-y-0 left-[34%] w-px bg-white/[0.45]" />
      <div className="absolute inset-y-0 right-[17%] w-px bg-white/[0.35]" />
      <div className="absolute bottom-3 left-3 z-20 flex h-5 w-5 items-center justify-center border border-[#1A1A1A]/[0.35] bg-white/25 text-[10px] text-[#1A1A1A]/70">
        {index + 1}
      </div>

      {variant === "inbox" && <InboxMockup />}
      {variant === "writer" && <WriterMockup />}
      {variant === "workspace" && <WorkspaceMockup />}
      {variant === "assistant" && <AssistantMockup />}
      {variant === "email" && <EmailMockup />}
    </div>
  )
}

function InboxMockup() {
  return (
    <>
      <div className="absolute left-[9%] top-[13%] h-[78%] w-[40%] rounded-[50%] border border-white/60" />
      <div className="absolute right-[6%] top-[18%] w-[78%] max-w-[390px] border border-[#1A1A1A]/[0.16] bg-white shadow-[0_18px_42px_rgba(16,24,40,0.16)]">
        <div className="flex h-10 items-center gap-5 border-b border-[#1A1A1A]/10 px-5 text-[10px] font-semibold uppercase text-[#1A1A1A]/[0.65]">
          <span>Inbox</span>
          <span>IA</span>
          <span>Follow-up</span>
          <span>Venda</span>
        </div>
        <div className="space-y-3 p-5">
          {[
            ["Lead quente", "Responder agora", "#F4A8B4"],
            ["Demo marcada", "Confirmar horario", "#91CFF1"],
            ["Cliente atual", "Enviar proposta", "#D2B8FF"],
            ["Suporte", "Escalar humano", "#F0C777"],
          ].map(([label, action, color]) => (
            <div
              key={label}
              className="grid grid-cols-[94px_1fr] items-center gap-4 border-b border-[#1A1A1A]/[0.06] pb-3 last:border-0 last:pb-0"
            >
              <span
                className="h-4 w-fit px-2 text-[8px] font-bold uppercase leading-4 text-[#1A1A1A]"
                style={{ backgroundColor: color }}
              >
                {label}
              </span>
              <span className="truncate text-[11px] text-[#1A1A1A]/70">
                {action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function WriterMockup() {
  return (
    <>
      <div className="absolute right-0 top-0 h-full w-[20%] bg-[#665CFE]" />
      <div className="absolute right-4 top-[24%] z-20 grid w-9 gap-2.5 bg-white p-2 shadow-[0_12px_24px_rgba(0,0,0,0.16)]">
        {[Bot, Target, Calendar, MessageCircle].map((Icon, index) => (
          <div
            key={index}
            className="flex h-7 w-5 items-center justify-center bg-[#F5F4EF] text-[#1A1A1A]/[0.65]"
          >
            <Icon size={12} />
          </div>
        ))}
      </div>
      <div className="absolute left-[8%] top-[24%] w-[78%] max-w-[390px] border border-[#1A1A1A]/[0.12] bg-white shadow-[0_18px_40px_rgba(16,24,40,0.16)]">
        <div className="flex h-9 items-center gap-2 border-b border-[#1A1A1A]/[0.08] px-4">
          <span className="h-2 w-2 rounded-full bg-[#FFB8A2]" />
          <span className="h-2 w-2 rounded-full bg-[#F0D26E]" />
          <span className="h-2 w-2 rounded-full bg-[#82CFA6]" />
          <span className="ml-auto text-[9px] font-semibold text-[#1A1A1A]/50">
            resposta.ai
          </span>
        </div>
        <div className="p-6">
          <p className="text-[15px] font-semibold leading-relaxed text-[#171717]">
            Obrigado pelo contato. Posso te mostrar dois caminhos para reduzir o
            tempo de atendimento ainda esta semana.
          </p>
          <div className="mt-5 space-y-2">
            <div className="h-2 w-11/12 bg-[#1A1A1A]/[0.08]" />
            <div className="h-2 w-7/12 bg-[#1A1A1A]/[0.08]" />
          </div>
        </div>
      </div>
    </>
  )
}

function WorkspaceMockup() {
  return (
    <>
      <div className="absolute bottom-0 left-0 h-[34%] w-[22%] bg-[#F6A63B]" />
      <div className="absolute left-[12%] top-[15%] w-[40%] border border-[#1A1A1A]/[0.12] bg-white p-5 shadow-[0_16px_34px_rgba(0,0,0,0.22)]">
        <div className="mb-5 text-[12px] font-semibold text-[#171717]">
          Pipeline
        </div>
        {["Novo lead", "Qualificado", "Proposta", "Fechado"].map(
          (item, index) => (
            <div key={item} className="mb-4 flex items-center gap-3 last:mb-0">
              <span className="flex h-5 w-5 items-center justify-center bg-[#F5F4EF] text-[9px] font-bold text-[#171717]/60">
                {index + 1}
              </span>
              <span className="text-[11px] font-medium text-[#171717]/75">
                {item}
              </span>
            </div>
          )
        )}
      </div>
      <div className="absolute right-[8%] top-[19%] w-[49%] border border-[#1A1A1A]/[0.12] bg-[#FBFAF6] p-5 shadow-[0_18px_38px_rgba(0,0,0,0.24)]">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-[#171717]">
            Agenda hoje
          </span>
          <span className="bg-[#F3D25E] px-2 py-1 text-[8px] font-bold uppercase text-[#171717]">
            3 demos
          </span>
        </div>
        {["10:30 Diagnostico", "14:00 Demo comercial", "16:15 Follow-up"].map(
          (item) => (
            <div
              key={item}
              className="mb-3 border-l-2 border-[var(--suite-accent)] bg-white px-3 py-2 text-[10px] font-medium text-[#171717]/75 last:mb-0"
            >
              {item}
            </div>
          )
        )}
      </div>
    </>
  )
}

function AssistantMockup() {
  return (
    <>
      <div className="absolute left-[8%] top-[14%] h-[74%] w-[84%] border border-white/[0.45] bg-white/[0.35] backdrop-blur-[2px]" />
      <div className="absolute left-[14%] top-[21%] h-[56%] w-[72%] border border-[#1A1A1A]/10 bg-white/80 shadow-[0_18px_36px_rgba(16,24,40,0.14)]">
        <div className="flex h-9 items-center border-b border-[#1A1A1A]/[0.08] px-4">
          <div className="h-2.5 w-28 bg-[#1A1A1A]/10" />
          <div className="ml-auto h-2.5 w-14 bg-[#1A1A1A]/10" />
        </div>
        <div className="grid h-[calc(100%-36px)] place-items-center">
          <div className="w-[72%] bg-white p-6 text-center shadow-[0_12px_30px_rgba(16,24,40,0.12)]">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center border border-[#1A1A1A]/10 bg-[#F5F4EF] text-[var(--suite-accent)]">
              <Bot size={18} />
            </div>
            <p className="text-[12px] font-semibold leading-relaxed text-[#171717]">
              Fluxo criado: lead qualificado, CRM atualizado e reunião marcada.
            </p>
            <div className="mx-auto mt-5 h-8 w-28 bg-[#3B1D2C] text-[9px] font-semibold leading-8 text-white">
              Executar agora
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[46%] flex h-12 w-6 items-center justify-center bg-white text-[var(--suite-accent)] shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
        <Bot size={14} />
      </div>
    </>
  )
}

function EmailMockup() {
  return (
    <>
      <div className="absolute right-[-10%] top-[10%] h-[78%] w-[50%] rounded-[20%] border-[2px] border-white/40 rotate-[12deg]" />
      <div className="absolute left-[8%] top-[18%] w-[84%] max-w-[390px] border border-[#1A1A1A]/[0.16] bg-white shadow-[0_18px_42px_rgba(16,24,40,0.16)]">
        <div className="flex h-10 items-center justify-between border-b border-[#1A1A1A]/10 px-5 text-[10px] font-semibold uppercase text-[#1A1A1A]/[0.65] bg-[#F8F7F2]">
          <div className="flex items-center gap-2">
            <Mail size={12} />
            <span>Caixa de Entrada</span>
          </div>
          <span className="bg-[#EAB308]/20 text-[#CA8A04] px-2 py-0.5 rounded">2 Novos</span>
        </div>
        <div className="space-y-0 p-0">
          {[
            ["Pedido de Orçamento", "Ler e responder", "#FEF08A"],
            ["Dúvida sobre plano", "Respondeu com link", "#BBF7D0"],
            ["Suporte técnico", "Encaminhado para TI", "#BFDBFE"],
          ].map(([subject, action, bgColor], i) => (
            <div
              key={subject}
              className={`p-4 border-b border-[#1A1A1A]/[0.06] last:border-0 hover:bg-[#F9FAFB] transition-colors`}
              style={{ backgroundColor: i === 0 ? bgColor : "white" }}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="text-[11px] font-bold text-[#1A1A1A]">{subject}</span>
                <span className="text-[9px] font-semibold text-[#1A1A1A]/40 uppercase">{action}</span>
              </div>
              <div className="h-1.5 w-3/4 bg-[#1A1A1A]/10 rounded-full mb-1.5" />
              <div className="h-1.5 w-1/2 bg-[#1A1A1A]/10 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
