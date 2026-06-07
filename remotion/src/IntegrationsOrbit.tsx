import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion"

// Brand SVG icons as inline components
const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path d="M22.5 19.3c-.3-.15-1.8-.9-2.1-1-.3-.1-.5-.15-.7.15-.2.3-.8 1-.95 1.2-.18.2-.35.22-.65.07a8.2 8.2 0 01-2.4-1.48 9 9 0 01-1.67-2.07c-.17-.3 0-.46.13-.6.13-.13.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.7-1.7-.96-2.32-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.07-.8.37-.27.3-1.03 1-1.03 2.45s1.06 2.84 1.2 3.04c.16.2 2.08 3.17 5.03 4.45.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.73-.7 1.97-1.39.25-.68.25-1.27.18-1.39-.07-.12-.27-.2-.57-.34z" fill="white" />
  </svg>
)

const GoogleCalIcon = () => (
  <svg viewBox="0 0 32 32" width="22" height="22">
    <rect width="32" height="32" rx="6" fill="white" />
    <rect x="8" y="8" width="16" height="16" rx="1" fill="none" stroke="#4285F4" strokeWidth="1.5" />
    <rect x="11" y="6" width="2" height="4" rx="1" fill="#EA4335" />
    <rect x="19" y="6" width="2" height="4" rx="1" fill="#EA4335" />
    <rect x="8" y="13" width="16" height="1.5" fill="#4285F4" />
    <rect x="11" y="17" width="4" height="4" rx="0.5" fill="#0F9D58" />
  </svg>
)

const N8NIcon = () => (
  <svg viewBox="0 0 32 32" width="22" height="22">
    <rect width="32" height="32" rx="6" fill="#FF6D00" />
    <circle cx="10" cy="16" r="3" fill="white" />
    <circle cx="22" cy="16" r="3" fill="white" />
    <line x1="13" y1="16" x2="19" y2="16" stroke="white" strokeWidth="2" />
    <circle cx="16" cy="10" r="2.5" fill="white" />
    <line x1="16" y1="12.5" x2="16" y2="14.5" stroke="white" strokeWidth="1.5" />
  </svg>
)

const CRMIcon = () => (
  <svg viewBox="0 0 32 32" width="22" height="22">
    <rect width="32" height="32" rx="6" fill="#7C6FF5" />
    <circle cx="16" cy="12" r="4" fill="white" opacity="0.9" />
    <path d="M8 24c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
)

const PostgresIcon = () => (
  <svg viewBox="0 0 32 32" width="22" height="22">
    <rect width="32" height="32" rx="6" fill="#336791" />
    <ellipse cx="16" cy="11" rx="6" ry="3" fill="white" opacity="0.85" />
    <rect x="10" y="11" width="12" height="10" fill="#336791" />
    <ellipse cx="16" cy="21" rx="6" ry="3" fill="white" opacity="0.7" />
    <ellipse cx="16" cy="15" rx="6" ry="2" fill="white" opacity="0.5" />
  </svg>
)

const WebhookIcon = () => (
  <svg viewBox="0 0 32 32" width="22" height="22">
    <rect width="32" height="32" rx="6" fill="#0EA5E9" />
    <path d="M10 16 C10 10 22 10 22 16 C22 22 10 22 10 16" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="10" cy="16" r="2.5" fill="white" />
    <circle cx="22" cy="16" r="2.5" fill="white" />
    <line x1="16" y1="10" x2="16" y2="22" stroke="white" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
)

const SpreadsheetIcon = () => (
  <svg viewBox="0 0 32 32" width="22" height="22">
    <rect width="32" height="32" rx="6" fill="#0F9D58" />
    <rect x="8" y="9" width="16" height="14" rx="1" fill="white" opacity="0.15" />
    <rect x="8" y="9" width="16" height="4" rx="1" fill="white" opacity="0.8" />
    <line x1="15" y1="9" x2="15" y2="23" stroke="white" strokeWidth="1" opacity="0.6" />
    <line x1="8" y1="16" x2="24" y2="16" stroke="white" strokeWidth="1" opacity="0.6" />
    <line x1="8" y1="20" x2="24" y2="20" stroke="white" strokeWidth="1" opacity="0.6" />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 32 32" width="22" height="22">
    <rect width="32" height="32" rx="6" fill="#64748B" />
    <rect x="7" y="10" width="18" height="12" rx="2" fill="none" stroke="white" strokeWidth="1.8" />
    <path d="M7 12l9 6 9-6" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" />
  </svg>
)

