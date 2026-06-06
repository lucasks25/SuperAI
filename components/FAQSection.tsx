"use client"

// Effects: Smooth Accordion · Icon Rotate · FAQ Item Hover Glow · Staggered FAQ Reveal
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import SectionHeader from "./SectionHeader"
import Reveal from "./Reveal"
import { FAQ_ITEMS } from "@/lib/constants"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="py-16 relative overflow-hidden bg-[#F2F2F2]"
      aria-label="Perguntas frequentes"
    >
      <div className="container-xl max-w-6xl">
        <div className="bg-white rounded-[40px] border border-[#1A1A1A]/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] p-10 md:p-16 lg:p-20">
          <SectionHeader
            theme="light"
            badge="FAQ"
            title="Dúvidas frequentes"
            subtitle="Tudo o que você precisa saber sobre a SuperAI."
            className="mb-16"
            align="left"
          />

          <div className="flex flex-col border-t border-[#1A1A1A]/5" role="list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <Reveal key={item.q} delay={0.05 * i}>
                  <div className="border-b border-[#1A1A1A]/5 overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-[17px] font-bold text-[#1A1A1A] pr-8 transition-colors group-hover:text-[#7C6FF5]">
                        {item.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <Plus size={20} className="text-[#1A1A1A]/20" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="pb-8">
                            <p className="text-[16px] text-[#1A1A1A]/60 leading-relaxed max-w-3xl">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
