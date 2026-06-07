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
  { name: "WhatsApp",        color: "#4ADE80", icon: "MessageCircle" },
  { name: "Google Calendar", color: "#60A5FA", icon: "Calendar"      },
  { name: "PostgreSQL",      color: "#93C5FD", icon: "Database"      },
  { name: "n8n",             color: "#FD9A3F", icon: "Zap"           },
  { name: "CRM",             color: "#C084FC", icon: "Users"         },
  { name: "Evolution API",   color: "#A5A0F8", icon: "Cpu"           },
  { name: "Webhooks",        color: "#22D3EE", icon: "Globe"         },
  { name: "Planilhas",       color: "#4ADE80", icon: "Table2"        },
  { name: "E-mail",          color: "#7D8DB8", icon: "Mail"          },
  { name: "Dashboard",       color: "#A5A0F8", icon: "BarChart2"     },
]

const RADIUS = 195

export default function IntegrationsSection() {
  return (
    <section
      id="integracoes"
      className="py-20 md:py-32 overflow-hidden"
      style={{ background: "#080B1E" }}
      aria-label="Integrações"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#22D3EE] mb-5 text-center">
              Integrações
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-[34px] md:text-[44px] lg:text-[52px] font-medium leading-[1.02] tracking-tight text-[#E8ECFF] text-center max-w-2xl mx-auto">
              Conecte sua IA às ferramentas do negócio
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="text-[15px] text-[#7D8DB8] text-center max-w-xl mx-auto mt-4 leading-relaxed">
              WhatsApp, agenda, CRM, banco de dados e automações trabalhando juntos.
            </p>
          </Reveal>
        </div>

        {/* Desktop orbit */}
        <div className="hidden lg:flex justify-center">
          <Reveal>
            <div className="relative" style={{ width: 500, height: 500 }}>
              {/* Orbit rings */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ border: "1px solid rgba(255,255,255,0.04)" }}
              />
              <div
                className="absolute"
                style={{
                  inset: "calc(50% - 195px)",
                  width: 390,
                  height: 390,
                  borderRadius: "50%",
                  border: "1px dashed rgba(124,111,245,0.18)",
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
                      stroke="rgba(124,111,245,0.15)"
                      strokeWidth="1"
                      strokeDasharray="3 5"
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.22 }}
                    />
                  )
                })}
              </svg>

              {/* Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div
                  className="glass px-5 py-4 flex flex-col items-center gap-1 text-center"
                  style={{ boxShadow: "0 0 40px rgba(124,111,245,0.2), 0 8px 32px rgba(0,0,0,0.4)" }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center mb-1"
                    style={{ background: "linear-gradient(135deg, #7C6FF5, #22D3EE)" }}
                  >
                    <Zap size={16} className="text-white" />
                  </div>
                  <span className="text-[12px] font-bold text-[#E8ECFF]">SuperAI</span>
                  <span className="text-[9px] text-[#7D8DB8]">Hub central</span>
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
                    transition={{ delay: 0.05 * i, duration: 0.45 }}
                    whileHover={{ y: -4, scale: 1.06 }}
                  >
                    <div
                      className="glass flex flex-col items-center gap-1.5 px-3 py-2.5 w-[76px] cursor-default"
                      style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.3)" }}
                    >
                      <span style={{ color: item.color }}>{ICON_MAP[item.icon]}</span>
                      <span className="text-[9px] font-medium text-[#7D8DB8] text-center leading-tight">{item.name}</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* Mobile grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
          {INTEGRATIONS.map((item, i) => (
            <Reveal key={item.name} delay={0.05 * i}>
              <div className="glass flex items-center gap-3 px-4 py-4">
                <div
                  className="w-8 h-8 flex items-center justify-center shrink-0"
                  style={{ background: `${item.color}14`, color: item.color }}
                >
                  {ICON_MAP[item.icon]}
                </div>
                <span className="text-[12px] font-medium text-[#7D8DB8]">{item.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
