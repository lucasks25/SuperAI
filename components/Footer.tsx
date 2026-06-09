"use client"

import Link from "next/link"
import { BRAND_NAME } from "@/lib/constants"
import { Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-24 pb-[18vw] bg-[#05050A] text-white"
      aria-label="Rodapé"
    >
      <div className="container-xl px-6 md:px-12 mx-auto relative z-10">
        
        {/* Top Section: Logo & Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-12 mb-12 gap-8">
          <div className="flex flex-col gap-4 max-w-md">
            <span className="font-black text-[28px] tracking-tight uppercase">
              {BRAND_NAME}
            </span>
            <p className="text-[16px] text-white/60 font-medium leading-relaxed">
              Agentes de IA que operam 24/7. Automatize seu atendimento, converta leads e escale suas vendas no piloto automático.
            </p>
          </div>
          
          <div className="flex flex-col md:text-right gap-2">
            <span className="text-[13px] text-white/40 uppercase tracking-widest font-bold">Contato direto</span>
            <a href="mailto:contato@moltochat.com" className="text-[20px] font-bold hover:text-[#D4FF00] transition-colors">
              contato@moltochat.com
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Links - 12 columns wide on Desktop, divided into 4 columns */}
          <div className="col-span-1 lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4">
            
            {/* Column 1: Produtos */}
            <div>
              <h4 className="font-black text-[12px] uppercase tracking-widest mb-6 text-white/40">Produtos</h4>
              <ul className="flex flex-col gap-4 text-[15px] font-medium text-white/80">
                <li><a href="#" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all">Agente WhatsApp</a></li>
                <li><a href="#" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all">SDR IA</a></li>
                <li><a href="#" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all">Agendamento</a></li>
                <li><a href="#" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all">Voz Humanizada</a></li>
                <li><a href="#" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all">Atendimento Humano</a></li>
              </ul>
            </div>

            {/* Column 2: Empresa */}
            <div>
              <h4 className="font-black text-[12px] uppercase tracking-widest mb-6 text-white/40">Empresa</h4>
              <ul className="flex flex-col gap-4 text-[15px] font-medium text-white/80">
                <li><a href="#contato" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all">Sobre</a></li>
                <li><Link href="/planos" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all">Planos</Link></li>
                <li><a href="#" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all">Parceiros</a></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h4 className="font-black text-[12px] uppercase tracking-widest mb-6 text-white/40">Legal</h4>
              <ul className="flex flex-col gap-4 text-[15px] font-medium text-white/80">
                <li><Link href="/termos-de-uso" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all">Termos de Uso</Link></li>
                <li>
                  <Link href="/politica-de-privacidade" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all flex items-start gap-1">
                    Política de Privacidade
                    <span className="text-[10px] mt-0.5">↗</span>
                  </Link>
                </li>
                <li><Link href="/politica-de-cookies" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all">Política de Cookies</Link></li>
              </ul>
            </div>

            {/* Column 4: Redes Sociais */}
            <div>
              <h4 className="font-black text-[12px] uppercase tracking-widest mb-6 text-white/40">Redes Sociais</h4>
              <ul className="flex flex-col gap-4 text-[15px] font-medium text-white/80">
                <li>
                  <a href="#" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all flex items-center gap-2.5">
                    <Instagram size={18} strokeWidth={2.5} /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all flex items-center gap-2.5">
                    <Linkedin size={18} strokeWidth={2.5} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4FF00] hover:translate-x-1 transition-all flex items-center gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-[13px] font-medium">
          © {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos reservados.
        </div>
      </div>

      {/* HUGE Faded Background Text */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden pointer-events-none select-none z-0">
        <h1 className="text-[17vw] font-black text-white/10 tracking-tighter leading-none whitespace-nowrap">
          {(BRAND_NAME as string) === "MOLTOCHAT" ? "MOLTOCHAT" : BRAND_NAME}
        </h1>
      </div>
    </footer>
  )
}
