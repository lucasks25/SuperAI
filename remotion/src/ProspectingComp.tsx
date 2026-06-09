import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion"

const BRAND_COLOR = "#0055FF"
const LIME_ACCENT = "#D4FF00"
const BG = "#05050A"

export function ProspectingComp() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  // Scanning sweep line animation
  const sweepY = interpolate(frame, [0, 180], [0, 500], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  // Staggered lead fields reveal
  const field1 = spring({ frame: frame - 20, fps, config: { damping: 14, stiffness: 100 } })
  const field2 = spring({ frame: frame - 45, fps, config: { damping: 14, stiffness: 100 } })
  const field3 = spring({ frame: frame - 70, fps, config: { damping: 14, stiffness: 100 } })
  const field4 = spring({ frame: frame - 95, fps, config: { damping: 14, stiffness: 100 } })

  // Banner reveal animation
  const bannerProgress = spring({ frame: frame - 110, fps, config: { damping: 12, stiffness: 100 } })
  const bannerOpacity = interpolate(frame - 110, [0, 15], [0, 1], { extrapolateRight: "clamp" })

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", background: BG, padding: 40, fontFamily: "Inter, system-ui, sans-serif", color: "white" }}>
      {/* Browser mockup window wrapper */}
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
        }}
      >
        {/* Header bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "#111118" }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F56" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#27C93F" }} />
          </div>
          <span style={{ fontSize: 11, opacity: 0.5, fontFamily: "monospace" }}>moltochat.ai/enricher</span>
          <div style={{ width: 40 }} />
        </div>

        {/* Content area */}
        <div style={{ flex: 1, padding: 24, display: "flex", flexDirection: "column", gap: 24, position: "relative" }}>
          
          {/* Main search and analysis title */}
          <div>
            <span style={{ fontSize: 10, fontWeight: "bold", color: LIME_ACCENT, letterSpacing: 1, textTransform: "uppercase" }}>Lead Enriched API</span>
            <h3 style={{ fontSize: 18, fontWeight: 900, marginTop: 4, letterSpacing: -0.5 }}>Enriquecendo Lead...</h3>
          </div>

          {/* Target card */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 24, padding: 20, display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
            
            {/* Lead identification */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `linear-gradient(135deg, ${BRAND_COLOR}, ${LIME_ACCENT})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                LS
              </div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: "bold" }}>Lucas Silva</h4>
                <p style={{ fontSize: 10, opacity: 0.5 }}>Fundador, DevSaaS</p>
              </div>
            </div>

            <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            {/* Enriched fields list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              
              {/* Field 1: Email */}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", padding: 10, borderRadius: 12, opacity: interpolate(field1, [0, 1], [0, 1]), transform: `translateX(${interpolate(field1, [0, 1], [-20, 0])}px)` }}>
                <span style={{ opacity: 0.5 }}>E-mail corporativo:</span>
                <span style={{ fontWeight: "bold", color: BRAND_COLOR }}>lucas@devsaas.com</span>
              </div>

              {/* Field 2: WhatsApp */}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", padding: 10, borderRadius: 12, opacity: interpolate(field2, [0, 1], [0, 1]), transform: `translateX(${interpolate(field2, [0, 1], [-20, 0])}px)` }}>
                <span style={{ opacity: 0.5 }}>WhatsApp Direct:</span>
                <span style={{ fontWeight: "bold", color: "#25D366" }}>+55 11 99822-1243</span>
              </div>

              {/* Field 3: Company size */}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", padding: 10, borderRadius: 12, opacity: interpolate(field3, [0, 1], [0, 1]), transform: `translateX(${interpolate(field3, [0, 1], [-20, 0])}px)` }}>
                <span style={{ opacity: 0.5 }}>Faturamento anual:</span>
                <span style={{ fontWeight: "bold", color: LIME_ACCENT }}>R$ 1.2M - 2.4M</span>
              </div>

              {/* Field 4: Status check */}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", padding: 10, borderRadius: 12, opacity: interpolate(field4, [0, 1], [0, 1]), transform: `translateX(${interpolate(field4, [0, 1], [-20, 0])}px)` }}>
                <span style={{ opacity: 0.5 }}>Score de conversão:</span>
                <span style={{ fontWeight: "bold", color: "#10B981" }}>98% (Excelente)</span>
              </div>

            </div>

            {/* Sweep light scanner effect */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: sweepY,
                height: 2,
                background: `linear-gradient(to right, transparent, ${LIME_ACCENT}, transparent)`,
                boxShadow: `0 0 10px 2px ${LIME_ACCENT}`,
                pointerEvents: "none",
              }}
            />
          </div>

          {/* AI message banner */}
          {frame >= 110 && (
            <div
              style={{
                background: "rgba(0,85,255,0.08)",
                border: `1px solid ${BRAND_COLOR}40`,
                borderRadius: 16,
                padding: 16,
                fontSize: 11,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.85)",
                opacity: bannerOpacity,
                transform: `translateY(${interpolate(bannerProgress, [0, 1], [15, 0])}px)`,
              }}
            >
              🚀 <strong>Insights IA:</strong> Lead altamente propenso a assinar o plano Pro. Agente automatizado de vendas iniciado.
            </div>
          )}

        </div>

        {/* Input area */}
        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)", background: "#111118", display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 11, opacity: 0.3, flex: 1 }}>Processando...</div>
          <span style={{ fontSize: 12, opacity: 0.5, color: LIME_ACCENT, fontWeight: "bold" }}>Concluído</span>
        </div>
      </div>
    </AbsoluteFill>
  )
}
