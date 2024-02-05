import { useRef } from "react";
import useLerpCursor from "./hooks/useLerpCursor";

interface Props {
  ease?: number;
  radius?: number;
  color?: string;
}

const LerpCursor: React.FC<Props> = ({
  color = "white",
  radius = 64,
  ease = 0.075,
}) => {
  const cursorRef = useRef(null);

  useLerpCursor(cursorRef, ease);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[99] pointer-events-none mix-blend-exclusion "
      style={{
        width: radius,
        height: radius,
        backgroundColor: color,
        // transform: `translate3d(${txRef.current}px, ${tyRef.current}px, 0)`,
        border: `2px solid ${color}`,
        transition: "clip-path 300ms ease",
      }}
    />
  );
};

export default LerpCursor;
