import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/SmoothScroll"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SuperAI — Agentes de IA para atendimento, vendas e automação",
  description:
    "Crie agentes inteligentes para WhatsApp que respondem, qualificam, agendam e transferem para atendimento humano quando necessário.",
  keywords: "IA, WhatsApp, agentes de IA, automação, atendimento, CRM, agendamento",
  openGraph: {
    title: "SuperAI — Agentes de IA que trabalham como parte da sua equipe",
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
      </body>
    </html>
  )
}
