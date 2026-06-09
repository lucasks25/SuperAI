import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion"

// ── Brand icons ──────────────────────────────────────────────────────────────
const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path d="M22.5 19.3c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.95 1.2-.18.2-.35.22-.65.07a8.2 8.2 0 01-2.4-1.48 9 9 0 01-1.67-2.07c-.17-.3 0-.46.13-.6.13-.13.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.7-1.7-.96-2.32-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.07-.8.37-.27.3-1.03 1-1.03 2.45s1.06 2.84 1.2 3.04c.16.2 2.08 3.17 5.03 4.45.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.73-.7 1.97-1.39.25-.68.25-1.27.18-1.39-.07-.12-.27-.2-.57-.34z" fill="white" />
  </svg>
)
const CalendarIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <rect width="32" height="32" rx="7" fill="white" />
    <rect x="8" y="9" width="16" height="15" rx="2" fill="none" stroke="#4285F4" strokeWidth="1.5" />
    <rect x="11" y="7" width="2.5" height="4" rx="1.2" fill="#EA4335" />
    <rect x="18.5" y="7" width="2.5" height="4" rx="1.2" fill="#EA4335" />
    <rect x="8" y="14" width="16" height="1.5" fill="#4285F4" />
    <rect x="11" y="17" width="4" height="4" rx="0.8" fill="#0F9D58" />
  </svg>
)
const N8NIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <rect width="32" height="32" rx="7" fill="#FF6D00" />
    <circle cx="9" cy="16" r="3.5" fill="white" />
    <circle cx="23" cy="16" r="3.5" fill="white" />
    <line x1="12.5" y1="16" x2="19.5" y2="16" stroke="white" strokeWidth="2" />
    <circle cx="16" cy="9" r="3" fill="white" />
    <line x1="16" y1="12" x2="16" y2="15" stroke="white" strokeWidth="1.5" />
  </svg>
)
const CRMIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <rect width="32" height="32" rx="7" fill="#7C6FF5" />
    <circle cx="16" cy="12" r="4.5" fill="white" opacity="0.95" />
    <path d="M7 25c0-5 4-8 9-8s9 3 9 8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
)
const PostgresIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <rect width="32" height="32" rx="7" fill="#336791" />
    <ellipse cx="16" cy="11" rx="6.5" ry="3" fill="white" opacity="0.9" />
    <rect x="9.5" y="11" width="13" height="10" fill="#336791" />
    <ellipse cx="16" cy="21" rx="6.5" ry="3" fill="white" opacity="0.7" />
    <ellipse cx="16" cy="16" rx="6.5" ry="2.5" fill="white" opacity="0.45" />
  </svg>
)
const WebhookIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <rect width="32" height="32" rx="7" fill="#0EA5E9" />
    <path d="M9 16 C9 9.5 23 9.5 23 16 C23 22.5 9 22.5 9 16" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="9" cy="16" r="2.5" fill="white" />
    <circle cx="23" cy="16" r="2.5" fill="white" />
  </svg>
)
const SheetsIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <rect width="32" height="32" rx="7" fill="#0F9D58" />
    <rect x="8" y="9" width="16" height="14" rx="1.5" fill="white" opacity="0.15" />
    <rect x="8" y="9" width="16" height="4" rx="1.5" fill="white" opacity="0.85" />
    <line x1="16" y1="9" x2="16" y2="23" stroke="white" strokeWidth="1" opacity="0.55" />
    <line x1="8" y1="16" x2="24" y2="16" stroke="white" strokeWidth="1" opacity="0.55" />
    <line x1="8" y1="20" x2="24" y2="20" stroke="white" strokeWidth="1" opacity="0.55" />
  </svg>
)
const EmailIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <rect width="32" height="32" rx="7" fill="#64748B" />
    <rect x="6" y="10" width="20" height="13" rx="2" fill="none" stroke="white" strokeWidth="1.8" />
    <path d="M6 12l10 7 10-7" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" />
  </svg>
)
const EvolutionIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <rect width="32" height="32" rx="7" fill="#1a1a2e" />
    <circle cx="16" cy="16" r="6.5" fill="none" stroke="white" strokeWidth="1.8" />
    <circle cx="16" cy="16" r="3" fill="white" />
    <line x1="16" y1="7" x2="16" y2="9.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="22.5" x2="16" y2="25" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="7" y1="16" x2="9.5" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="22.5" y1="16" x2="25" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const DashboardIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <rect width="32" height="32" rx="7" fill="#4F46E5" />
    <rect x="8" y="18" width="4.5" height="6" rx="1" fill="white" opacity="0.65" />
    <rect x="14" y="14" width="4.5" height="10" rx="1" fill="white" opacity="0.82" />
    <rect x="20" y="9" width="4.5" height="15" rx="1" fill="white" />
    <path d="M9 16 L14 12 L19 14 L24 8" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const INTEGRATIONS = [
  { name: "WhatsApp",   Icon: WhatsAppIcon,  color: "#25D366" },
  { name: "G. Calendar",Icon: CalendarIcon,  color: "#4285F4" },
  { name: "n8n",        Icon: N8NIcon,       color: "#FF6D00" },
  { name: "CRM",        Icon: CRMIcon,       color: "#7C6FF5" },
  { name: "PostgreSQL", Icon: PostgresIcon,  color: "#336791" },
  { name: "Webhooks",   Icon: WebhookIcon,   color: "#0EA5E9" },
  { name: "Planilhas",  Icon: SheetsIcon,    color: "#0F9D58" },
  { name: "E-mail",     Icon: EmailIcon,     color: "#64748B" },
  { name: "Evolution",  Icon: EvolutionIcon, color: "#a78bfa" },
  { name: "Dashboard",  Icon: DashboardIcon, color: "#4F46E5" },
]

