"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import Reveal from "./Reveal"

const CASES = [
  {
    segment: "Clínicas",
    emoji: "🏥",
    scenario: "Paciente agenda consulta pelo WhatsApp",
    chat: [
      { from: "client", text: "Oi, quero marcar uma consulta com o Dr. Marcos" },
      { from: "ai",     text: "Olá! Temos horários disponíveis com o Dr. Marcos na quinta às 10h ou sexta às 14h. Qual prefere?" },
      { from: "client", text: "Quinta às 10h" },
      { from: "ai",     text: "Perfeito! Consulta confirmada para quinta às 10h. Vou enviar o endereço e um lembrete na véspera 🙂" },
    ],
    result: "Consulta agendada em 2 minutos, sem nenhuma ligação",
    color: "#7C6FF5",
  },
  {
    segment: "Imobiliárias",
    emoji: "🏠",
    scenario: "Lead qualificado para visita de imóvel",
    chat: [
      { from: "client", text: "Vi o anúncio do apartamento de 3 quartos no bairro Jardins" },
      { from: "ai",     text: "Ótimo! Esse imóvel tem 90m², 2 vagas e lazer completo. Você busca para morar ou investir?" },
      { from: "client", text: "Para morar, tenho urgência" },
      { from: "ai",     text: "Entendido! Lead com alta intenção de compra. Vou conectar você com nosso consultor agora." },
    ],
    result: "Lead qualificado e encaminhado ao corretor em tempo real",
    color: "#E46F2F",
  },
  {
    segment: "Agências",
    emoji: "📊",
    scenario: "Cliente solicita relatório de campanha",
    chat: [
      { from: "client", text: "Preciso do relatório de performance de outubro" },
      { from: "ai",     text: "Claro! Seu relatório de outubro está disponível. Quer o resumo executivo agora ou o arquivo completo?" },
      { from: "client", text: "Resumo primeiro" },
      { from: "ai",     text: "Em outubro: 2.3M de impressões, 4.2% CTR (+0.8% vs setembro), 312 leads gerados. Excelente mês! 🚀" },
    ],
    result: "Relatório entregue instantaneamente, cliente satisfeito 24/7",
    color: "#2F9E75",
  },
  {
    segment: "Restaurantes",
    emoji: "🍽️",
    scenario: "Reserva de mesa e pedido antecipado",
    chat: [
      { from: "client", text: "Quero reservar uma mesa pra 4 pessoas amanhã às 20h" },
      { from: "ai",     text: "Perfeito! Temos mesa disponível. Alguma preferência — área interna ou varanda?" },
      { from: "client", text: "Varanda, por favor. Tem cardápio para restrição vegetariana?" },
      { from: "ai",     text: "Sim! Temos 8 opções vegetarianas. Reserva confirmada na varanda às 20h para 4 pessoas ✅" },
    ],
    result: "Reserva confirmada com preferências registradas automaticamente",
    color: "#EAB308",
  },
]

function ChatBubble({ msg }: { msg: { from: string; text: string } }) {
  const isClient = msg.from === "client"
  return (
    <div className={`flex ${isClient ? "justify-end" : "justify-start"} mb-2.5`}>
      <div
        className="max-w-[80%] px-3 py-2 text-[12px] leading-relaxed shadow-sm"
        style={{
          background: isClient ? "#DCF8C6" : "#fff",
          color: "#111B21",
          borderRadius: isClient ? "12px 12px 3px 12px" : "12px 12px 12px 3px",
        }}
      >
        {msg.text}
      </div>
    </div>
  )
}

export default function UseCasesSection() {
  const [active, setActive] = useState(0)
  const current = CASES[active]

  return (
    <section className="bg-[#F2F2F2] py-20 md:py-32" aria-label="Casos de uso">
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="relative z-10 border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] overflow-hidden"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          {/* Header */}
          <div className="flex min-h-[78px] items-center justify-between gap-4 border-b border-[#1A1A1A]/[0.12] px-5 md:px-8">
            <Reveal>
              <h2 className="text-[24px] font-medium leading-tight text-[#22211F] md:text-[31px]">
                Para o seu segmento
              </h2>
            </Reveal>
          </div>

          {/* Segment tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#1A1A1A]/[0.10]">
            {CASES.map((c, i) => (
              <button
                key={c.segment}
                onClick={() => setActive(i)}
                className={`flex h-12 items-center justify-center gap-2 text-[13px] font-medium transition-colors
                  ${i !== CASES.length - 1 ? "border-r border-[#1A1A1A]/[0.10]" : ""}
                  ${i < 2 ? "border-b md:border-b-0" : ""}
                  ${active === i ? "bg-white text-[#171717]" : "text-[#22211F]/60 hover:bg-[#F0EFEB]"}`}
              >
                <span>{c.emoji}</span>
                {c.segment}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-[1fr_1.05fr] min-h-[420px]"
            >
              {/* Left — scenario info */}
              <div className="flex flex-col justify-center px-6 py-10 md:px-8 border-b md:border-b-0 md:border-r border-[#1A1A1A]/[0.10]">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.25em] mb-4"
                  style={{ color: current.color }}
                >
                  {current.segment}
                </p>
                <h3 className="text-[22px] md:text-[28px] font-medium text-[#171717] leading-tight tracking-tight mb-4">
                  {current.scenario}
                </h3>
                <div
                  className="inline-flex items-start gap-3 px-4 py-3 mt-2 max-w-sm"
                  style={{ background: `${current.color}0D`, border: `1px solid ${current.color}25` }}
                >
                  <span className="text-[18px] shrink-0">✅</span>
                  <p className="text-[13px] leading-snug text-[#1A1A1A]/65">{current.result}</p>
                </div>
              </div>

              {/* Right — chat mockup */}
              <div className="flex items-center justify-center px-6 py-10 md:px-8 bg-[#EFEFEB]">
                <div className="w-full max-w-[300px] rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-[#1A1A1A]/[0.06]">
                  {/* WA header */}
                  <div className="flex items-center gap-2.5 px-3 py-2.5 bg-[#075E54]">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <MessageCircle size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-white">SuperAI</p>
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#4ADE80]" />
                        <p className="text-[9px] text-white/60">online</p>
                      </div>
                    </div>
                  </div>
                  {/* Chat */}
                  <div className="bg-[#ECE5DD] px-3 py-4">
                    {current.chat.map((msg, i) => (
                      <ChatBubble key={i} msg={msg} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
