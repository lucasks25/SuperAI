import { Composition } from "remotion"
import { AgentDemo } from "./AgentDemo"
import { IntegrationsOrbit } from "./IntegrationsOrbit"
import { ManychatDemo } from "./ManychatDemo"
import { ProspectingComp } from "./ProspectingComp"
// ── New ManyChat-style series ─────────────────────────────────────────────────
import { InstagramLead } from "./InstagramLead"
import { WhatsappDuvida } from "./WhatsappDuvida"
import { EscalaConversas } from "./EscalaConversas"
import { CtaMarca } from "./CtaMarca"

export function RemotionRoot() {
  return (
    <>
      {/* ── Legacy compositions (kept for compatibility) ─────────────────── */}
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
      <Composition
        id="ManychatDemo"
        component={ManychatDemo}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="ProspectingComp"
        component={ProspectingComp}
        durationInFrames={200}
        fps={30}
        width={1080}
        height={1080}
      />

      {/* ── ManyChat-style series — 4:5 vertical, 7s each ────────────────── */}
      {/* Render: npx remotion render <id> --output out/<id>.mp4            */}
      <Composition
        id="instagram-lead"
        component={InstagramLead}
        durationInFrames={210}
        fps={30}
        width={1080}
        height={1350}
      />
      <Composition
        id="whatsapp-duvida"
        component={WhatsappDuvida}
        durationInFrames={210}
        fps={30}
        width={1080}
        height={1350}
      />
      <Composition
        id="escala-conversas"
        component={EscalaConversas}
        durationInFrames={210}
        fps={30}
        width={1080}
        height={1350}
      />
      <Composition
        id="cta-marca"
        component={CtaMarca}
        durationInFrames={210}
        fps={30}
        width={1080}
        height={1350}
      />
    </>
  )
}
