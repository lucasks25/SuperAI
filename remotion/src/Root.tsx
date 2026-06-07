import { Composition } from "remotion"
import { AgentDemo } from "./AgentDemo"

export function RemotionRoot() {
  return (
    <Composition
      id="AgentDemo"
      component={AgentDemo}
      durationInFrames={420}
      fps={30}
      width={1080}
      height={1080}
    />
  )
}
