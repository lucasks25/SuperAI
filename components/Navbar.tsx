"use client"

// ─── Navbar ──────────────────────────────────────────────────────────────────
// Effects: Glassmorphism Sticky Nav · Scroll Elevation · Active Link Underline
//          Pill Button Hover · Mobile Slide Menu
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { BRAND_NAME, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    
    checkScroll() // Check on mount
    window.addEventListener("scroll", checkScroll, { passive: true })
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])

  const navTextColor = scrolled ? "text-[#1A1A1A]" : "text-[#E8ECFF]"
  const navLinkColor = scrolled ? "text-[#1A1A1A]/70 hover:text-[#1A1A1A]" : "text-[#F8F9FA] hover:text-white"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
      {/* Effect: Superhuman Style Navbar — transparent to white, square edges */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
          borderBottomColor: scrolled ? "rgba(26,26,26,0.08)" : "rgba(255,255,255,0)",
          height: scrolled ? "72px" : "80px",
        }}
        transition={{ duration: 0.2 }}
        className="w-full flex items-center justify-between px-6 md:px-10 transition-all"
        style={{ 
          borderBottomWidth: scrolled ? "1px" : "0px", 
          borderBottomStyle: "solid" 
        }}
        aria-label="Navegação principal"
      >
        <div className="flex-1">
          {/* Logo */}
          <a
            href="/"
            className={`text-[16px] font-bold ${navTextColor} tracking-tight hover:opacity-80 transition-opacity`}
            aria-label={BRAND_NAME}
          >
            {BRAND_NAME}
          </a>
        </div>

        {/* Desktop links - Centered */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-4 py-2 text-[13px] font-medium ${navLinkColor} transition-colors duration-200`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs - Right Aligned */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-5">
          <a
            href="#entrar"
            className={`text-[13px] font-medium ${navLinkColor} transition-colors px-3 py-2`}
          >
            Entrar
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wider transition-all ${
              scrolled 
                ? "bg-[#1A1A1A] text-white hover:bg-black" 
                : "bg-white text-[#1A1A1A] hover:bg-white/90"
            }`}
          >
            Começar agora
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-xl ${navLinkColor} transition-colors`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Effect: Mobile Slide Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full bg-white border-b border-black/5 p-6 shadow-xl"
          >
            <ul className="flex flex-col gap-1 mb-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-[14px] font-medium text-[#1A1A1A] hover:bg-black/5 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-4 border-t border-black/5">
              <a href="#entrar" className="block text-center py-3 text-[14px] font-medium text-[#1A1A1A]">
                Entrar
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 bg-[#1A1A1A] text-white text-[12px] font-bold uppercase tracking-wider"
              >
                Começar agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
