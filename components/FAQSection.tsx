"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import Reveal from "./Reveal"
import { FAQ_ITEMS } from "@/lib/constants"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="bg-[#F2F2F2] py-20 md:py-32"
      aria-label="Perguntas frequentes"
    >
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="relative z-10 border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          {/* Header */}
          <div className="flex min-h-[78px] items-center border-b border-[#1A1A1A]/[0.12] px-5 md:px-8">
            <Reveal>
              <h2 className="text-[24px] font-medium leading-tight text-[#22211F] md:text-[31px]">
                Perguntas frequentes
              </h2>
            </Reveal>
          </div>

          {/* Items */}
          <div role="list">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <Reveal key={item.q} delay={0.04 * i}>
                  <div
                    className={`border-b border-[#1A1A1A]/[0.08] last:border-0 ${
                      isOpen ? "bg-white/60" : ""
                    } transition-colors`}
                  >
                    <button
                      className="w-full grid grid-cols-[1fr_auto] items-center gap-6 px-5 py-7 md:px-8 text-left focus-visible:outline-none group"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-[16px] md:text-[18px] font-medium tracking-tight transition-colors ${
                          isOpen
                            ? "text-[#7C6FF5]"
                            : "text-[#22211F] group-hover:text-[#7C6FF5]"
                        }`}
                      >
                        {item.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0 w-7 h-7 flex items-center justify-center border border-[#1A1A1A]/[0.12] bg-white"
                      >
                        <Plus size={14} className="text-[#1A1A1A]/50" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                        >
                          <p className="px-5 pb-7 md:px-8 text-[15px] text-[#1A1A1A]/55 leading-relaxed max-w-3xl">
                            {item.a}
                          </p>
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
