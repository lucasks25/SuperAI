import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion"
import { ManyBackground } from "./shared/Background"

// ── Floating ghost bubbles in the background ───────────────────────────────────
function GhostBubble({
  frame,
  delay,
  xPos,
  yPos,
  text,
}: {
  frame: number
  delay: number
  xPos: number
  yPos: number
  text: string
}) {
  const lf = frame - delay
  if (lf < 0) return null

  const opacity = interpolate(lf, [0, 15, 80, 110], [0, 0.22, 0.22, 0], {
    extrapolateRight: "clamp",
  })
  const translateY = interpolate(lf, [0, 110], [0, -28])

  return (
    <div
      style={{
        position: "absolute",
        left: xPos,
        top: yPos,
        opacity,
        transform: `translateY(${translateY}px)`,
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.20)",
        borderRadius: 18,
        padding: "8px 14px",
        fontSize: 12,
        color: "white",
        fontFamily: "Inter, system-ui, sans-serif",
        fontWeight: 500,
        whiteSpace: "nowrap",
        backdropFilter: "blur(4px)",
      }}
    >
      {text}
    </div>
  )
}

// ── Pulsing CTA button ─────────────────────────────────────────────────────────
function PulseButton({ frame, fps, startFrame }: { frame: number; fps: number; startFrame: number }) {
  const lf = frame - startFrame
  if (lf < 0) return null

  const prog = spring({ frame: lf, fps, config: { damping: 14, stiffness: 100 } })
  const opacity = Math.min(lf / 10, 1)

  // Continuous pulse — scale oscillates slightly
  const pulse = 1 + 0.03 * Math.sin((frame * Math.PI * 2) / 30)

  return (
    <div
      style={{
        opacity,
        transform: `scale(${prog * pulse})`,
        transformOrigin: "center",
        background: "#D4FF00",
        borderRadius: 999,
        padding: "16px 48px",
        fontSize: 15,
        fontWeight: 900,
        color: "#1A1A2E",
        letterSpacing: 1.2,
        textTransform: "uppercase" as const,
        boxShadow: "0 12px 40px rgba(212,255,0,0.35), 0 4px 12px rgba(0,0,0,0.2)",
        fontFamily: "Inter, system-ui, sans-serif",
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "default",
      }}
    >
      Começar Agora
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  )
}

// ── Main composition ──────────────────────────────────────────────────────────
// Timing:
//  0–25   : ghost bubbles start drifting in bg
// 30–60   : logo + brand name springs in
// 65–100  : tagline fades in
// 105–145 : CTA button pops
// 145–180 : "automatizado 24/7" badge
// 170–210 : brand seal
export function CtaMarca() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  // Logo springs in immediately (frame 0 → visible)
  const logoProg = spring({ frame, fps, config: { damping: 12, stiffness: 90 } })
  const logoOpacity = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" })

  // Tagline starts at frame 20 (was 65)
  const tagOpacity = interpolate(frame, [20, 36], [0, 1], { extrapolateRight: "clamp" })
  const tagY = interpolate(frame, [20, 36], [14, 0], { extrapolateRight: "clamp" })

  // CTA button starts at frame 50 (was 105)
  // Badge starts at frame 90 (was 145)
  const showBadge = frame >= 90
  const badgeProg = spring({
    frame: Math.max(0, frame - 90),
    fps,
    config: { damping: 10, stiffness: 200 },
  })

  // Seal starts at frame 140 (was 170)
  const sealOpacity = interpolate(frame, [140, 153], [0, 1], { extrapolateRight: "clamp" })
  const sealProg = spring({ frame: Math.max(0, frame - 140), fps, config: { damping: 15, stiffness: 120 } })

  return (
    <AbsoluteFill style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <ManyBackground />

      {/* Ghost bubbles floating in the background */}
      <GhostBubble frame={frame} delay={0}   xPos={40}  yPos={160} text="✅ Lead qualificado" />
      <GhostBubble frame={frame} delay={20}  xPos={300} yPos={220} text="📅 Reunião agendada" />
      <GhostBubble frame={frame} delay={40}  xPos={60}  yPos={850} text="💬 Dúvida respondida" />
      <GhostBubble frame={frame} delay={15}  xPos={280} yPos={900} text="⚡ Resposta em 0,3s" />
      <GhostBubble frame={frame} delay={55}  xPos={50}  yPos={500} text="🎯 Lead convertido" />
      <GhostBubble frame={frame} delay={35}  xPos={290} yPos={550} text="🌙 Atendendo às 3h" />

      {/* ── Center content ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          padding: "0 60px",
        }}
      >
        {/* Logo mark + brand name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            opacity: logoOpacity,
            transform: `scale(${logoProg})`,
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #A78BFA 0%, #06B6D4 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 16px 40px rgba(167,139,250,0.45)",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          {/* Brand name */}
          <span
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: "white",
              letterSpacing: -1.5,
              lineHeight: 1,
            }}
          >
            MoltoChat
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            lineHeight: 1.4,
            letterSpacing: -0.3,
            margin: 0,
            opacity: tagOpacity,
            transform: `translateY(${tagY}px)`,
          }}
        >
          Empresa com IA —<br />
          <strong style={{ color: "white", fontWeight: 800 }}>
            atendimento que nunca dorme
          </strong>
        </p>

        {/* CTA Button */}
        <PulseButton frame={frame} fps={fps} startFrame={50} />
      </div>

      {/* ── "Automatizado 24/7" badge ── */}
      {showBadge && (
        <div
          style={{
            position: "absolute",
            bottom: 86,
            left: "50%",
            transform: `translateX(-50%) scale(${badgeProg})`,
            background: "rgba(255,255,255,0.18)",
            border: "1.5px solid rgba(255,255,255,0.35)",
            borderRadius: 999,
            padding: "9px 22px",
            fontSize: 13,
            fontWeight: 700,
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 8,
            whiteSpace: "nowrap",
            zIndex: 20,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#D4FF00",
              display: "inline-block",
              boxShadow: "0 0 8px rgba(212,255,0,0.7)",
            }}
          />
          Automatizado 24/7 — sem equipe técnica
        </div>
      )}

      {/* ── Brand seal ── */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: `translateX(-50%) scale(${sealProg})`,
          opacity: sealOpacity,
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.16)",
          borderRadius: 999,
          padding: "8px 22px",
          whiteSpace: "nowrap",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #A78BFA, #06B6D4)",
          }}
        />
        <span style={{ fontSize: 13, fontWeight: 700, color: "white" }}>
          MoltoChat
        </span>
      </div>
    </AbsoluteFill>
  )
}
