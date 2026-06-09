import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion"
import { ManyBackground } from "./shared/Background"

const IG_GRAD = "linear-gradient(135deg, #833AB4 0%, #FD1D1D 55%, #F77737 100%)"

// ── Hook text pill ───────────────────────────────────────────────────────────
function HookPill() {
  return (
    <div
      style={{
        position: "absolute",
        top: 60,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 20,
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.10)",
          border: "1.5px solid rgba(255,255,255,0.20)",
          borderRadius: 999,
          padding: "20px 52px",
          fontSize: 36,
          fontWeight: 700,
          color: "rgba(255,255,255,0.9)",
          letterSpacing: -0.5,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        Respondendo leads sozinho 👇
      </div>
    </div>
  )
}

// ── Chat bubble (left = client, right = AI) ──────────────────────────────────
function Bubble({
  text,
  side,
  frame,
  startFrame,
  fps,
  igGradient = false,
}: {
  text: string
  side: "left" | "right"
  frame: number
  startFrame: number
  fps: number
  igGradient?: boolean
}) {
  const lf = frame - startFrame
  if (lf < 0) return null
  const prog = spring({ frame: lf, fps, config: { damping: 14, stiffness: 100 } })
  const opacity = Math.min(lf / 7, 1)
  const isLeft = side === "left"
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        opacity,
        transform: `translateY(${(1 - prog) * 50}px)`,
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          padding: "20px 26px",
          borderRadius: isLeft ? "36px 36px 36px 8px" : "36px 36px 8px 36px",
          background: isLeft ? "#F0F0F3" : igGradient ? IG_GRAD : "#0095F6",
          color: isLeft ? "#1A1A2E" : "white",
          fontSize: 32,
          lineHeight: 1.5,
          boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 450,
        }}
      >
        {text}
      </div>
    </div>
  )
}

// ── Three-dot typing indicator ────────────────────────────────────────────────
function TypingDots({ frame, visible }: { frame: number; visible: boolean }) {
  if (!visible) return null
  const d = (offset: number) =>
    interpolate((frame + offset) % 18, [0, 6, 12, 18], [0.3, 1, 0.3, 0.3])
  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          background: "#F0F0F3",
          padding: "20px 28px",
          borderRadius: "36px 36px 36px 8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
        }}
      >
        {[0, 6, 12].map((off, i) => (
          <div
            key={i}
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#999",
              opacity: d(off),
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ── Main composition ─────────────────────────────────────────────────────────
// Timing (210 frames / 30 fps = 7 s):
//  0–14   : hook pill visible
// 15–39   : white card slides up
// 40–61   : client bubble
// 62–91   : typing dots
// 92–141  : AI response bubble
// 142–174 : "respondido automaticamente" badge pops
// 175–210 : brand seal fades in
export function InstagramLead() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const cardProg = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: { damping: 15, stiffness: 85 },
  })

  const showTyping = frame >= 62 && frame < 92

  const showBadge = frame >= 142
  const badgeProg = spring({
    frame: Math.max(0, frame - 142),
    fps,
    config: { damping: 10, stiffness: 220 },
  })

  const sealOpacity = interpolate(frame, [175, 188], [0, 1], {
    extrapolateRight: "clamp",
  })
  const sealProg = spring({
    frame: Math.max(0, frame - 175),
    fps,
    config: { damping: 15, stiffness: 120 },
  })

  return (
    <AbsoluteFill style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <ManyBackground />
      <HookPill />

      {/* ── White chat card ── */}
      <div
        style={{
          position: "absolute",
          top: 178,
          left: 55,
          right: 55,
          bottom: 110,
          background: "white",
          borderRadius: 40,
          boxShadow: "0 32px 80px rgba(0,0,0,0.40)",
          overflow: "hidden",
          transform: `translateY(${(1 - cardProg) * 40}px)`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Instagram DM header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            padding: "26px 32px",
            borderBottom: "2px solid #F2F2F2",
            flexShrink: 0,
          }}
        >
          {/* Avatar with IG gradient ring */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: IG_GRAD,
              padding: 4,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 800,
                color: "#E1306C",
              }}
            >
              M
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: "#1A1A2E",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              molto.chat
              {/* Instagram verified checkmark */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#0095F6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div style={{ fontSize: 22, color: "#aaa", marginTop: 4 }}>
              Direct Message
            </div>
          </div>

          {/* Instagram icon */}
          <svg
            viewBox="0 0 24 24"
            width="42"
            height="42"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="igG1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#833AB4" />
                <stop offset="100%" stopColor="#F77737" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#igG1)" />
            <circle cx="12" cy="12" r="4" stroke="url(#igG1)" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#igG1)" />
          </svg>
        </div>

        {/* Messages area — top-aligned so messages appear right below header */}
        <div
          style={{
            flex: 1,
            padding: "24px 28px 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 14,
            background: "#FAFAFA",
          }}
        >
          <Bubble
            text="Oi, ainda tem vaga na turma? 🙋"
            side="left"
            frame={frame}
            startFrame={40}
            fps={fps}
          />
          <TypingDots frame={frame} visible={showTyping} />
          <Bubble
            text="Oi! Sim 😊 temos 3 vagas. Quer que eu te mande os valores?"
            side="right"
            frame={frame}
            startFrame={92}
            fps={fps}
            igGradient
          />
        </div>

        {/* Input bar */}
        <div
          style={{
            padding: "18px 32px",
            borderTop: "2px solid #F2F2F2",
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              flex: 1,
              background: "#F2F2F2",
              borderRadius: 999,
              padding: "16px 26px",
              fontSize: 26,
              color: "#bbb",
            }}
          >
            Mensagem...
          </div>
          <svg viewBox="0 0 24 24" width="38" height="38" fill="#E1306C">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
      </div>

      {/* ── "Respondido automaticamente" badge ── */}
      {showBadge && (
        <div
          style={{
            position: "absolute",
            bottom: 96,
            left: "50%",
            transform: `translateX(-50%) scale(${badgeProg})`,
            background: IG_GRAD,
            color: "white",
            borderRadius: 999,
            padding: "18px 40px",
            fontSize: 28,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 8px 28px rgba(131,58,180,0.45)",
            whiteSpace: "nowrap",
            zIndex: 30,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          ⚡ respondido automaticamente
        </div>
      )}

      {/* ── Brand seal ── */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: `translateX(-50%) scale(${sealProg})`,
          opacity: sealOpacity,
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 999,
          padding: "14px 36px",
          whiteSpace: "nowrap",
          zIndex: 10,
        }}
      >
        <div
          style={{ width: 28, height: 28, borderRadius: "50%", background: IG_GRAD }}
        />
        <span
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "white",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          MoltoChat
        </span>
      </div>
    </AbsoluteFill>
  )
}
