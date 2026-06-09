"use client"

import { motion } from "framer-motion"
import { CheckCircle2, XCircle } from "lucide-react"

export default function ComparisonSection() {
  const comparisonData = [
    {
      title: "Tempo de Resposta",
      competitor: { text: "Deixa o cliente no vácuo", badge: "Perde Vendas" },
      moltochat: { text: "Responde e vende em segundos", badge: "Alta Conversão" },
    },
    {
      title: "Qualificação",
      competitor: { text: "Formulários chatos", badge: "Burocracia" },
      moltochat: { text: "IA Qualifica via WhatsApp", badge: "Sem Atrito" },
    },
    {
      title: "Agendamentos",
      competitor: { text: "Idas e vindas no chat", badge: "Desgaste" },
      moltochat: { text: "Reunião marcada no automático", badge: "Piloto Automático" },
    },
    {
      title: "Crescimento",
      competitor: { text: "Inchar folha de pagamento", badge: "Custo Fixo" },
      moltochat: { text: "Clonar seus melhores vendedores", badge: "Lucro Escalonável" },
    }
  ]

  return (
    <section className="relative py-24 md:py-32 bg-white text-black overflow-hidden" id="comparacao">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[26px] sm:text-[34px] md:text-[48px] lg:text-[64px] font-black tracking-tighter leading-[1.1] mb-6 text-black"
          >
            Não somos um chatbot.<br />
            Somos a <span className="bg-[#266bb9] text-white px-4 py-1 inline-block border-[3px] border-black transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">evolução</span> da operação.
          </motion.h2>
        </div>

        {/* Creative VS Cards Layout */}
        <div className="max-w-[900px] mx-auto mt-20 space-y-16">
          {comparisonData.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col relative w-full"
            >
              {/* Feature Name Badge */}
              <div className="flex justify-center mb-[-1.2rem] relative z-20">
                <span className="bg-white text-black border-[3px] border-black font-black uppercase tracking-widest text-[12px] md:text-[14px] px-6 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {item.title}
                </span>
              </div>

              {/* Split Comparison Box */}
              <div className="flex flex-col md:flex-row items-stretch border-[3px] border-black rounded-[2rem] overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white relative">
                
                {/* Left (Old Market Standard) */}
                <div className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center bg-[#F9FAFB] border-b-[3px] md:border-b-0 md:border-r-[3px] border-black">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-[11px] border-2 border-gray-200 px-3 py-1 rounded-md">
                      {item.competitor.badge}
                    </span>
                  </div>
                  <span className="text-gray-500 font-medium text-[18px] md:text-[22px] text-center line-through decoration-2 decoration-red-400/40">
                    {item.competitor.text}
                  </span>
                </div>

                {/* Right (MoltoChat Standard) */}
                <div className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center bg-white relative overflow-hidden group cursor-pointer">
                  {/* Subtle success glow on hover */}
                  <div className="absolute inset-0 bg-[#16A34A] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                  
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <CheckCircle2 className="text-[#16A34A] w-5 h-5 md:w-6 md:h-6 fill-[#16A34A]/10" />
                    <span className="text-[#16A34A] bg-[#16A34A]/10 border-2 border-[#16A34A]/20 font-black uppercase tracking-widest text-[11px] px-3 py-1 rounded-md">
                      {item.moltochat.badge}
                    </span>
                  </div>
                  <span className="relative z-10 text-black font-black text-[22px] md:text-[28px] text-center leading-tight group-hover:scale-105 transition-transform duration-300">
                    {item.moltochat.text}
                  </span>
                </div>

                {/* VS Badge (Absolute Center) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black text-white font-black text-xl md:text-2xl rounded-full flex items-center justify-center border-[4px] border-white z-10 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                  VS
                </div>
              </div>
            </motion.div>
          ))}
        </div>       

        {/* CTA Row - Kept exactly as user requested */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <button className="px-10 py-5 bg-black text-white rounded-full font-black text-[18px] uppercase tracking-widest hover:scale-105 transition-transform duration-200 flex items-center gap-3">
            Dominar as Vendas
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
