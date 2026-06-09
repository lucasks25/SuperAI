"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden flex items-center"
      aria-label="Apresentação"
    >
      {/* Cinematic Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop" 
          alt="Business owner relaxing" 
          className="w-full h-full object-cover object-top md:object-center"
        />
        {/* Gradients to ensure text legibility */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent w-full md:w-[70%]" />
      </div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-20">
        
        {/* Left side: Copy & CTA */}
        <div className="flex flex-col items-start text-left">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[32px] sm:text-[44px] md:text-[64px] lg:text-[85px] font-black text-white tracking-tighter leading-[1.05] mb-6"
          >
            Extraia o <br className="hidden md:block" />
            máximo de <br className="hidden md:block" />
            cada conversa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-[16px] md:text-[18px] text-white/90 leading-relaxed mb-8 max-w-[480px] font-medium"
          >
            Venda mais, engaje melhor e cresça seu público com automações poderosas para Instagram, WhatsApp, e Site.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#E200F7] hover:bg-[#d000e5] text-white font-bold text-[15px] uppercase tracking-wider rounded-full transition-all shadow-[0_0_20px_rgba(226,0,247,0.3)] hover:shadow-[0_0_30px_rgba(226,0,247,0.5)] hover:scale-105"
            >
              Começar Agora
            </a>
          </motion.div>
        </div>

        {/* Right side: Floating Chat Bubbles */}
        <div className="relative h-[300px] md:h-[500px] w-full flex flex-col justify-center hidden sm:flex">
          
          {/* User Bubble */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute top-[25%] md:top-[35%] right-[10%] md:right-[20%] bg-[#2a2a2a]/80 backdrop-blur-md border border-white/10 text-white p-4 md:p-5 rounded-2xl rounded-bl-sm max-w-[280px] shadow-2xl"
          >
            <img 
              src="https://i.pravatar.cc/150?img=32" 
              alt="User" 
              className="absolute -left-12 top-4 w-10 h-10 rounded-full border-2 border-white/20 shadow-lg object-cover" 
            />
            <p className="text-[14px] md:text-[15px] font-medium leading-tight">
              Você tem um site onde eu posso ver mais detalhes?
            </p>
          </motion.div>
          
          {/* AI Bot Bubble */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute top-[55%] md:top-[60%] right-[0%] md:right-[5%] bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white p-5 md:p-6 rounded-3xl rounded-tl-sm max-w-[300px] md:max-w-[340px] shadow-2xl border border-white/20"
          >
            <p className="text-[15px] md:text-[17px] font-medium mb-4 leading-tight">
              Confira nossa página oficial de produtos e planos!
            </p>
            <button className="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-xl py-2.5 font-bold transition-colors text-[14px] flex items-center justify-center gap-2">
              Vamos lá!
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>



    </section>
  )
}
