"use client"

import dynamic from "next/dynamic"
import Reveal from "./Reveal"
import { IntegrationsOrbit } from "@/remotion/src/IntegrationsOrbit"

const Player = dynamic(() => import("@remotion/player").then((m) => m.Player), { ssr: false })

export default function IntegrationsSection() {
  return (
    <section
      id="integracoes"
      className="bg-[#F2F2F2] py-20 md:py-32 overflow-hidden"
      aria-label="Integrações"
    >
      <div className="mx-auto w-full max-w-[1440px] px-2 md:px-4 lg:px-6">
        <div
          className="relative z-10 border border-[#1A1A1A]/[0.12] bg-[#F8F7F2] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] overflow-hidden"
          style={{ clipPath: "inset(0 round 16px)" }}
        >
          {/* Header */}
          <div className="flex min-h-[78px] items-center justify-between gap-4 border-b border-[#1A1A1A]/[0.12] px-5 md:px-8">
            <Reveal>
              <h2 className="text-[24px] font-medium leading-tight text-[#22211F] md:text-[31px]">
                Integrações
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="hidden text-[13px] text-[#1A1A1A]/35 md:block">
                Conecte sua IA às ferramentas do negócio
              </p>
            </Reveal>
          </div>

          {/* Remotion Player */}
          <div className="w-full bg-[#F8F7F2]">
            <Player
              component={IntegrationsOrbit}
              durationInFrames={300}
              fps={30}
              compositionWidth={1200}
              compositionHeight={700}
              style={{ width: "100%", aspectRatio: "1200/700" }}
              autoPlay
              loop
              controls={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
