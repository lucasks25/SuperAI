"use client"

import dynamic from "next/dynamic"
const Player = dynamic(() => import("@remotion/player").then((mod) => mod.Player), { ssr: false })

import { IntegrationsOrbit } from "@/remotion/src/IntegrationsOrbit"

export default function IntegrationsPlayer() {
  return (
    <Player
      component={IntegrationsOrbit}
      durationInFrames={360}
      fps={30}
      compositionWidth={1400}
      compositionHeight={700}
      style={{ width: "100%", display: "block" }}
      autoPlay
      loop
      controls={false}
    />
  )
}
