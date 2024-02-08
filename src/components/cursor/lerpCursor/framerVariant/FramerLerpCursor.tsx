import { useRef, useEffect } from "react";
import { useAnimationFrame } from "framer-motion";

const FramerLerpCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mousePosRef = useRef({ mx: 0, my: 0, target: { x: 0, y: 0 } });
  const ease = 0.075;

  const lerp = (start: number, end: number, ease: number) =>
    (1 - ease) * start + ease * end;

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mousePosRef.current.mx = clientX;
      mousePosRef.current.my = clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useAnimationFrame(() => {
    const { mx, my, target } = mousePosRef.current;
    if (cursorRef.current) {
      target.x = lerp(target.x, mx, ease);
      target.y = lerp(target.y, my, ease);
      cursorRef.current.style.transform = `translate3d(
          ${target.x - cursorRef.current.offsetWidth / 2}px,
          ${target.y - cursorRef.current.offsetHeight / 2}px,0)`;
    }
  });

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[20px] h-[20px] border rounded-full pointer-events-none"
    />
  );
};

export default FramerLerpCursor;
