"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import Reveal from "./Reveal"
import { FAQ_ITEMS } from "@/lib/constants"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // Open the first one by default

  return (
    <section
      id="faq"
      className="bg-white py-20 md:py-32 relative border-t border-b border-black/10"
      aria-label="Perguntas frequentes"
    >
      <div className="mx-auto w-full max-w-[1300px] px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Title & Subtitle */}
        <div className="lg:w-1/3 flex flex-col lg:sticky lg:top-32 h-fit">
          <Reveal>
            <h2 className="text-[30px] md:text-[48px] lg:text-[64px] font-black leading-[1.05] text-black tracking-tighter mb-6">
              Perguntas<br />Frequentes
            </h2>
            <p className="text-[18px] text-gray-600 font-medium leading-relaxed mb-8">
              Ficou com alguma dúvida sobre como a MoltoChat pode escalar a sua operação? Confira as respostas abaixo.
            </p>
            <div className="hidden lg:block w-16 h-1 bg-[#D4FF00] mb-8" />
            <a href="mailto:contato@moltochat.com" className="inline-flex items-center text-[15px] font-bold uppercase tracking-wider text-black hover:text-[#0055FF] transition-colors gap-2 group">
              Fale com um especialista
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </Reveal>
        </div>

        {/* Right Column: Accordions */}
        <div className="lg:w-2/3 flex flex-col">
          <div className="border-t-2 border-black">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={i} className="border-b-2 border-black">
                  <button
                    className="w-full flex items-center justify-between py-6 md:py-8 text-left focus-visible:outline-none group"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[20px] md:text-[24px] font-black tracking-tight transition-colors pr-8 ${
                        isOpen ? "text-[#0055FF]" : "text-black group-hover:text-[#0055FF]"
                      }`}
                    >
                      {item.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-[#0055FF] text-white" : "bg-gray-100 text-black group-hover:bg-[#0055FF] group-hover:text-white"
                      }`}
                    >
                      <Plus size={20} strokeWidth={3} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <p className="pb-8 text-[16px] md:text-[18px] text-gray-700 font-medium leading-relaxed max-w-[90%]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
        
      </div>
    </section>
  )
}
