"use client"

import { PRICING_PLANS } from "@/lib/constants"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function PricingCards() {
  return (
    <div className="w-full max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {PRICING_PLANS.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={`relative flex flex-col p-10 md:p-12 rounded-[2rem] border-[3px] bg-white ${
            plan.highlight 
              ? "border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-10" 
              : "border-gray-200 shadow-xl"
          }`}
        >
          {/* Highlight Badge */}
          {plan.badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-[#D4FF00] text-black border-[2px] border-black px-5 py-2 rounded-full text-[12px] font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {plan.badge}
              </span>
            </div>
          )}

          <h3 className="text-4xl font-black tracking-tight text-black mb-4">
            {plan.name}
          </h3>
          <p className="text-[16px] font-medium text-gray-500 mb-8 min-h-[70px]">
            {plan.description}
          </p>

          <ul className="flex flex-col gap-5 mb-12 flex-1">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className={plan.highlight ? "text-black fill-[#D4FF00]" : "text-gray-400"} />
                <span className="text-[15px] font-medium text-gray-800 leading-tight">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-4 rounded-full font-black uppercase tracking-widest text-[13px] md:text-[14px] transition-all hover:scale-105 ${
              plan.highlight
                ? "bg-black text-[#D4FF00] hover:bg-gray-900 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                : "bg-white text-black border-[2px] border-black hover:bg-gray-50"
            }`}
          >
            {plan.cta}
          </button>
        </motion.div>
      ))}
    </div>
  )
}
