import { AbsoluteFill } from "remotion"

/** Solid black background — matches the outer #05050A container in the page. */
export const ManyBackground: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#05050A",
      }}
    />
  )
}
