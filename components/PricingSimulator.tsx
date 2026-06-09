"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"

export default function PricingSimulator() {
  const [leads, setLeads] = useState(500)

  // Logic based on slider
  let recommendedPlan = "Start"
  let colorClass = "text-[#3B82F6]"
  let desc = "Validar a operação com baixo custo."
  
  if (leads > 500 && leads <= 5000) {
    recommendedPlan = "Growth"
    colorClass = "text-[#3B82F6]"
    desc = "O melhor custo-benefício para automação."
  } else if (leads > 5000) {
    recommendedPlan = "Scale"
    colorClass = "text-[#3B82F6]"
    desc = "Infraestrutura dedicada para alto volume."
  }



  return (
    <div className="w-full max-w-[950px] mx-auto border-[3px] border-black rounded-[1.5rem] flex flex-col md:flex-row shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-black relative z-10">
      
      {/* Left Column - Controls (White) */}
      <div className="flex-1 p-6 md:p-8 flex flex-col relative bg-white border-b md:border-b-0 md:border-r-[3px] border-black">
        {/* Faint Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23000000' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px"
          }}
        />

        <div className="relative z-10 flex flex-col h-full justify-center">
          
          <div className="mb-4">
            <span className="block text-[16px] font-black text-black uppercase tracking-widest mb-5">
              Volume Mensal Estimado
            </span>
            <div className="flex items-baseline gap-2">
              <h2 className="text-[48px] font-black tracking-tighter leading-none text-black">
                {leads.toLocaleString('pt-BR')}
              </h2>
              <span className="text-[16px] font-bold text-gray-400">leads</span>
            </div>
          </div>
          
          <div className="mb-6 mt-2">
            <input 
              type="range" 
              min="50" 
              max="10000" 
              step="50"
              value={leads}
              onChange={(e) => setLeads(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-black focus:outline-none"
            />
            <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">
              <span>50 leads</span>
              <span>10.000+ leads</span>
            </div>
          </div>


        </div>
      </div>

      {/* Right Column - Results */}
      <div className="w-full md:w-[400px] bg-black text-white p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] -z-10 opacity-20 bg-[#3B82F6]" />

        <div className="relative z-10 flex flex-col h-full justify-center">
          
          <div>
            <span className="block text-[16px] font-black text-white uppercase tracking-widest mb-4">
              Plano Ideal
            </span>
            <div className={`font-black tracking-tighter leading-none text-[48px] md:text-[56px] uppercase mb-4 ${colorClass}`}>
              {recommendedPlan}
            </div>
            <p className="text-[18px] font-medium text-white/70 leading-relaxed max-w-[300px]">
              {desc}
            </p>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
