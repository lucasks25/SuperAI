"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MessageCircle, Instagram, ArrowRight } from "lucide-react"

export default function ScrollMarquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Cinematic Parallax Timeline:
  // - The container is 250vh for a satisfying, slow scroll track.
  // - The banner is 60vh (cinematic widescreen proportion) and sticky.
  // - Background subtly zooms and pans (bgScale, bgY)
  // - Giant 25vw text slides gracefully across (textX)
  // Manychat-style Fly-Through Timeline:
  // Sequential "Slide then Zoom" Timeline:
  // 0.0 -> 0.4: Word slides gracefully from the right edge until the 't' is perfectly centered.
  // 0.4 -> 0.6: Word locks in place. User admires it.
  // 0.6 -> 0.9: Camera flies exponentially through the 't'.
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] 
  })

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"])

  const scaleTransform = useTransform(
    scrollYProgress,
    [0,    0.20, 0.35, 0.42, 0.52, 0.63, 0.73, 0.82, 0.90, 0.96, 1   ],
    [2,    2.5,  3,    3.5,  7,    15,   35,   80,   155,  200,  200  ]
  )

  const xTransform = useTransform(
    scrollYProgress,
    [0,       0.12,   0.25,   0.35,   0.42,   1    ],
    ["81.5%", "38%",  "4%",   "-32%", "-46%", "-46%"]
  )

  // The Cards Reveal Timeline:
  // Finish revealing by 0.95, then stay locked and fully visible until 1.0.
  const cardsOpacity = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1])
  const cardsScale = useTransform(scrollYProgress, [0.85, 0.95, 1], [0.8, 1, 1])
  const cardsY = useTransform(scrollYProgress, [0.85, 0.95, 1], [100, 0, 0])

  return (
    <section 
      ref={containerRef} 
      className="h-[800vh] relative z-10 bg-black"
    >
      {/* Sticky Full-Screen Container */}
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
      >
        {/* Parallax Background Layer */}
        <motion.div 
          style={{ 
            scale: bgScale, 
            y: bgY,
            backgroundImage: "url('https://images.unsplash.com/photo-1779783078617-b3dc4fe0b846?q=80&w=2560&auto=format&fit=crop')"
          }}
          className="absolute -inset-[5%] bg-cover bg-[center_top] bg-no-repeat"
        />

        {/* Subtle overlay to ensure contrast against the background photo */}
        <div className="absolute inset-0 bg-black/10 z-0" />

        {/* Outer Layer: Camera Zoom */}
        <motion.div 
          style={{ 
            scale: scaleTransform,
            transformOrigin: "center center"
          }}
          className="will-change-transform flex items-center justify-center w-full z-10"
        >
          {/* Inner Layer: Swooping X-axis */}
          <motion.div style={{ x: xTransform }} className="w-max">
            <h1
              className="text-[30vw] md:text-[21vw] font-black tracking-tighter leading-none select-none text-center whitespace-nowrap"
              style={{ color: "#D4FF00" }}
            >
              MoltoChat
            </h1>
          </motion.div>
        </motion.div>

        {/* The Reveal Cards (WhatsApp & Instagram) - Manychat Brutalist Style */}
        <motion.div 
          style={{ opacity: cardsOpacity, scale: cardsScale, y: cardsY }}
          className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-4"
        >
          {/* Faint Background Grid over the Yellow */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23000000' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px"
            }}
          />

          {/* Instagram Card */}
          <div className="relative z-10 w-full max-w-[380px] bg-white p-8 md:p-10 flex flex-col items-start rounded-none shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-gray-200">
             <div className="flex items-center gap-4 mb-6">
               <Instagram size={40} className="text-[#E1306C]" />
               <h3 className="text-[2rem] font-bold text-black tracking-tight">Instagram</h3>
             </div>
             <p className="text-black font-medium text-[1.1rem] leading-snug mb-12">
               Automatize DMs e respostas a comentários sem esforço
             </p>
             <div className="flex items-center gap-2 mt-auto cursor-pointer group">
               <span className="text-sm font-mono font-bold text-black tracking-widest uppercase border-b-2 border-black pb-0.5">LEARN MORE</span>
               <ArrowRight size={18} className="text-black group-hover:translate-x-1 transition-transform" />
             </div>
          </div>

          {/* WhatsApp Card */}
          <div className="relative z-10 w-full max-w-[380px] bg-white p-8 md:p-10 flex flex-col items-start rounded-none shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-gray-200">
             <div className="flex items-center gap-4 mb-6">
               <MessageCircle size={40} className="text-[#25D366]" />
               <h3 className="text-[2rem] font-bold text-black tracking-tight">WhatsApp</h3>
             </div>
             <p className="text-black font-medium text-[1.1rem] leading-snug mb-12">
               Transforme leads em clientes leais engajando com eles 1:1
             </p>
             <div className="flex items-center gap-2 mt-auto cursor-pointer group">
               <span className="text-sm font-mono font-bold text-black tracking-widest uppercase border-b-2 border-black pb-0.5">LEARN MORE</span>
               <ArrowRight size={18} className="text-black group-hover:translate-x-1 transition-transform" />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
