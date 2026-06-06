"use client"

// Effects: Integration Orbit Layout · Connector Lines SVG · Orbit Hover Lift · Central Glow Hub · Line Pulse Animation
import { motion } from "framer-motion"
import { MessageCircle, Calendar, Database, Zap, Users, Globe, Mail, BarChart2, Cpu, Table2 } from "lucide-react"
import SectionHeader from "./SectionHeader"
import Reveal from "./Reveal"

const ICON_MAP: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={18} />,
  Calendar:      <Calendar size={18} />,
  Database:      <Database size={18} />,
  Zap:           <Zap size={18} />,
  Users:         <Users size={18} />,
  Cpu:           <Cpu size={18} />,
  Globe:         <Globe size={18} />,
  Table2:        <Table2 size={18} />,
  Mail:          <Mail size={18} />,
  BarChart2:     <BarChart2 size={18} />,
}

const INTEGRATIONS = [
  { name: "WhatsApp",       color: "#4ADE80", icon: "MessageCircle" },
  { name: "Google Calendar",color: "#60A5FA", icon: "Calendar"      },
  { name: "PostgreSQL",     color: "#93C5FD", icon: "Database"      },
  { name: "n8n",            color: "#FD9A3F", icon: "Zap"           },
  { name: "CRM",            color: "#C084FC", icon: "Users"         },
  { name: "Evolution API",  color: "#A5A0F8", icon: "Cpu"           },
  { name: "Webhooks",       color: "#22D3EE", icon: "Globe"         },
  { name: "Planilhas",      color: "#4ADE80", icon: "Table2"        },
  { name: "E-mail",         color: "#7D8DB8", icon: "Mail"          },
  { name: "Dashboard",      color: "#A5A0F8", icon: "BarChart2"     },
]

const RADIUS = 200

export default function IntegrationsSection() {
  return (
    <section
      id="integracoes"
      className="section overflow-hidden"
      style={{ background: "#080B1E" }}
      aria-label="Integrações"
    >
      <div className="container-xl">
        <SectionHeader
          badge="Integrações"
          title="Conecte sua IA às ferramentas do negócio"
          subtitle="WhatsApp, agenda, CRM, banco de dados e automações trabalhando juntos."
          className="mb-20"
        />

        {/* Desktop orbit */}
        <div className="hidden lg:flex justify-center">
          <Reveal>
            <div className="relative" style={{ width: "500px", height: "500px" }}>
              {/* Connector Lines + Line Pulse */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                {INTEGRATIONS.map((_, i) => {
                  const angle = (i * 360) / INTEGRATIONS.length * (Math.PI / 180)
                  const x2 = Math.cos(angle) * RADIUS + 250
                  const y2 = Math.sin(angle) * RADIUS + 250
                  return (
                    <motion.line
                      key={i}
                      x1="250" y1="250" x2={x2} y2={y2}
                      stroke="rgba(124,111,245,0.2)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      animate={{ opacity: [0.25, 0.7, 0.25] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                    />
                  )
                })}
              </svg>

              {/* Effect: Central Glow Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div
                  className="glass rounded-2xl px-5 py-4 flex flex-col items-center gap-1 text-center"
                  style={{ boxShadow: "0 0 50px rgba(124,111,245,0.25), 0 8px 32px rgba(0,0,0,0.4)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
                    style={{ background: "linear-gradient(135deg, #7C6FF5, #22D3EE)" }}
                  >
                    <Zap size={18} className="text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#E8ECFF]">SuperAI</span>
                  <span className="text-[10px] text-[#7D8DB8]">Hub central</span>
                </div>
              </div>

              {/* Effect: Integration Orbit Layout + Orbit Hover Lift */}
              {INTEGRATIONS.map((item, i) => {
                const angle = (i * 360) / INTEGRATIONS.length * (Math.PI / 180)
                const x = Math.cos(angle) * RADIUS
                const y = Math.sin(angle) * RADIUS

                return (
                  <motion.div
                    key={item.name}
                    className="absolute z-10"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%, -50%)" }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.08 }}
                  >
                    <div
                      className="glass rounded-xl px-3 py-2.5 flex flex-col items-center gap-1.5 w-[80px] cursor-default"
                      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}
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
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
          {INTEGRATIONS.map((item, i) => (
            <Reveal key={item.name} delay={0.06 * i}>
              <div className="glass rounded-2xl px-4 py-4 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${item.color}18`, color: item.color }}
                >
                  {ICON_MAP[item.icon]}
                </div>
                <span className="text-xs font-medium text-[#7D8DB8]">{item.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
