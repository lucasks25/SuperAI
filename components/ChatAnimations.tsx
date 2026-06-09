"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// ─── constants ────────────────────────────────────────────────────────────────
const IG_GRAD = "linear-gradient(135deg, #833AB4 0%, #FD1D1D 55%, #F77737 100%)"
const WA_GREEN = "#25D366"
const WA_DARK  = "#075E54"
const BG       = "#05050A"

// ─── helpers ─────────────────────────────────────────────────────────────────

function useShowAfter(ms: number) {
  const [show, setShow] = useState(ms === 0)
  useEffect(() => {
    if (ms === 0) return
    const t = setTimeout(() => setShow(true), ms)
    return () => clearTimeout(t)
  }, [ms])
  return show
}

function useCounter(target: number, delay: number, duration: number) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let raf: number
    const t = setTimeout(() => {
      const begin = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - begin) / duration, 1)
        setVal(Math.round(p * target))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => { clearTimeout(t); cancelAnimationFrame(raf) }
  }, [target, delay, duration])
  return val
}

function useTimer(startSeconds: number, active: boolean) {
  const [s, setS] = useState(startSeconds)
  useEffect(() => {
    if (!active) return
    const t = setInterval(() => setS(v => v + 1), 1000)
    return () => clearInterval(t)
  }, [active])
  return s
}

function formatHMS(total: number) {
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return `${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`
}

// ─── shared primitives ────────────────────────────────────────────────────────

function HookPill({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32 }}
      style={{ position: "absolute", top: "5%", left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 20 }}
    >
      <div style={{
        fontSize: 12, fontWeight: 700,
        color: "rgba(255,255,255,0.92)", letterSpacing: -0.2, whiteSpace: "nowrap",
      }}>
        {text}
      </div>
    </motion.div>
  )
}

function Bubble({ text, side, delay, bg, textColor = "white" }: {
  text: string; side: "left" | "right"; delay: number; bg: string; textColor?: string
}) {
  const show = useShowAfter(delay)
  if (!show) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      style={{ display: "flex", justifyContent: side === "left" ? "flex-start" : "flex-end" }}
    >
      <div style={{
        maxWidth: "80%", padding: "9px 13px",
        borderRadius: side === "left" ? "14px 14px 14px 3px" : "14px 14px 3px 14px",
        background: bg, color: textColor, fontSize: 13, lineHeight: 1.5,
        boxShadow: "0 1px 6px rgba(0,0,0,0.10)", fontWeight: 450,
      }}>
        {text}
      </div>
    </motion.div>
  )
}

