import { useRef } from "react";
// import useLerpCursor from "./hooks/useLerpCursor";
import useLerpElement from "./hooks/basic/useLerpElement";

const LerpText = ({
  //   color = "white",
  h = "fit-content",
  w = "fit-content",
  ease = 0.05,
}) => {
  const cursorRef = useRef(null);

  useLerpElement(cursorRef, ease);

  return (
    <div
      ref={cursorRef}
      className="fixed top-[-25px] left-5 z-50 pointer-events-none mix-blend-exclusion "
      style={{
        width: w,
        height: h,
        backgroundColor: "none",
        // transform: `translate3d(${txRef.current}px, ${tyRef.current}px, 0)`,
        // border: `2px solid ${color}`,
        transition: "clip-path 300ms ease",
      }}
    >
      work in progress
    </div>
  );
};

export default LerpText;
