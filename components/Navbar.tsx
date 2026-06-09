"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { BRAND_NAME, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Dynamic colors based on scroll state
  const textColor = scrolled ? "text-black" : "text-white"
  const borderColor = scrolled ? "border-black/60" : "border-white/60"
  const hoverBg = scrolled ? "hover:bg-black/5" : "hover:bg-white/10"
  const navBg = scrolled
    ? "bg-white/60 backdrop-blur-xl border-b border-white/30 shadow-sm"
    : "bg-transparent backdrop-blur-0"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300">
      <nav
        className={`w-full flex items-center justify-between px-6 md:px-12 h-[72px] transition-all duration-300 ${navBg}`}
        aria-label="Navegação principal"
      >
        <div className="flex-1">
          {/* Logo */}
          <a
            href="/"
            className={`text-[20px] md:text-[24px] font-black tracking-tighter transition-colors duration-300 ${textColor}`}
            aria-label={BRAND_NAME}
          >
            {BRAND_NAME}
          </a>
        </div>

        {/* Desktop links - Centered */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[11px] font-bold tracking-[0.1em] uppercase transition-colors duration-300 ${textColor} opacity-90 hover:opacity-100`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs - Right Aligned */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 border rounded-full text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-300 ${textColor} ${borderColor} ${hoverBg}`}
          >
            Começar agora
          </a>

          <a
            href="#entrar"
            className={`text-[11px] font-bold tracking-[0.1em] uppercase transition-colors duration-300 ${textColor} opacity-90 hover:opacity-100`}
          >
            Entrar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full bg-white p-6 shadow-xl flex flex-col border-t border-gray-100"
          >
            <ul className="flex flex-col gap-4 mb-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[13px] font-bold text-black uppercase tracking-[0.1em] py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 pt-6 border-t border-gray-100">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 border border-black rounded-full text-black text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-black/5"
              >
                Começar agora
              </a>
              <a href="#entrar" className="block text-center py-3 text-[13px] font-bold text-black uppercase tracking-[0.1em]">
                Entrar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
