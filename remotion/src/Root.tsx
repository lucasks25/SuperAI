import { Composition } from "remotion"
import { AgentDemo } from "./AgentDemo"
import { IntegrationsOrbit } from "./IntegrationsOrbit"

export function RemotionRoot() {
  return (
    <>
      <Composition
        id="AgentDemo"
        component={AgentDemo}
        durationInFrames={420}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="IntegrationsOrbit"
        component={IntegrationsOrbit}
        durationInFrames={360}
        fps={30}
        width={1400}
        height={700}
      />
    </>
  )
}
