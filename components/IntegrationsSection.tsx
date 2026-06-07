"use client"

import { motion } from "framer-motion"
import { MessageCircle, Calendar, Database, Zap, Users, Globe, Mail, BarChart2, Cpu, Table2 } from "lucide-react"
import Reveal from "./Reveal"

const ICON_MAP: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={16} />,
  Calendar:      <Calendar size={16} />,
  Database:      <Database size={16} />,
  Zap:           <Zap size={16} />,
  Users:         <Users size={16} />,
  Cpu:           <Cpu size={16} />,
  Globe:         <Globe size={16} />,
  Table2:        <Table2 size={16} />,
  Mail:          <Mail size={16} />,
  BarChart2:     <BarChart2 size={16} />,
}

const INTEGRATIONS = [
  { name: "WhatsApp",        color: "#16A34A", icon: "MessageCircle" },
  { name: "Google Calendar", color: "#2563EB", icon: "Calendar"      },
  { name: "PostgreSQL",      color: "#1D4ED8", icon: "Database"      },
  { name: "n8n",             color: "#EA580C", icon: "Zap"           },
  { name: "CRM",             color: "#7C6FF5", icon: "Users"         },
  { name: "Evolution API",   color: "#171717", icon: "Cpu"           },
  { name: "Webhooks",        color: "#0891B2", icon: "Globe"         },
  { name: "Planilhas",       color: "#15803D", icon: "Table2"        },
  { name: "E-mail",          color: "#64748B", icon: "Mail"          },
  { name: "Dashboard",       color: "#4F46E5", icon: "BarChart2"     },
]

const RADIUS = 190

export default function IntegrationsSection() {
  return (
    <section
      id="integracoes"
      className="bg-[#F2F2F2] py-20 md:py-32 overflow-hidden"
      aria-label="Integrações"
    >
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="relative z-10 border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          {/* Header */}
          <div className="flex min-h-[78px] items-center justify-between gap-4 border-b border-[#1A1A1A]/[0.12] px-5 md:px-8">
            <Reveal>
              <h2 className="text-[24px] font-medium leading-tight text-[#22211F] md:text-[31px]">
                Integrações
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="hidden text-[13px] text-[#1A1A1A]/35 md:block">
                Conecte sua IA às ferramentas do negócio
              </p>
            </Reveal>
          </div>

          {/* Desktop orbit */}
          <div className="hidden lg:flex justify-center py-16">
            <Reveal>
              <div className="relative" style={{ width: 500, height: 500 }}>
                {/* Orbit ring */}
                <div
                  className="absolute"
                  style={{
                    inset: `calc(50% - ${RADIUS}px)`,
                    width: RADIUS * 2,
                    height: RADIUS * 2,
                    borderRadius: "50%",
                    border: "1px dashed rgba(26,26,26,0.10)",
                  }}
                />

                {/* Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
                  {INTEGRATIONS.map((_, i) => {
                    const a = (i * 360 / INTEGRATIONS.length) * (Math.PI / 180)
                    return (
                      <motion.line
                        key={i}
                        x1="250" y1="250"
                        x2={Math.cos(a) * RADIUS + 250}
                        y2={Math.sin(a) * RADIUS + 250}
                        stroke="rgba(26,26,26,0.07)"
                        strokeWidth="1"
                        strokeDasharray="3 5"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.22 }}
                      />
                    )
                  })}
                </svg>

                {/* Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div
                    className="bg-white border border-[#1A1A1A]/[0.10] shadow-[0_8px_24px_rgba(0,0,0,0.10)] px-5 py-4 flex flex-col items-center gap-1 text-center"
                  >
                    <div className="w-9 h-9 flex items-center justify-center mb-1 bg-[#171717]">
                      <Zap size={15} className="text-white" />
                    </div>
                    <span className="text-[12px] font-bold text-[#171717]">SuperAI</span>
                    <span className="text-[9px] text-[#1A1A1A]/40">Hub central</span>
                  </div>
                </div>

                {/* Nodes */}
                {INTEGRATIONS.map((item, i) => {
                  const a = (i * 360 / INTEGRATIONS.length) * (Math.PI / 180)
                  return (
                    <motion.div
                      key={item.name}
                      className="absolute z-10"
                      style={{
                        left: `calc(50% + ${Math.cos(a) * RADIUS}px)`,
                        top: `calc(50% + ${Math.sin(a) * RADIUS}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.4 }}
                      whileHover={{ y: -4, scale: 1.06 }}
                    >
                      <div
                        className="bg-white border border-[#1A1A1A]/[0.09] shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex flex-col items-center gap-1.5 px-3 py-2.5 w-[74px] cursor-default"
                      >
                        <span style={{ color: item.color }}>{ICON_MAP[item.icon]}</span>
                        <span className="text-[9px] font-medium text-[#1A1A1A]/50 text-center leading-tight">{item.name}</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </Reveal>
          </div>

          {/* Mobile grid */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 border-t border-[#1A1A1A]/[0.08]">
            {INTEGRATIONS.map((item, i) => (
              <Reveal key={item.name} delay={0.04 * i}>
                <div
                  className={`flex items-center gap-3 px-5 py-5 border-b border-[#1A1A1A]/[0.07] ${i % 2 === 0 ? "border-r" : ""}`}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}12`, color: item.color }}
                  >
                    {ICON_MAP[item.icon]}
                  </div>
                  <span className="text-[12px] font-medium text-[#1A1A1A]/60">{item.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
