"use client"

import dynamic from "next/dynamic"
const Player = dynamic(() => import("@remotion/player").then((mod) => mod.Player), { ssr: false })

import { ManychatDemo } from "@/remotion/src/ManychatDemo"

export default function ManychatDemoPlayer() {
  return (
    <div className="w-full flex justify-center items-center">
      <Player
        component={ManychatDemo}
        durationInFrames={240}
        fps={30}
        compositionWidth={1080}
        compositionHeight={1080}
        style={{
          width: "100%",
          maxWidth: "420px",
          aspectRatio: "1/1",
          borderRadius: "2.5rem",
          overflow: "hidden",
          display: "block",
        }}
        autoPlay
        loop
        controls={false}
        clickToPlay={false}
      />
    </div>
  )
}
