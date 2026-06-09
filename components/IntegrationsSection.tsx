"use client"

import { motion } from "framer-motion"
import { 
  SiWhatsapp,
  SiHubspot,
  SiSalesforce,
  SiStripe,
  SiSlack,
  SiGooglecalendar,
  SiInstagram,
  SiZapier,
  SiAsana,
  SiZendesk,
  SiShopify,
  SiNotion,
  SiTrello
} from "react-icons/si"

const ALL_LOGOS = [
  { name: "WhatsApp",    icon: SiWhatsapp,      color: "#25D366", bg: "#25D366" },
  { name: "HubSpot",     icon: SiHubspot,       color: "#FF7A59", bg: "#FF7A59" },
  { name: "Salesforce",  icon: SiSalesforce,    color: "#00A1E0", bg: "#00A1E0" },
  { name: "Stripe",      icon: SiStripe,        color: "#635BFF", bg: "#635BFF" },
  { name: "Slack",       icon: SiSlack,         color: "#E01E5A", bg: "#E01E5A" },
  { name: "Calendar",    icon: SiGooglecalendar,color: "#4285F4", bg: "#4285F4" },
  { name: "Instagram",   icon: SiInstagram,     color: "#E4405F", bg: "#E4405F" },
  { name: "Zapier",      icon: SiZapier,        color: "#FF4A00", bg: "#FF4A00" },
  { name: "Asana",       icon: SiAsana,         color: "#F06A6A", bg: "#F06A6A" },
  { name: "Zendesk",     icon: SiZendesk,       color: "#87CEAC", bg: "#03363D" },
  { name: "Shopify",     icon: SiShopify,       color: "#95BF47", bg: "#95BF47" },
  { name: "Notion",      icon: SiNotion,        color: "#FFFFFF", bg: "#1F1F1F" },
  { name: "Trello",      icon: SiTrello,        color: "#FFFFFF", bg: "#0052CC" },
]

const ROW_1 = ALL_LOGOS.slice(0, 7)
const ROW_2 = ALL_LOGOS.slice(6, 13)

function LogoCard({ logo }: { logo: typeof ALL_LOGOS[0] }) {
  const Icon = logo.icon
  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-3 w-[100px] md:w-[120px] group cursor-default">
      <div
        className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200 border border-white/10"
        style={{ background: "#000000" }}
      >
        <Icon size={30} color={logo.color} />
      </div>
      <span className="text-[12px] font-semibold text-white/50 group-hover:text-white/90 transition-colors text-center leading-tight">
        {logo.name}
      </span>
    </div>
  )
}

export default function IntegrationsSection() {
  const marquee1 = [...ROW_1, ...ROW_1, ...ROW_1, ...ROW_1]
  const marquee2 = [...ROW_2, ...ROW_2, ...ROW_2, ...ROW_2]

  return (
    <section
      id="integracoes"
      className="relative py-24 md:py-32 overflow-hidden bg-[#05050A] border-t border-white/10"
      aria-label="Integrações"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] font-bold text-[#D4FF00] uppercase tracking-[0.2em] mb-5"
          >
            Integrações
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[56px] font-black text-white tracking-tighter leading-[1.05] mb-6"
          >
            Não mude suas ferramentas.<br />
            A IA se <span className="text-[#D4FF00]">adapta</span> a elas.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-white/40 max-w-2xl mx-auto leading-relaxed"
          >
            A MoltoChat conecta com mais de 50 ferramentas que sua equipe já usa — CRM, pagamentos, calendário e muito mais.
          </motion.p>
        </div>

      </div>

      {/* Infinite Scrolling Marquees */}
      <div className="relative w-full flex flex-col items-center mt-4 gap-4">

        <div className="relative w-full flex flex-col gap-6 py-4 overflow-hidden">
          {/* Fade edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#05050A] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#05050A] to-transparent z-20 pointer-events-none" />

          {/* Row 1: Moves Left */}
          <motion.div
            className="flex gap-6 md:gap-10 items-start px-8 w-max"
            animate={{ x: [0, -3000] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {marquee1.map((logo, i) => (
              <LogoCard key={`r1-${logo.name}-${i}`} logo={logo} />
            ))}
          </motion.div>

          {/* Row 2: Moves Right */}
          <motion.div
            className="flex gap-6 md:gap-10 items-start px-8 w-max"
            initial={{ x: -3000 }}
            animate={{ x: 0 }}
            transition={{ ease: "linear", duration: 48, repeat: Infinity }}
          >
            {marquee2.map((logo, i) => (
              <LogoCard key={`r2-${logo.name}-${i}`} logo={logo} />
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom label */}
      <p className="text-center text-[12px] text-white/25 font-bold uppercase tracking-[0.2em] mt-10">
        +50 conexões nativas · CRM · ERP · Pagamentos · Calendários
      </p>

    </section>
  )
}
