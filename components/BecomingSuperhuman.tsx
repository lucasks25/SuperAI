"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BRAND_NAME } from "@/lib/constants"

export default function BecomingSuperhuman() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A241F] py-20 md:py-28">
      <div className="container-xl max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Left: Abstract composition */}
          <div className="flex-1 w-full flex justify-center relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[540px] aspect-square overflow-hidden shadow-2xl"
            >
              {/* Main Image - Full Cover */}
              <Image
                src="/images/becoming-superhuman.png"
                alt="Visualização de IA"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Text content */}
          <div className="flex-1 text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[34px] md:text-[42px] lg:text-[48px] leading-tight font-medium mb-6 tracking-tight text-[#F8F9FA]"
            >
              Tornando-se {BRAND_NAME}.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[15px] md:text-[16px] text-white/80 leading-relaxed mb-10 max-w-[480px] tracking-wide"
            >
              Quando a IA trabalha onde você trabalha, ela começa a mudar <em className="italic font-medium text-white/90">como</em> você trabalha. No começo, você atende mais rápido e de forma mais assertiva. Antes que perceba, você tem tempo para ser mais criativo, estratégico e impactante — livre para focar no que realmente importa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="#como-funciona"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-white/30 rounded-md text-[13px] font-medium text-[#F8F9FA] hover:bg-white hover:text-[#0A241F] transition-colors"
              >
                Conheça nossa visão
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
