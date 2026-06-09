import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion"
import { ManyBackground } from "./shared/Background"

const WA_GREEN = "#25D366"
const IG_COLOR = "#E1306C"

interface ConvCard {
  platform: "whatsapp" | "instagram"
  name: string
  preview: string
  time: string
}

const CARDS: ConvCard[] = [
  { platform: "whatsapp", name: "Ana Lima",     preview: "Sim, temos vagas disponíveis!", time: "09:02" },
  { platform: "instagram", name: "joao_dev",    preview: "Claro! Enviei os valores por DM 👇", time: "09:04" },
  { platform: "whatsapp", name: "Pedro Souza",  preview: "Agendamento confirmado ✅",          time: "09:07" },
  { platform: "instagram", name: "mari.costa",  preview: "Oi! Temos 3 vagas. Quer saber mais?", time: "09:10" },
  { platform: "whatsapp", name: "Carla Dias",   preview: "Aulas: seg–sex, 19h às 22h 📚",      time: "09:13" },
  { platform: "instagram", name: "r.ferreira_", preview: "Aqui está o link de acesso 🔗",       time: "09:15" },
]

// ── Platform icon ──────────────────────────────────────────────────────────────
function PlatformIcon({ platform }: { platform: "whatsapp" | "instagram" }) {
  if (platform === "whatsapp") {
    return (
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: WA_GREEN,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>
    )
  }
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 55%, #F77737 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    </div>
  )
}

// ── Single conversation card ───────────────────────────────────────────────────
function ConvCard({
  card,
  frame,
  startFrame,
  fps,
}: {
  card: ConvCard
  frame: number
  startFrame: number
  fps: number
}) {
  const lf = frame - startFrame
  if (lf < 0) return null

  const prog = spring({ frame: lf, fps, config: { damping: 14, stiffness: 95 } })
  const opacity = Math.min(lf / 8, 1)

  // Green check appears 25 frames after the card
  const checkLf = frame - (startFrame + 25)
  const checkProg = checkLf >= 0
    ? spring({ frame: checkLf, fps, config: { damping: 10, stiffness: 200 } })
    : 0

  return (
    <div
      style={{
        background: "white",
        borderRadius: 18,
        padding: "12px 14px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
        opacity,
        transform: `translateY(${(1 - prog) * 24}px)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PlatformIcon platform={card.platform} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#1A1A2E",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{card.name}</span>
          <span style={{ fontSize: 10, color: "#aaa", fontWeight: 400 }}>{card.time}</span>
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#666",
            marginTop: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {card.preview}
        </div>
      </div>

      {/* Green "respondido" check badge */}
      {checkLf >= 0 && (
        <div
          style={{
            position: "absolute",
            right: 14,
            top: "50%",
            transform: `translateY(-50%) scale(${checkProg})`,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: WA_GREEN,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  )
}

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ frame, fps }: { frame: number; fps: number }) {
  const startFrame = 80
  const lf = frame - startFrame
  if (lf < 0) return null

  const prog = spring({ frame: lf, fps, config: { damping: 18, stiffness: 70 } })
  const count = Math.round(interpolate(prog, [0, 1], [0, 127]))
  const opacity = Math.min(lf / 10, 1)

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.10)",
        border: "1.5px solid rgba(255,255,255,0.18)",
        borderRadius: 18,
        padding: "12px 22px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity,
        transform: `scale(${Math.min(prog * 1.05, 1)})`,
      }}
    >
      <span
        style={{
          fontSize: 36,
          fontWeight: 900,
          color: "white",
          letterSpacing: -1,
          lineHeight: 1,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        +{count}
      </span>
      <span
        style={{
          fontSize: 11,
          color: "rgba(255,255,255,0.75)",
          fontWeight: 600,
          letterSpacing: 0.4,
          marginTop: 3,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        respostas hoje
      </span>
    </div>
  )
}

// ── Main composition ──────────────────────────────────────────────────────────
// Timing — stagger every 18 frames starting at frame 20:
//  0–19   : hook pill
// 20–180  : cards appear (stagger = 18f each)
// 80–180  : counter animates
// 175–210 : brand seal
export function EscalaConversas() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const hookProg = spring({ frame, fps, config: { damping: 12, stiffness: 80 } })

  const sealOpacity = interpolate(frame, [175, 188], [0, 1], { extrapolateRight: "clamp" })
  const sealProg = spring({ frame: Math.max(0, frame - 175), fps, config: { damping: 15, stiffness: 120 } })

  return (
    <AbsoluteFill style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <ManyBackground />

      {/* Hook pill */}
      <div
        style={{
          position: "absolute",
          top: 72,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 20,
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.18)",
            border: "1.5px solid rgba(255,255,255,0.32)",
            borderRadius: 999,
            padding: "10px 28px",
            fontSize: 16,
            fontWeight: 700,
            color: "white",
            letterSpacing: -0.3,
          }}
        >
          Centenas de atendimentos simultâneos ⚡
        </div>
      </div>

      {/* Counter — top right inside main content area */}
      <div
        style={{
          position: "absolute",
          top: 148,
          left: 55,
          right: 55,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Counter frame={frame} fps={fps} />
      </div>

      {/* Cards grid */}
      <div
        style={{
          position: "absolute",
          top: 210,
          left: 55,
          right: 55,
          bottom: 98,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          overflow: "hidden",
        }}
      >
        {CARDS.map((card, i) => (
          <ConvCard
            key={i}
            card={card}
            frame={frame}
            startFrame={20 + i * 18}
            fps={fps}
          />
        ))}
      </div>

      {/* Brand seal */}
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
          border: "1px solid rgba(255,255,255,0.18)",
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
