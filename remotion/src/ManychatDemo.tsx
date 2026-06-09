import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
  Sequence,
} from "remotion"

const BRAND_COLOR = "#0055FF"
const LIME_ACCENT = "#D4FF00"
const BG = "#05050A"

// ----------------------------------------------------
// Instagram Icon SVG Helper
// ----------------------------------------------------
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

// ----------------------------------------------------
// Comment Screen Component (Instagram Feed Mockup)
// ----------------------------------------------------
function CommentScreen({ frame }: { frame: number }) {
  const { fps } = useVideoConfig()
  
  // Animations
  const feedScale = spring({ frame, fps, config: { damping: 15, stiffness: 100 } })
  const cursorX = interpolate(frame, [15, 40], [120, 240], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const cursorOpacity = interpolate(frame, [10, 15, 45, 50], [0, 1, 1, 0], { extrapolateRight: "clamp" })
  
  // Comment appear animation
  const showComment = frame >= 48
  const commentScale = spring({ frame: frame - 48, fps, config: { damping: 12, stiffness: 150 } })
  
  // DM sent popup animation
  const showPopup = frame >= 65
  const popupScale = spring({ frame: frame - 65, fps, config: { damping: 14, stiffness: 120 } })

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", background: BG, padding: 40 }}>
      {/* Container simulating a phone screen */}
      <div
        style={{
          width: 420,
          height: 780,
          background: "#0F0F16",
          borderRadius: 40,
          border: "8px solid #23232A",
          boxShadow: "0 25px 50px rgba(0,0,0,0.8)",
          overflow: "hidden",
          margin: "auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter, system-ui, sans-serif",
          color: "white",
          transform: `scale(${feedScale})`,
        }}
      >
        {/* Instagram Header Mockup */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <InstagramIcon />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: -0.2 }}>Instagram Feed</span>
          <div style={{ width: 24 }} />
        </div>

        {/* Post Owner Profile Info */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 20px" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(45deg, ${LIME_ACCENT}, ${BRAND_COLOR})`, padding: 1.5 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#0F0F16", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: "bold" }}>M</div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: "bold" }}>moltochat.ai</div>
            <div style={{ fontSize: 9, opacity: 0.5 }}>Patrocinado</div>
          </div>
        </div>

        {/* Video / Image Mockup */}
        <div style={{ width: "100%", height: 320, background: "#1C1C24", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: `radial-gradient(circle, ${BRAND_COLOR} 1px, transparent 1px)`, backgroundSize: "16px 16px" }} />
          <span style={{ fontSize: 40 }}>💬</span>
          <span style={{ fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1, marginTop: 15, color: LIME_ACCENT }}>MoltoChat SDR</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>Comente &quot;QUERO&quot; para testar grátis</span>
        </div>

        {/* Post Actions */}
        <div style={{ display: "flex", gap: 15, padding: "12px 20px" }}>
          <span>❤️</span>
          <span>💬</span>
          <span>✈️</span>
        </div>

        {/* Comments Feed Area */}
        <div style={{ flex: 1, padding: "0 20px", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 11, opacity: 0.7 }}>
            <strong>moltochat.ai</strong> Quer revolucionar suas conversões de vendas? Comente abaixo...
          </div>

          {/* User Comment Appearing */}
          {showComment && (
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
                padding: "8px 12px",
                borderRadius: 12,
                transform: `scale(${commentScale})`,
                transformOrigin: "left center",
              }}
            >
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#4B5563", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8 }}>U</div>
              <div style={{ fontSize: 11 }}>
                <strong>@lucas_dev: </strong> QUERO
              </div>
            </div>
          )}
        </div>

        {/* Mock comment input with simulated typing pointer */}
        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)", background: "#111118", display: "flex", alignItems: "center", position: "relative" }}>
          <div style={{ fontSize: 11, opacity: 0.4, flex: 1 }}>
            {frame < 15 ? "Adicione um comentário..." : frame < 40 ? "Q U E R O" : ""}
          </div>
          <span style={{ fontSize: 10, color: BRAND_COLOR, fontWeight: "bold" }}>Publicar</span>

          {/* Typing Cursor Overlay */}
          <div
            style={{
              position: "absolute",
              left: cursorX,
              top: 22,
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: LIME_ACCENT,
              border: "2px solid white",
              boxShadow: "0 2px 10px rgba(212,255,0,0.5)",
              opacity: cursorOpacity,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Automation Triggered Notification (Popup) */}
        {showPopup && (
          <div
            style={{
              position: "absolute",
              bottom: 80,
              left: 20,
              right: 20,
              background: "#10B981",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 16,
              padding: "12px 16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              transform: `scale(${popupScale})`,
              zIndex: 30,
            }}
          >
            <span style={{ fontSize: 18 }}>⚡</span>
            <div>
              <div style={{ fontSize: 11, fontWeight: "bold" }}>Automação MoltoChat SDR</div>
              <div style={{ fontSize: 9, opacity: 0.9 }}>Direct Message enviado com sucesso!</div>
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  )
}

// ----------------------------------------------------
// DM Screen Component (Instagram Direct Message Mockup)
// ----------------------------------------------------
function DMScreen({ frame }: { frame: number }) {
  const fps = 30
  
  // Timing
  const showBubble1 = frame >= 15
  const bubble1Scale = spring({ frame: frame - 15, fps, config: { damping: 15, stiffness: 120 } })

  const showBubble2 = frame >= 50
  const bubble2Scale = spring({ frame: frame - 50, fps, config: { damping: 15, stiffness: 120 } })

  const showTyping = frame >= 5 && frame < 15
  const showTyping2 = frame >= 38 && frame < 50

  const buttonClicked = frame >= 85
  const buttonProgress = spring({ frame: frame - 85, fps, config: { damping: 12, stiffness: 180 } })

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", background: BG, padding: 40 }}>
      {/* Container simulating a phone screen */}
      <div
        style={{
          width: 420,
          height: 780,
          background: "#0F0F16",
          borderRadius: 40,
          border: "8px solid #23232A",
          boxShadow: "0 25px 50px rgba(0,0,0,0.8)",
          overflow: "hidden",
          margin: "auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter, system-ui, sans-serif",
          color: "white",
        }}
      >
        {/* DM Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#111118" }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: `linear-gradient(45deg, ${LIME_ACCENT}, ${BRAND_COLOR})`, padding: 1 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#0F0F16", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: "bold" }}>M</div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: "bold", display: "flex", alignItems: "center", gap: 4 }}>
              MoltoChat
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: BRAND_COLOR }} />
            </div>
            <div style={{ fontSize: 8, opacity: 0.5, letterSpacing: 0.5, textTransform: "uppercase" }}>Agente Inteligente</div>
          </div>
        </div>

        {/* Message Area */}
        <div style={{ flex: 1, padding: 20, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 15 }}>
          
          {/* Typing Indicator 1 */}
          {showTyping && (
            <div style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.05)", padding: "10px 14px", borderRadius: "14px 14px 14px 2px", width: 50 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" />
            </div>
          )}

          {/* Bubble 1 */}
          {showBubble1 && (
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.04)",
                padding: 12,
                borderRadius: "16px 16px 16px 4px",
                maxWidth: "80%",
                fontSize: 12,
                lineHeight: 1.5,
                transform: `scale(${bubble1Scale})`,
                transformOrigin: "left bottom",
              }}
            >
              Olá @lucas_dev! Vi que você comentou <strong>&quot;QUERO&quot;</strong> no nosso post.
            </div>
          )}

          {/* Typing Indicator 2 */}
          {showTyping2 && (
            <div style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.05)", padding: "10px 14px", borderRadius: "14px 14px 14px 2px", width: 50 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
            </div>
          )}

          {/* Bubble 2 (Rich Card with CTA) */}
          {showBubble2 && (
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${BRAND_COLOR}40`,
                padding: 16,
                borderRadius: "16px 16px 16px 4px",
                maxWidth: "80%",
                fontSize: 12,
                lineHeight: 1.5,
                transform: `scale(${bubble2Scale})`,
                transformOrigin: "left bottom",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div>
                Aqui está o seu link exclusivo para testar a plataforma gratuitamente por 14 dias! 👇
              </div>

              {/* Dynamic Interactive Button */}
              <div
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  borderRadius: 10,
                  background: buttonClicked ? "#10B981" : BRAND_COLOR,
                  color: "white",
                  fontSize: 10,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  transform: `scale(${buttonClicked ? buttonProgress : 1})`,
                  transition: "background 0.3s ease",
                }}
              >
                {buttonClicked ? "Acesso Liberado! 🎉" : "Liberar Teste Grátis"}
              </div>
            </div>
          )}

          {/* User cursor clicking button */}
          {frame >= 75 && frame < 95 && (
            <div
              style={{
                position: "absolute",
                left: interpolate(frame, [75, 85], [300, 200], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                top: interpolate(frame, [75, 85], [600, 560], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: LIME_ACCENT,
                border: "2px solid white",
                boxShadow: "0 2px 10px rgba(212,255,0,0.5)",
                zIndex: 40,
              }}
            />
          )}

        </div>

        {/* DM Input mockup */}
        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)", background: "#111118", display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 11, opacity: 0.3, flex: 1 }}>Escreva uma mensagem...</div>
          <span style={{ fontSize: 12, opacity: 0.3 }}>Enviar</span>
        </div>
      </div>
    </AbsoluteFill>
  )
}

export function ManychatDemo() {
  const frame = useCurrentFrame()

  // First 80 frames: Comment Screen (Instagram Post)
  // Next 160 frames: DM Screen (Direct Message automated reply)
  return (
    <AbsoluteFill style={{ background: BG }}>
      {frame < 80 ? (
        <Sequence durationInFrames={80}>
          <CommentScreen frame={frame} />
        </Sequence>
      ) : (
        <Sequence from={80} durationInFrames={160}>
          <DMScreen frame={frame - 80} />
        </Sequence>
      )}
    </AbsoluteFill>
  )
}
