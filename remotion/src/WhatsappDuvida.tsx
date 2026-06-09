import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion"
import { ManyBackground } from "./shared/Background"

const WA_GREEN = "#25D366"
const WA_DARK = "#075E54"

// ── Hook pill ─────────────────────────────────────────────────────────────────
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
        Tirando dúvidas 24h ⏰
      </div>
    </div>
  )
}

// ── Chat bubble ───────────────────────────────────────────────────────────────
function Bubble({
  text,
  side,
  frame,
  startFrame,
  fps,
}: {
  text: string
  side: "left" | "right"
  frame: number
  startFrame: number
  fps: number
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
          background: isLeft ? "#FFFFFF" : "#DCF8C6",
          color: "#1A1A2E",
          fontSize: 32,
          lineHeight: 1.5,
          boxShadow: "0 1px 8px rgba(0,0,0,0.12)",
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 450,
        }}
      >
        {text}
        <span
          style={{
            display: "block",
            fontSize: 20,
            color: "#999",
            textAlign: "right",
            marginTop: 6,
          }}
        >
          {isLeft ? "09:14" : "09:14"}
        </span>
      </div>
    </div>
  )
}

// ── Typing dots ────────────────────────────────────────────────────────────────
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
          background: "white",
          padding: "20px 28px",
          borderRadius: "36px 36px 36px 8px",
          boxShadow: "0 1px 8px rgba(0,0,0,0.10)",
        }}
      >
        {[0, 6, 12].map((off, i) => (
          <div
            key={i}
            style={{ width: 14, height: 14, borderRadius: "50%", background: "#999", opacity: d(off) }}
          />
        ))}
      </div>
    </div>
  )
}

// ── Double blue checkmarks ─────────────────────────────────────────────────────
function DoubleCheck({ frame, startFrame, fps }: { frame: number; startFrame: number; fps: number }) {
  const lf = frame - startFrame
  if (lf < 0) return null
  const prog = spring({ frame: lf, fps, config: { damping: 12, stiffness: 150 } })
  const opacity = Math.min(lf / 6, 1)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: 8,
        opacity,
        transform: `scale(${prog})`,
        transformOrigin: "right center",
      }}
    >
      <svg width="44" height="28" viewBox="0 0 22 14" fill="none">
        <path d="M1 7L5 11L13 3" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7L11 11L19 3" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

// ── Main composition ──────────────────────────────────────────────────────────
// Timing:
//  0–14  : hook pill
// 15–39  : card slides up
// 40–64  : client message
// 65–94  : typing dots
// 95–144 : AI response
// 145–169: blue checks appear
// 170–210: brand seal
export function WhatsappDuvida() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const cardProg = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: { damping: 15, stiffness: 85 },
  })

  const showTyping = frame >= 65 && frame < 95

  const sealOpacity = interpolate(frame, [170, 183], [0, 1], { extrapolateRight: "clamp" })
  const sealProg = spring({ frame: Math.max(0, frame - 170), fps, config: { damping: 15, stiffness: 120 } })

  return (
    <AbsoluteFill style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <ManyBackground />
      <HookPill />

      {/* ── WhatsApp chat card ── */}
      <div
        style={{
          position: "absolute",
          top: 178,
          left: 55,
          right: 55,
          bottom: 110,
          background: "#ECE5DD",
          borderRadius: 40,
          boxShadow: "0 32px 80px rgba(0,0,0,0.40)",
          overflow: "hidden",
          transform: `translateY(${(1 - cardProg) * 40}px)`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* WhatsApp header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            padding: "26px 32px",
            background: WA_DARK,
            flexShrink: 0,
          }}
        >
          {/* Back arrow */}
          <svg width="38" height="38" viewBox="0 0 24 24" fill="white">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>

          {/* Avatar */}
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: "50%",
              background: WA_GREEN,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              color: "white",
              flexShrink: 0,
            }}
          >
            M
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 30, fontWeight: 700, color: "white" }}>
              MoltoChat AI
            </div>
            <div
              style={{
                fontSize: 22,
                color: "rgba(255,255,255,0.7)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 4,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: WA_GREEN,
                }}
              />
              online
            </div>
          </div>

          {/* WhatsApp icon */}
          <svg viewBox="0 0 24 24" width="42" height="42" fill="white" opacity={0.8}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>

        {/* Messages — top-aligned so content is visible right away */}
        <div
          style={{
            flex: 1,
            padding: "24px 28px 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 14,
          }}
        >
          <Bubble
            text="Bom dia, qual o horário das aulas? 🙏"
            side="left"
            frame={frame}
            startFrame={40}
            fps={fps}
          />
          <TypingDots frame={frame} visible={showTyping} />
          <Bubble
            text="Bom dia! As aulas são de seg a sex, 19h–22h 📚"
            side="right"
            frame={frame}
            startFrame={95}
            fps={fps}
          />
          <DoubleCheck frame={frame} startFrame={145} fps={fps} />
        </div>

        {/* WhatsApp input bar */}
        <div
          style={{
            padding: "18px 28px",
            background: "#F0F0F0",
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              flex: 1,
              background: "white",
              borderRadius: 999,
              padding: "16px 26px",
              fontSize: 26,
              color: "#bbb",
              display: "flex",
              alignItems: "center",
            }}
          >
            Mensagem
          </div>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: WA_GREEN,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 24 24" width="34" height="34" fill="white">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>

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
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: WA_GREEN,
          }}
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
