"use client"

import { motion } from "framer-motion"

const TESTIMONIALS = [
  {
    name: "João Silva",
    role: "CEO, TechVendas",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "A MoltoChat dobrou nossa conversão no primeiro mês. O atendimento é instantâneo."
  },
  {
    name: "Mariana Costa",
    role: "Diretora Comercial, ImobPrime",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "A qualificação de leads mudou completamente o jogo para nossos corretores."
  },
  {
    name: "Pedro Alves",
    role: "Fundador, E-commerce Plus",
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
    quote: "Integração perfeita. O bot responde dúvidas e vende de madrugada sem parar."
  },
  {
    name: "Ana Luiza",
    role: "Head de Operações, ClinMed",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    quote: "Agendamentos sincronizados com nosso sistema médico sem intervenção humana."
  },
  {
    name: "Carlos Eduardo",
    role: "Sócio, B2B Leads",
    photo: "https://randomuser.me/api/portraits/men/85.jpg",
    quote: "Reduzimos nosso custo de operação em 40% clonando o atendimento com a IA."
  }
]

export default function MiniTestimonials() {
  // Duplicar para o efeito infinito
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section className="bg-white py-6 overflow-hidden border-b border-gray-100">
      <div className="relative w-full flex items-center">
        
        {/* Sombras laterais para fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-5 md:gap-16 lg:gap-24 items-center px-4 w-max"
          animate={{ x: [0, -2500] }} 
          transition={{ 
            ease: "linear", 
            duration: 40, 
            repeat: Infinity 
          }}
        >
          {marqueeItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 flex-shrink-0"
            >
              <img 
                src={item.photo} 
                alt={item.name} 
                className="w-12 h-12 rounded-md object-cover shadow-sm border border-gray-200"
              />
              <div className="flex flex-col">
                <p className="text-[13px] text-gray-900 font-medium max-w-[280px] leading-snug line-clamp-2">
                  "{item.quote}"
                </p>
                <span className="text-[11px] text-gray-500 font-bold mt-1">
                  {item.name} <span className="font-normal opacity-70">· {item.role}</span>
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