function TypingDots({ show }: { show: boolean }) {
  if (!show) return null
  return (
    <div style={{ display: "flex" }}>
      <div style={{
        display: "flex", gap: 4, alignItems: "center",
        background: "white", padding: "9px 14px",
        borderRadius: "14px 14px 14px 3px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      }}>
        {[0, 1, 2].map(i => (
          <motion.div key={i}
            style={{ width: 5, height: 5, borderRadius: "50%", background: "#aaa" }}
            animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.18 }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── 1 · Instagram Lead ───────────────────────────────────────────────────────

function IGContent() {
  const showCard   = useShowAfter(200)
  const showTyping = useShowAfter(1500)
  const hideTyping = useShowAfter(2800)
  const showBadge  = useShowAfter(4400)

  return (
    <>
      <HookPill text="Respondendo leads sozinho 👇" />

      {/* Card ends higher to leave clear space for the badge below */}
      {showCard && (
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          style={{
            position: "absolute", top: "13%", left: "5%", right: "5%", bottom: "18%",
            background: "white", borderRadius: 18, boxShadow: "0 16px 50px rgba(0,0,0,0.35)",
            overflow: "hidden", display: "flex", flexDirection: "column",
          }}
        >
          {/* IG header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderBottom: "1px solid #F2F2F2", flexShrink: 0 }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: IG_GRAD, padding: 2, flexShrink: 0 }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#E1306C" }}>M</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "#1A1A2E", display: "flex", alignItems: "center", gap: 4 }}>
                molto.chat
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#0095F6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <div style={{ fontSize: 10, color: "#aaa" }}>Direct Message</div>
            </div>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs><linearGradient id="igH" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#833AB4"/><stop offset="100%" stopColor="#F77737"/></linearGradient></defs>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#igH)"/>
              <circle cx="12" cy="12" r="4" stroke="url(#igH)"/>
            </svg>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: "12px 12px 8px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 8, background: "#FAFAFA" }}>
            <Bubble text="Como funciona a plataforma? 🤔" side="left" delay={800} bg="#F0F0F3" textColor="#1A1A2E" />
            <TypingDots show={showTyping && !hideTyping} />
            <Bubble text="Automatizamos seu atendimento no Instagram e WhatsApp 24h, sem equipe 🤖" side="right" delay={2900} bg={IG_GRAD} />
          </div>

          {/* Input bar */}
          <div style={{ padding: "8px 14px", borderTop: "1px solid #F2F2F2", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <div style={{ flex: 1, background: "#F2F2F2", borderRadius: 999, padding: "6px 12px", fontSize: 11, color: "#bbb" }}>Mensagem...</div>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#E1306C"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </div>
        </motion.div>
      )}

      {/* Badge — flex row to center without transform conflict */}
      {showBadge && (
        <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 14 }}
          style={{
            position: "absolute", bottom: "7%", left: 0, right: 0,
            display: "flex", justifyContent: "center", zIndex: 30,
          }}
        >
          <div style={{
            background: IG_GRAD, color: "white", borderRadius: 999, padding: "7px 14px",
            fontSize: 11, fontWeight: 700, whiteSpace: "nowrap",
            boxShadow: "0 6px 20px rgba(131,58,180,0.40)",
          }}>
            ⚡ respondido automaticamente
          </div>
        </motion.div>
      )}
    </>
  )
}

export function InstagramLeadAnim() {
  const [cycle, setCycle] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setCycle(c => c + 1), 7500)
    return () => clearTimeout(t)
  }, [cycle])
  return (
    <div key={cycle} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", background: BG, fontFamily: "Inter, system-ui, sans-serif" }}>
      <IGContent />
    </div>
  )
}

// ─── 2 · WhatsApp Dúvida ──────────────────────────────────────────────────────

function WAContent() {
  const showCard   = useShowAfter(200)
  const showTyping = useShowAfter(1500)
  const hideTyping = useShowAfter(2800)
  const showChecks = useShowAfter(4200)

  return (
    <>
      <HookPill text="Tirando dúvidas 24h ⏰" />

      {showCard && (
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          style={{
            position: "absolute", top: "13%", left: "5%", right: "5%", bottom: "10%",
            background: "#ECE5DD", borderRadius: 18, boxShadow: "0 16px 50px rgba(0,0,0,0.35)",
            overflow: "hidden", display: "flex", flexDirection: "column",
          }}
        >
          {/* WA header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: WA_DARK, flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: WA_GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "white", flexShrink: 0 }}>M</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "white" }}>MoltoChat AI</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: WA_GREEN }} />online
              </div>
            </div>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white" opacity={0.8}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </div>

          {/* Messages — flex-end keeps natural WhatsApp feel (latest at bottom) */}
          <div style={{ flex: 1, padding: "12px 12px 8px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 8 }}>
            <Bubble text="Como a plataforma funciona? 🙏" side="left" delay={800} bg="white" textColor="#1A1A2E" />
            <TypingDots show={showTyping && !hideTyping} />
            <Bubble text="Integre em minutos e deixe a IA responder seus clientes 24h automaticamente ✅" side="right" delay={2900} bg="#DCF8C6" textColor="#1A1A2E" />
            {showChecks && (
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                style={{ display: "flex", justifyContent: "flex-end" }}>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                  <path d="M1 7L5 11L13 3" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7L11 11L19 3" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            )}
          </div>

          {/* Input bar */}
          <div style={{ padding: "8px 14px", background: "#F0F0F0", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <div style={{ flex: 1, background: "white", borderRadius: 999, padding: "6px 12px", fontSize: 11, color: "#bbb" }}>Mensagem</div>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: WA_GREEN, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export function WhatsappDuvidaAnim() {
  const [cycle, setCycle] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setCycle(c => c + 1), 7500)
    return () => clearTimeout(t)
  }, [cycle])
  return (
    <div key={cycle} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", background: BG, fontFamily: "Inter, system-ui, sans-serif" }}>
      <WAContent />
    </div>
  )
}

// ─── 3 · Escala Conversas ─────────────────────────────────────────────────────

const CONV_CARDS = [
  { platform: "wa", name: "Ana Lima",    preview: "Como funciona o atendimento?",    time: "09:02" },
  { platform: "ig", name: "joao_dev",    preview: "Posso integrar com o Instagram?", time: "09:04" },
  { platform: "wa", name: "Pedro Souza", preview: "Lead qualificado com sucesso ✅",  time: "09:07" },
  { platform: "ig", name: "mari.costa",  preview: "Qual plano você recomenda?",       time: "09:10" },
  { platform: "wa", name: "Carla Dias",  preview: "Ativando minha conta agora 🚀",   time: "09:13" },
  { platform: "ig", name: "r.ferreira_", preview: "Link de acesso enviado 🔗",        time: "09:15" },
]

function ConvCard({ card, delay }: { card: typeof CONV_CARDS[0]; delay: number }) {
  const show      = useShowAfter(delay)
  const showCheck = useShowAfter(delay + 700)
  if (!show) return null
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}
      style={{ background: "white", borderRadius: 12, padding: "9px 12px", display: "flex", alignItems: "center", gap: 9, boxShadow: "0 2px 10px rgba(0,0,0,0.08)", flexShrink: 0 }}
    >
      <div style={{ width: 30, height: 30, borderRadius: "50%", background: card.platform === "wa" ? WA_GREEN : IG_GRAD, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {card.platform === "wa"
          ? <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          : <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        }
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#1A1A2E" }}>{card.name}</div>
        <div style={{ fontSize: 10.5, color: "#777", marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{card.preview}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 3, flexShrink: 0 }}>
        <span style={{ fontSize: 9.5, color: "#bbb", fontWeight: 400 }}>{card.time}</span>
        {showCheck ? (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400 }}
            style={{ width: 16, height: 16, borderRadius: "50%", background: WA_GREEN, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.div>
        ) : (
          <div style={{ width: 16, height: 16 }} />
        )}
      </div>
    </motion.div>
  )
}

function EscalaContent() {
  const counter = useCounter(127, 1600, 2200)

  return (
    <>
      <HookPill text="Centenas de atendimentos simultâneos ⚡" />

      {/* Cards — start just below the pill */}
      <div style={{
        position: "absolute", top: "13%", left: "5%", right: "5%", bottom: "18%",
        display: "flex", flexDirection: "column", gap: 6, overflow: "hidden",
      }}>
        {CONV_CARDS.map((card, i) => (
          <ConvCard key={i} card={card} delay={300 + i * 380} />
        ))}
      </div>

      {/* Counter — centered below cards */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: counter > 0 ? 1 : 0 }}
        style={{ position: "absolute", bottom: "5%", left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div style={{ fontSize: 24, fontWeight: 900, color: "white", lineHeight: 1, letterSpacing: -1 }}>+{counter}</div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", fontWeight: 600, marginTop: 2, letterSpacing: 0.5 }}>respostas hoje</div>
      </motion.div>
    </>
  )
}

export function EscalaConversasAnim() {
  const [cycle, setCycle] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setCycle(c => c + 1), 8500)
    return () => clearTimeout(t)
  }, [cycle])
  return (
    <div key={cycle} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", background: BG, fontFamily: "Inter, system-ui, sans-serif" }}>
      <EscalaContent />
    </div>
  )
}

// ─── 4 · CTA Marca ────────────────────────────────────────────────────────────

function CtaMarcaContent() {
  const showLead   = useShowAfter(500)
  const showHuman  = useShowAfter(900)
  const showAI     = useShowAfter(1100)
  const showBadges = useShowAfter(1800)
  const timerSecs  = useTimer(16637, showHuman) // starts at 4h 37m 17s

  return (
    <>
      <HookPill text="Velocidade que fecha vendas ⚡" />

      {/* Lead message bubble */}
      {showLead && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          style={{
            position: "absolute", top: "16%", left: "8%", right: "8%",
            background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)",
            borderRadius: 12, padding: "8px 12px",
            display: "flex", alignItems: "center", gap: 8,
          }}
        >
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, flexShrink: 0 }}>👤</div>
          <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.82)", fontWeight: 500, lineHeight: 1.35 }}>
            "Tenho interesse, podem me ligar?"
          </span>
        </motion.div>
      )}

      {/* Comparison cards */}
      <div style={{ position: "absolute", top: "30%", left: "5%", right: "5%", bottom: "5%", display: "flex", gap: 7 }}>

        {/* Human side */}
        {showHuman && (
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
            style={{
              flex: 1, borderRadius: 14,
              background: "rgba(255,55,55,0.07)", border: "1px solid rgba(255,80,80,0.22)",
              padding: "12px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: 0.8 }}>Humano</div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: -2 }}>tempo de resposta</div>
            <div style={{ fontSize: 17, fontWeight: 900, color: "#FF5252", lineHeight: 1, fontVariantNumeric: "tabular-nums", letterSpacing: -0.5, textAlign: "center" }}>
              {formatHMS(timerSecs)}
            </div>
            {showBadges && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ marginTop: "auto", background: "rgba(255,60,60,0.14)", border: "1px solid rgba(255,80,80,0.28)", borderRadius: 8, padding: "5px 9px", fontSize: 10, fontWeight: 700, color: "#FF6B6B", display: "flex", alignItems: "center", gap: 4 }}
              >
                ❌ Sem resposta
              </motion.div>
            )}
          </motion.div>
        )}

        {/* AI side */}
        {showAI && (
          <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
            style={{
              flex: 1, borderRadius: 14,
              background: "rgba(37,211,102,0.07)", border: "1px solid rgba(37,211,102,0.25)",
              padding: "12px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: 0.8 }}>IA MoltoChat</div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: -2 }}>tempo de resposta</div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
              style={{ fontSize: 32, fontWeight: 900, color: WA_GREEN, lineHeight: 1, letterSpacing: -1 }}
            >
              0,3s
            </motion.div>
            {showBadges && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ marginTop: "auto", background: "rgba(37,211,102,0.14)", border: "1px solid rgba(37,211,102,0.28)", borderRadius: 8, padding: "5px 9px", fontSize: 10, fontWeight: 700, color: WA_GREEN, display: "flex", alignItems: "center", gap: 4 }}
              >
                ✅ Lead convertido
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </>
  )
}

export function CtaMarcaAnim() {
  const [cycle, setCycle] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setCycle(c => c + 1), 7000)
    return () => clearTimeout(t)
  }, [cycle])
  return (
    <div key={cycle} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", background: BG, fontFamily: "Inter, system-ui, sans-serif" }}>
      <CtaMarcaContent />
    </div>
  )
}
