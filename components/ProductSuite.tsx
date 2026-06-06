"use client"

// Effects: Staggered Feature Cards · Premium Glass Surface · Hover Lift Glow ·
//          Icon Pulse Glow · Section Gradient Wash
import { motion } from "framer-motion"
import { MessageCircle, Target, Calendar, Mic, Users, Zap } from "lucide-react"
import SectionHeader from "./SectionHeader"

const ICON_MAP: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={22} />,
  Target:        <Target size={22} />,
  Calendar:      <Calendar size={22} />,
  Mic:           <Mic size={22} />,
  Users:         <Users size={22} />,
  Zap:           <Zap size={22} />,
}

const FEATURES = [
  { icon: "MessageCircle", title: "Atendimento no WhatsApp", text: "Responde clientes de forma natural, com contexto e sem parecer um robô genérico.",         color: "#4ADE80", bg: "rgba(74,222,128,0.1)"    },
  { icon: "Target",        title: "Qualificação de leads",   text: "Faz as perguntas certas para entender intenção, urgência e perfil do cliente.",            color: "#A5A0F8", bg: "rgba(124,111,245,0.12)"  },
  { icon: "Calendar",      title: "Agendamento automático",  text: "Consulta disponibilidade e confirma horários automaticamente.",                             color: "#C084FC", bg: "rgba(192,132,252,0.12)"  },
  { icon: "Mic",           title: "Voz humanizada",          text: "Entende áudios e pode responder com mensagens de voz naturais.",                            color: "#22D3EE", bg: "rgba(34,211,238,0.1)"   },
  { icon: "Users",         title: "Atendimento humano",      text: "Pausa a IA e transfere a conversa para sua equipe quando necessário.",                      color: "#F472B6", bg: "rgba(244,114,182,0.1)"  },
  { icon: "Zap",           title: "Integrações",             text: "Conecta WhatsApp, CRM, agenda, banco de dados e automações.",                              color: "#FCD34D", bg: "rgba(252,211,77,0.1)"   },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
}

export default function ProductSuite() {
  return (
    <section
      id="produto"
      className="section relative overflow-hidden"
      style={{ background: "#080B1E" }}
      aria-label="Suite de produtos"
    >
      {/* Section Gradient Wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,111,245,0.08) 0%, transparent 60%)" }}
      />

      <div className="relative container-xl">
        <SectionHeader
          badge="Plataforma completa"
          title="Tudo que sua empresa precisa para automatizar conversas"
          subtitle="A SuperAI combina atendimento, vendas, agendamento, voz e integrações em agentes inteligentes treinados para cada negócio."
          className="mb-16"
        />

        {/* Effect: Staggered Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              // Effect: Hover Lift Glow
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass rounded-2xl p-7 cursor-default group relative"
              style={{ transition: "box-shadow 0.25s" }}
            >
              {/* Effect: Icon Pulse Glow */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-shadow duration-300"
                style={{
                  background: feature.bg,
                  color: feature.color,
                }}
              >
                {ICON_MAP[feature.icon]}
              </div>
              <h3 className="text-base font-semibold text-[#E8ECFF] mb-2 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-[#7D8DB8] leading-relaxed">{feature.text}</p>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${feature.color}30` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
