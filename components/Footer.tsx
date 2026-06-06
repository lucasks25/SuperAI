"use client"

import Link from "next/link"
import { BRAND_NAME } from "@/lib/constants"
import { Linkedin, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-24 pb-[22vw]"
      style={{ background: "#266bb9ff", color: "#F8F9FA" }}
      aria-label="Rodapé"
    >
      <div className="container-xl px-6 md:px-12 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & Tagline - 4 columns wide */}
          <div className="col-span-1 lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              {/* Logo icon representation */}
              <div className="w-[22px] h-[22px] bg-[#F8F9FA] rounded flex items-center justify-center">
                <div className="w-[8px] h-[10px] bg-[#3D262A] rounded-sm" />
              </div>
              <span className="font-bold text-[13px] tracking-[0.15em] uppercase">{BRAND_NAME}</span>
            </div>
            <p className="text-[22px] font-medium leading-[1.3] text-white">
              Criadores da Plataforma<br />de Agentes Superai
            </p>
          </div>

          {/* Links - 8 columns wide */}
          <div className="col-span-1 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {/* Column 1: Products */}
            <div>
              <h4 className="font-bold text-[14px] mb-5 text-white">Produtos</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Agente WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SDR IA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agendamento</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Voz Humanizada</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Atendimento Humano</a></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="font-bold text-[14px] mb-5 text-white">Empresa</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-white/80">
                <li><a href="#contato" className="hover:text-white transition-colors">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Parceiros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h4 className="font-bold text-[14px] mb-5 text-white">Legal</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-white/80">
                <li><Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link></li>
                <li>
                  <Link href="/politica-de-privacidade" className="hover:text-white transition-colors flex items-start gap-1">
                    Política de Privacidade
                    <span className="text-[10px] mt-0.5">↗</span>
                  </Link>
                </li>
                <li><Link href="/politica-de-cookies" className="hover:text-white transition-colors">Política de Cookies</Link></li>
              </ul>
            </div>

            {/* Column 4: Connect */}
            <div>
              <h4 className="font-bold text-[14px] mb-5 text-white">Redes Sociais</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2.5">
                    <Instagram size={14} strokeWidth={2.5} /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2.5">
                    <Linkedin size={14} strokeWidth={2.5} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" /></svg>
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* HUGE Faded Background Text */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden pointer-events-none select-none z-0">
        <h1 className="text-[17vw] font-black text-white/[0.04] tracking-tighter leading-none whitespace-nowrap">
          {(BRAND_NAME as string) === "SUPERAI" ? "SUPERAI" : BRAND_NAME}
        </h1>
      </div>
    </footer>
  )
}