// ── Pulse particle travelling along a line ───────────────────────────────────
function Pulse({
  fromX, fromY, toX, toY, frame, offset, color,
}: {
  fromX: number; fromY: number; toX: number; toY: number
  frame: number; offset: number; color: string
}) {
  const period = 80
  const t = ((frame + offset) % period) / period
  const x = fromX + (toX - fromX) * t
  const y = fromY + (toY - fromY) * t
  const op = Math.sin(t * Math.PI)
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: color,
        boxShadow: `0 0 12px 4px ${color}99`,
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        opacity: op * 0.9,
        pointerEvents: "none",
      }}
    />
  )
}

// ── SVG connection lines ──────────────────────────────────────────────────────
function ConnectionLines({
  positions,
  frame,
  showFrom,
}: {
  positions: { x: number; y: number; color: string }[]
  frame: number
  showFrom: number
}) {
  const W = 1400
  const H = 700
  const cx = W / 2
  const cy = H / 2

  return (
    <svg
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
      width={W}
      height={H}
    >
      <defs>
        {positions.map((p, i) => (
          <linearGradient key={i} id={`lg${i}`} x1={cx} y1={cy} x2={cx + p.x} y2={cy + p.y} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={p.color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={p.color} stopOpacity="0.08" />
          </linearGradient>
        ))}
      </defs>
      {positions.map((p, i) => {
        const progress = interpolate(frame - showFrom - i * 5, [0, 25], [0, 1], { extrapolateRight: "clamp" })
        const ex = cx + p.x * progress
        const ey = cy + p.y * progress
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={ex}
            y2={ey}
            stroke={`url(#lg${i})`}
            strokeWidth="1"
          />
        )
      })}
    </svg>
  )
}

// ── Orbit node ────────────────────────────────────────────────────────────────
function OrbitNode({
  item, index, total, radius, frame, startFrame, speed,
}: {
  item: typeof INTEGRATIONS[0]; index: number; total: number
  radius: number; frame: number; startFrame: number; speed: number
}) {
  const { fps } = useVideoConfig()
  const baseAngle = (index / total) * Math.PI * 2
  const elapsed = (frame - startFrame) / fps
  const angle = baseAngle + elapsed * speed

  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  const delay = index * 6
  const entryProgress = spring({
    frame: frame - startFrame - delay,
    fps,
    config: { damping: 16, stiffness: 90 },
  })
  const opacity = interpolate(frame - startFrame - delay, [0, 14], [0, 1], { extrapolateRight: "clamp" })
  const { Icon } = item

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${entryProgress})`,
        opacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 7,
        zIndex: 10,
      }}
    >
      {/* Glow ring behind icon */}
      <div
        style={{
          position: "absolute",
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${item.color}30 0%, transparent 70%)`,
          top: -8,
          left: -8,
        }}
      />
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(12px)",
          boxShadow: `0 4px 20px ${item.color}40, 0 1px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${item.color}40`,
          position: "relative",
        }}
      >
        <Icon />
      </div>
      <span
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: "rgba(255,255,255,0.55)",
          whiteSpace: "nowrap",
          letterSpacing: "0.02em",
        }}
      >
        {item.name}
      </span>
    </div>
  )
}

