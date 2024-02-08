import { useRef } from "react";
import useLerpElement from "./hooks/basic/useLerpElement";

interface Props {
  ease?: number;
  radius?: number;
  color?: string;
}

const LerpCursor: React.FC<Props> = ({
  color = "white",
  radius = 16,
  ease = 0.075,
}) => {
  const cursorRef = useRef(null);

  useLerpElement(cursorRef, ease);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[99] pointer-events-none mix-blend-exclusion rounded-full "
      style={{
        width: radius,
        height: radius,
        backgroundColor: color,
        border: `2px solid ${color}`,
        transition: "clip-path 300ms ease",
      }}
    ></div>
  );
};

export default LerpCursor;
