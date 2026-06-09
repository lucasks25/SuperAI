"use client"

import { useState, useEffect } from "react"
import { Cookie } from "lucide-react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Forçando o banner a aparecer SEMPRE para testes (ignorando o localStorage)
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-32px)] max-w-[900px] bg-gray-300 border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 animate-in slide-in-from-bottom-12 fade-in duration-500">
      
      {/* Text Section */}
      <div className="flex items-center gap-4 flex-1">
        <div className="bg-black p-2.5 rounded-full shrink-0 hidden sm:block">
          <Cookie size={24} className="text-white" />
        </div>
        <p className="text-[14px] md:text-[15px] font-medium text-black/90 leading-snug">
          <strong className="font-black uppercase tracking-widest text-black block text-[12px] mb-1">Aviso de Cookies</strong>
          Utilizamos cookies para analisar o tráfego e garantir a melhor experiência na nossa plataforma de IA.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
        <button 
          onClick={handleDecline}
          className="flex-1 md:flex-none py-3 px-5 bg-transparent text-black border-2 border-black rounded-full font-black uppercase tracking-widest text-[12px] hover:bg-black/5 transition-colors"
        >
          Apenas Essenciais
        </button>
        <button 
          onClick={handleAccept}
          className="flex-1 md:flex-none py-3 px-6 bg-black text-white rounded-full font-black uppercase tracking-widest text-[12px] hover:bg-gray-900 transition-colors shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
        >
          Aceitar Todos
        </button>
      </div>
      
    </div>
  )
}
