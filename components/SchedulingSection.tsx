"use client"

// Effects: Calendar Card Slide In · Time Slot Hover · Confirmed Slot Glow · Notification Pop · Diagonal Light Sweep
import { motion } from "framer-motion"
import { Calendar, CheckCircle, Bell } from "lucide-react"
import SectionHeader from "./SectionHeader"
import Reveal from "./Reveal"

const TIME_SLOTS = [
  { time: "09:00", confirmed: false },
  { time: "10:30", confirmed: false },
  { time: "14:00", confirmed: false },
  { time: "15:30", confirmed: true  },
  { time: "17:00", confirmed: false },
]

const BULLETS = [
  "Confirma nome e contato",
  "Sugere horários disponíveis",
  "Registra o agendamento",
  "Envia confirmação automática",
  "Pode lembrar o cliente antes do horário",
]

export default function SchedulingSection() {
  return (
    <section
      id="agendamento"
      className="section overflow-hidden"
      style={{ background: "#080B1E" }}
      aria-label="Agendamento automático"
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Calendar */}
          <Reveal x={-40} y={0} delay={0.1}>
            <div className="relative max-w-sm mx-auto">
              <motion.div
                className="glass rounded-3xl overflow-hidden relative"
                style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)" }}
              >
                {/* Diagonal Light Sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none z-20"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                  style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)", width: "60%" }}
                />

                {/* Calendar header */}
                <div className="px-5 py-4 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <Calendar size={16} className="text-[#A5A0F8]" />
                  <span className="text-sm font-semibold text-[#E8ECFF]">Agenda</span>
                  <span className="ml-auto text-xs text-[#7D8DB8]">Hoje</span>
                </div>

                {/* Time slots */}
                <div className="p-4 flex flex-col gap-2">
                  {TIME_SLOTS.map((slot, i) => (
                    <motion.div
                      key={slot.time}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={!slot.confirmed ? { x: 4 } : {}}
                      className="flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all"
                      style={{
                        background: slot.confirmed ? "rgba(124,111,245,0.1)" : "rgba(255,255,255,0.03)",
                        border: slot.confirmed ? "1px solid rgba(124,111,245,0.35)" : "1px solid rgba(255,255,255,0.06)",
                        boxShadow: slot.confirmed ? "0 0 16px rgba(124,111,245,0.15)" : "none",
                      }}
                    >
                      <span className="text-sm font-medium" style={{ color: slot.confirmed ? "#A5A0F8" : "#7D8DB8" }}>
                        {slot.time}
                      </span>
                      {slot.confirmed ? (
                        <div className="flex items-center gap-1.5">
                          <CheckCircle size={14} className="text-[#A5A0F8]" />
                          <span className="text-xs font-semibold text-[#A5A0F8]">Confirmado</span>
                        </div>
                      ) : (
                        <span className="text-xs text-[#7D8DB8]/60">Disponível</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Notification Pop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200, damping: 18 }}
                className="absolute -bottom-6 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-2.5"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(124,111,245,0.15)" }}>
                  <Bell size={14} className="text-[#A5A0F8]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#E8ECFF]">Agendamento criado</p>
                  <p className="text-[10px] text-[#7D8DB8]">Cliente notificado no WhatsApp</p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Right — text */}
          <div className="flex flex-col gap-6">
            <SectionHeader
              badge="Agendamento"
              title="Da conversa ao horário marcado"
              subtitle="A IA entende o serviço desejado, coleta dados essenciais e agenda o cliente sem troca manual de mensagens."
              align="left"
            />
            <ul className="flex flex-col gap-3 mt-2">
              {BULLETS.map((bullet, i) => (
                <Reveal key={bullet} delay={0.1 * i}>
                  <li className="flex items-center gap-3 text-sm text-[#7D8DB8]">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#7C6FF5" }} />
                    {bullet}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
