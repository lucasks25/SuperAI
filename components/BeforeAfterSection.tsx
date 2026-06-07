"use client"

import { X, Check } from "lucide-react"
import Reveal from "./Reveal"

const WITHOUT = [
  "Clientes esperando horas por resposta",
  "SDR humano precisa contatar cada lead",
  "Agendamentos perdidos por esquecimento",
  "CRM desatualizado por entrada manual",
  "Equipe sobrecarregada com tarefas repetitivas",
  "Follow-ups que nunca acontecem",
]

const WITH = [
  "Resposta em segundos, 24 horas por dia",
  "Leads qualificados automaticamente",
  "Agendamento confirmado e lembrado pela IA",
  "CRM atualizado em tempo real",
  "Equipe focada em fechar, não em operação",
  "Follow-up automático sem perder nenhum lead",
]

export default function BeforeAfterSection() {
  return (
    <section className="bg-[#F2F2F2] py-20 md:py-28" aria-label="Antes e depois">
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <Reveal>
          <h2 className="text-[24px] md:text-[31px] font-medium text-[#22211F] text-center mb-12">
            A diferença é visível desde o primeiro dia
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-3">
          {/* Sem IA */}
          <Reveal delay={0.06}>
            <div
              className="border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl overflow-hidden"
              style={{ clipPath: "inset(0 round 16px)" }}
            >
              <div className="flex items-center gap-3 px-6 py-5 border-b border-[#1A1A1A]/[0.10]">
                <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
                <span className="text-[13px] font-semibold text-[#1A1A1A]/60 uppercase tracking-wider">
                  Sem IA
                </span>
              </div>
              <ul className="p-6 flex flex-col gap-4">
                {WITHOUT.map((item, i) => (
                  <Reveal key={item} delay={0.06 + i * 0.05}>
                    <li className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-[#EF4444]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <X size={11} className="text-[#EF4444]" />
                      </div>
                      <span className="text-[14px] text-[#1A1A1A]/55 leading-snug">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Com SuperAI */}
          <Reveal delay={0.12}>
            <div
              className="border border-[#7C6FF5]/20 bg-[#171717] rounded-2xl overflow-hidden"
              style={{ clipPath: "inset(0 round 16px)" }}
            >
              <div className="flex items-center gap-3 px-6 py-5 border-b border-white/[0.06]">
                <div className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                <span className="text-[13px] font-semibold text-white/50 uppercase tracking-wider">
                  Com SuperAI
                </span>
              </div>
              <ul className="p-6 flex flex-col gap-4">
                {WITH.map((item, i) => (
                  <Reveal key={item} delay={0.12 + i * 0.05}>
                    <li className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-[#4ADE80]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-[#4ADE80]" />
                      </div>
                      <span className="text-[14px] text-white/70 leading-snug">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