const EvolutionIcon = () => (
  <svg viewBox="0 0 32 32" width="22" height="22">
    <rect width="32" height="32" rx="6" fill="#171717" />
    <circle cx="16" cy="16" r="6" fill="none" stroke="white" strokeWidth="1.8" />
    <circle cx="16" cy="16" r="2.5" fill="white" />
    <line x1="16" y1="8" x2="16" y2="10" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="16" y1="22" x2="16" y2="24" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="8" y1="16" x2="10" y2="16" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="22" y1="16" x2="24" y2="16" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const DashboardIcon = () => (
  <svg viewBox="0 0 32 32" width="22" height="22">
    <rect width="32" height="32" rx="6" fill="#4F46E5" />
    <rect x="8" y="17" width="4" height="7" rx="1" fill="white" opacity="0.7" />
    <rect x="14" y="13" width="4" height="11" rx="1" fill="white" opacity="0.85" />
    <rect x="20" y="9" width="4" height="15" rx="1" fill="white" />
  </svg>
)

const INTEGRATIONS = [
  { name: "WhatsApp",     Icon: WhatsAppIcon,   bg: "#25D366" },
  { name: "G. Calendar",  Icon: GoogleCalIcon,  bg: "#4285F4" },
  { name: "n8n",          Icon: N8NIcon,         bg: "#FF6D00" },
  { name: "CRM",          Icon: CRMIcon,         bg: "#7C6FF5" },
  { name: "PostgreSQL",   Icon: PostgresIcon,   bg: "#336791" },
  { name: "Webhooks",     Icon: WebhookIcon,    bg: "#0EA5E9" },
  { name: "Planilhas",    Icon: SpreadsheetIcon,bg: "#0F9D58" },
  { name: "E-mail",       Icon: EmailIcon,      bg: "#64748B" },
  { name: "Evolution",    Icon: EvolutionIcon,  bg: "#171717" },
  { name: "Dashboard",    Icon: DashboardIcon,  bg: "#4F46E5" },
]

const BRAND = "#7C6FF5"
const BG = "#F8F7F2"

function OrbitNode({
  item,
  index,
  total,
  radius,
  frame,
  startFrame,
  speed,
}: {
  item: typeof INTEGRATIONS[0]
  index: number
  total: number
  radius: number
  frame: number
  startFrame: number
  speed: number
}) {
  const { fps } = useVideoConfig()
  const baseAngle = (index / total) * Math.PI * 2
  const elapsed = (frame - startFrame) / fps
  const angle = baseAngle + elapsed * speed

  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  const entryProgress = spring({
    frame: frame - startFrame - index * 4,
    fps,
    config: { damping: 18, stiffness: 100 },
  })
  const opacity = interpolate(frame - startFrame - index * 4, [0, 12], [0, 1], { extrapolateRight: "clamp" })

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
        gap: 6,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: "white",
          boxShadow: "0 4px 16px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Icon />
      </div>
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#64748B",
          whiteSpace: "nowrap",
          background: "rgba(248,247,242,0.9)",
          padding: "2px 6px",
          borderRadius: 4,
        }}
      >
        {item.name}
      </span>
    </div>
  )
}

export function IntegrationsOrbit() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const START = 20

  const hubProgress = spring({ frame: frame - START, fps, config: { damping: 20, stiffness: 120 } })
  const hubOpacity = interpolate(frame - START, [0, 15], [0, 1], { extrapolateRight: "clamp" })

  // Two orbit rings
  const INNER_R = 170
  const OUTER_R = 310

  const innerItems = INTEGRATIONS.slice(0, 5)
  const outerItems = INTEGRATIONS.slice(5)

  // Pulse on hub
  const pulse = interpolate(Math.sin(frame * 0.04), [-1, 1], [0.96, 1.04])

  return (
    <AbsoluteFill
      style={{
        background: BG,
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Orbit ring backgrounds */}
      {[INNER_R, OUTER_R].map((r) => (
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
            border: "1px dashed rgba(124,111,245,0.12)",
            opacity: interpolate(frame - START, [0, 30], [0, 1], { extrapolateRight: "clamp" }),
          }}
        />
      ))}

      {/* Nodes — inner (5) slower orbit */}
      {innerItems.map((item, i) => (
        <OrbitNode
          key={item.name}
          item={item}
          index={i}
          total={5}
          radius={INNER_R}
          frame={frame}
          startFrame={START}
          speed={0.4}
        />
      ))}

      {/* Nodes — outer (5) faster orbit counter-clockwise */}
      {outerItems.map((item, i) => (
        <OrbitNode
          key={item.name}
          item={item}
          index={i}
          total={5}
          radius={OUTER_R}
          frame={frame}
          startFrame={START}
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
          gap: 8,
        }}
      >
        {/* Glow ring */}
        <div
          style={{
            position: "absolute",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(124,111,245,0.15) 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 22,
            background: BRAND,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 32px rgba(124,111,245,0.35), 0 2px 8px rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          {/* Lightning bolt */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#171717" }}>SuperAI</div>
          <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>Hub central</div>
        </div>
      </div>
    </AbsoluteFill>
  )
}
