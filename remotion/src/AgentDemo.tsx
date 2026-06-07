import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
  Sequence,
} from "remotion"

const BRAND_COLOR = "#7C6FF5"
const BG = "#F8F7F2"
const DARK = "#171717"

const CHAT = [
  { from: "client", text: "Oi, preciso agendar uma consulta" },
  { from: "ai",     text: "Olá! Claro, posso te ajudar com isso. Qual serviço você precisa?" },
  { from: "client", text: "Uma avaliação odontológica" },
  { from: "ai",     text: "Perfeito! Tenho horários disponíveis amanhã às 10h ou 15h. Qual prefere?" },
  { from: "client", text: "15h está ótimo" },
  { from: "ai",     text: "Agendado! Confirmarei no seu WhatsApp. Até amanhã às 15h 👍" },
]

function ChatBubble({
  msg,
  frame,
  startFrame,
}: {
  msg: { from: string; text: string }
  frame: number
  startFrame: number
}) {
  const { fps } = useVideoConfig()
  const progress = spring({ frame: frame - startFrame, fps, config: { damping: 20, stiffness: 120 } })
  const opacity = interpolate(frame - startFrame, [0, 8], [0, 1], { extrapolateRight: "clamp" })

  const isClient = msg.from === "client"

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isClient ? "flex-end" : "flex-start",
        marginBottom: 12,
        opacity,
        transform: `translateY(${interpolate(progress, [0, 1], [16, 0])}px)`,
      }}
    >
      <div
        style={{
          maxWidth: "72%",
          padding: "10px 14px",
          fontSize: 18,
          lineHeight: 1.5,
          color: isClient ? "#fff" : DARK,
          background: isClient ? BRAND_COLOR : "#fff",
          borderRadius: isClient ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {msg.text}
      </div>
    </div>
  )
}

function TypingDots({ frame, startFrame }: { frame: number; startFrame: number }) {
  const opacity = interpolate(frame - startFrame, [0, 6], [0, 1], { extrapolateRight: "clamp" })
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 12, opacity }}>
      <div
        style={{
          padding: "10px 16px",
          background: "#fff",
          borderRadius: "16px 16px 16px 4px",
          display: "flex",
          gap: 5,
          alignItems: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#94A3B8",
              transform: `translateY(${Math.sin((frame + i * 8) * 0.3) * 4}px)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 360,
        background: "#fff",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* WA header */}
      <div
        style={{
          background: "#075E54",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20 2H4C3 2 2 3 2 4v18l4-4h14c1 0 2-1 2-2V4c0-1-1-2-2-2z" /></svg>
        </div>
        <div>
          <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>Assistente SuperAI</div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} />
            online
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div
        style={{
          background: "#ECE5DD",
          padding: "16px 12px",
          minHeight: 400,
        }}
      >
        {children}
      </div>
    </div>
  )
}

function LeadScore({ frame, startFrame }: { frame: number; startFrame: number }) {
  const { fps } = useVideoConfig()
  const progress = spring({ frame: frame - startFrame, fps, config: { damping: 18, stiffness: 100 } })
  const opacity = interpolate(frame - startFrame, [0, 10], [0, 1], { extrapolateRight: "clamp" })

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${interpolate(progress, [0, 1], [20, 0])}px)`,
        background: "#F0FDF4",
        border: "1px solid #BBF7D0",
        borderRadius: 12,
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 8,
      }}
    >
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#16A34A" }}>Lead quente ✓</div>
        <div style={{ fontSize: 11, color: "#64748B", marginTop: 2 }}>Agendamento confirmado</div>
      </div>
      <div style={{ fontSize: 22, fontWeight: 800, color: "#16A34A" }}>Alta</div>
    </div>
  )
}

export function AgentDemo() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  // Each message appears every 50 frames (~1.67s at 30fps)
  const MSG_INTERVAL = 50
  const TYPING_DURATION = 25

  // Logo intro
  const logoOpacity = interpolate(frame, [0, 20, 80, 100], [0, 1, 1, 0], { extrapolateRight: "clamp" })
  const logoScale = interpolate(frame, [0, 20], [0.85, 1], { extrapolateRight: "clamp" })

  // Chat phase starts at frame 90
  const CHAT_START = 90
  const chatOpacity = interpolate(frame, [CHAT_START - 10, CHAT_START + 10], [0, 1], { extrapolateRight: "clamp" })

  return (
    <AbsoluteFill style={{ background: BG, fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* ── Intro logo ── */}
      {frame < 100 && (
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: logoOpacity,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              background: BRAND_COLOR,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
              transform: `scale(${logoScale})`,
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="white"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <div style={{ fontSize: 36, fontWeight: 600, color: DARK, letterSpacing: -1 }}>SuperAI</div>
          <div style={{ fontSize: 16, color: "#94A3B8", marginTop: 8 }}>Agente SDR em ação</div>
        </AbsoluteFill>
      )}

      {/* ── Chat demo ── */}
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: chatOpacity,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <PhoneFrame>
            {CHAT.map((msg, i) => {
              const msgFrame = CHAT_START + i * MSG_INTERVAL
              const showTyping = msg.from === "ai" && frame >= msgFrame - TYPING_DURATION && frame < msgFrame
              const showMsg = frame >= msgFrame

              return (
                <div key={i}>
                  {showTyping && (
                    <TypingDots frame={frame} startFrame={msgFrame - TYPING_DURATION} />
                  )}
                  {showMsg && (
                    <ChatBubble msg={msg} frame={frame} startFrame={msgFrame} />
                  )}
                </div>
              )
            })}

            {/* Lead score after last message */}
            {frame >= CHAT_START + CHAT.length * MSG_INTERVAL + 20 && (
              <LeadScore frame={frame} startFrame={CHAT_START + CHAT.length * MSG_INTERVAL + 20} />
            )}
          </PhoneFrame>

          {/* Caption */}
          {frame >= CHAT_START && (
            <div
              style={{
                fontSize: 15,
                color: "#94A3B8",
                opacity: interpolate(frame, [CHAT_START, CHAT_START + 20], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              Qualificação e agendamento automático via WhatsApp
            </div>
          )}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  )
}
