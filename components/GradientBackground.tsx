"use client"

// Effect: Soft Gradient Orbs — large blurred color orbs in the background
interface Orb {
  color: string
  size?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  blur?: string
  opacity?: number
  animationClass?: string
}

interface GradientBackgroundProps {
  orbs?: Orb[]
  showGrid?: boolean
  className?: string
}

const DEFAULT_ORBS: Orb[] = [
  {
    color: "rgba(37,99,235,0.22)",
    size: "500px",
    top: "-5%",
    left: "10%",
    blur: "90px",
    animationClass: "animate-drift-orb",
  },
  {
    color: "rgba(167,139,250,0.18)",
    size: "420px",
    top: "20%",
    right: "5%",
    blur: "100px",
    animationClass: "animate-drift-orb",
  },
  {
    color: "rgba(103,232,249,0.14)",
    size: "380px",
    bottom: "10%",
    left: "35%",
    blur: "80px",
    animationClass: "animate-drift-orb",
  },
]

export default function GradientBackground({
  orbs = DEFAULT_ORBS,
  showGrid = false,
  className = "",
}: GradientBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Effect: Soft Gradient Orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={orb.animationClass}
          style={{
            position: "absolute",
            width: orb.size ?? "400px",
            height: orb.size ?? "400px",
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: `blur(${orb.blur ?? "80px"})`,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            opacity: orb.opacity ?? 1,
          }}
        />
      ))}

      {/* Effect: Soft Grid Overlay */}
      {showGrid && <div className="absolute inset-0 grid-overlay" />}
    </div>
  )
}
