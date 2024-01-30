import { useRef, useEffect } from "react";
import { useAnimationFrame } from "framer-motion";

const FramerLerpCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dimensionRef = useRef({ h: 0, w: 0 });
  const mousePosRef = useRef({ mx: 0, my: 0 });
  const txRef = useRef(window.innerWidth * 0.5);
  const tyRef = useRef(window.innerHeight * 0.5);
  const ease = 0.075;

  const lerp = (start: number, end: number, ease: number) =>
    (1 - ease) * start + ease * end;

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) =>
    (mousePosRef.current = { mx: clientX, my: clientY });

  const boundingRef = () => {
    if (cursorRef.current) {
      const { height, width } = cursorRef.current.getBoundingClientRect();
      return (dimensionRef.current = { h: height, w: width });
    }
  };

  useEffect(() => {
    boundingRef();
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useAnimationFrame(() => {
    const { mx, my } = mousePosRef.current;
    if (cursorRef.current) {
      txRef.current = lerp(txRef.current, mx, ease);
      tyRef.current = lerp(tyRef.current, my, ease);
      cursorRef.current.style.transform = `translate3d(
          ${txRef.current - dimensionRef.current.w / 2}px,
          ${tyRef.current - dimensionRef.current.h / 2}px,0)`;
    }
  });

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[30px] h-[30px] border rounded-full pointer-events-none"
    />
  );
};

export default FramerLerpCursor;