// ── Main composition ──────────────────────────────────────────────────────────
export function IntegrationsOrbit() {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()

  // Timing phases
  const PHASE_HUB   = 10   // hub appears
  const PHASE_INNER = 40   // inner ring appears
  const PHASE_OUTER = 70   // outer ring appears
  const PHASE_LINES = 100  // connection lines draw
  const PHASE_PULSE = 130  // pulses start

  const hubProgress = spring({ frame: frame - PHASE_HUB, fps, config: { damping: 18, stiffness: 110 } })
  const hubOpacity  = interpolate(frame - PHASE_HUB, [0, 18], [0, 1], { extrapolateRight: "clamp" })

  const innerItems = INTEGRATIONS.slice(0, 5)
  const outerItems = INTEGRATIONS.slice(5)

  const INNER_R = 165
  const OUTER_R = 295

  const pulse = 1 + Math.sin(frame * 0.06) * 0.025

  // Pre-compute current positions for connection lines
  void width; void height
  const innerPositions = innerItems.map((item, i) => {
    const baseAngle = (i / 5) * Math.PI * 2
    const elapsed = (frame - PHASE_INNER) / fps
    const angle = baseAngle + elapsed * 0.4
    return {
      x: Math.cos(angle) * INNER_R,
      y: Math.sin(angle) * INNER_R,
      color: item.color,
    }
  })
  const outerPositions = outerItems.map((item, i) => {
    const baseAngle = (i / 5) * Math.PI * 2
    const elapsed = (frame - PHASE_OUTER) / fps
    const angle = baseAngle + elapsed * -0.25
    return {
      x: Math.cos(angle) * OUTER_R,
      y: Math.sin(angle) * OUTER_R,
      color: item.color,
    }
  })

  const allPositions = [...innerPositions, ...outerPositions]
  const linesOpacity = interpolate(frame - PHASE_LINES, [0, 20], [0, 1], { extrapolateRight: "clamp" })
  const pulsesOpacity = interpolate(frame - PHASE_PULSE, [0, 20], [0, 1], { extrapolateRight: "clamp" })

  // Background radial rings
  const ringOpacity = interpolate(frame - PHASE_HUB, [0, 40], [0, 1], { extrapolateRight: "clamp" })

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(ellipse 80% 80% at 50% 50%, #12102a 0%, #0A0A14 50%, #060608 100%)",
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 700,
          height: 700,
          marginLeft: -350,
          marginTop: -350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,111,245,0.08) 0%, transparent 65%)",
          opacity: ringOpacity,
        }}
      />

      {/* Dashed orbit rings */}
      {[INNER_R, OUTER_R].map((r, ri) => (
        <div
          key={r}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: r * 2,
            height: r * 2,
            marginLeft: -r,
            marginTop: -r,
            borderRadius: "50%",
            border: "1px dashed rgba(124,111,245,0.15)",
            opacity: interpolate(frame - (ri === 0 ? PHASE_INNER : PHASE_OUTER), [0, 30], [0, 1], { extrapolateRight: "clamp" }),
          }}
        />
      ))}

      {/* Connection lines (SVG) */}
      <div style={{ opacity: linesOpacity }}>
        <ConnectionLines
          positions={allPositions}
          frame={frame}
          showFrom={PHASE_LINES}
        />
      </div>

      {/* Pulse particles */}
      <div style={{ opacity: pulsesOpacity }}>
        {allPositions.map((p, i) => (
          <Pulse
            key={i}
            fromX={0}
            fromY={0}
            toX={p.x}
            toY={p.y}
            frame={frame}
            offset={i * 8}
            color={p.color}
          />
        ))}
      </div>

      {/* Inner orbit nodes */}
      {innerItems.map((item, i) => (
        <OrbitNode
          key={item.name}
          item={item}
          index={i}
          total={5}
          radius={INNER_R}
          frame={frame}
          startFrame={PHASE_INNER}
          speed={0.4}
        />
      ))}

      {/* Outer orbit nodes */}
      {outerItems.map((item, i) => (
        <OrbitNode
          key={item.name}
          item={item}
          index={i}
          total={5}
          radius={OUTER_R}
          frame={frame}
          startFrame={PHASE_OUTER}
          speed={-0.25}
        />
      ))}

      {/* Central hub */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${hubProgress * pulse})`,
          opacity: hubOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          zIndex: 20,
        }}
      >
        {/* Outer glow */}
        <div
          style={{
            position: "absolute",
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,111,245,0.22) 0%, transparent 65%)",
            top: -40,
            left: -40,
          }}
        />
        {/* Ring */}
        <div
          style={{
            position: "absolute",
            width: 104,
            height: 104,
            borderRadius: "50%",
            border: "1px solid rgba(124,111,245,0.3)",
            top: -12,
            left: -12,
          }}
        />
        {/* Icon box */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 22,
            background: "linear-gradient(135deg, #9b8ff7 0%, #7C6FF5 60%, #5b4fd4 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 40px rgba(124,111,245,0.5), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
            position: "relative",
          }}
        >
          <svg width="38" height="38" viewBox="0 0 24 24" fill="white">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div style={{ textAlign: "center", marginTop: 4 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.92)", letterSpacing: "-0.02em" }}>MoltoChat</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>Hub Central</div>
        </div>
      </div>

      {/* Bottom label */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: interpolate(frame - PHASE_PULSE, [0, 30], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>
          10 integrações nativas · dados em tempo real
        </span>
      </div>
    </AbsoluteFill>
  )
}
