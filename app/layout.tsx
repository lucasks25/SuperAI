import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/SmoothScroll"
import CookieBanner from "@/components/CookieBanner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MoltoChat — Agentes de IA para atendimento, vendas e automação",
  description:
    "Atenda, qualifique e converta em milissegundos com Agentes de IA que operam 24/7.",
  keywords: "IA, WhatsApp, agentes de IA, automação, atendimento, CRM, agendamento",
  openGraph: {
    title: "MoltoChat — Agentes de IA que trabalham como parte da sua equipe",
    description:
      "Automatize atendimento, vendas e agendamentos com agentes inteligentes treinados para o seu negócio.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        {/* Effect: Lenis Smooth Scroll wraps the entire app */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
        
        {/* Global Components */}
        <CookieBanner />
      </body>
    </html>
  )
}
