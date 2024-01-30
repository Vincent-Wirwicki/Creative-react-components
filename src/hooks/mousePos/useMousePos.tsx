import { useState, useEffect, RefObject } from "react";

const useMousePos = (ref: RefObject<HTMLElement>) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (ref.current) {
      const { height: h, width: w } = ref.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - w / 2, y: e.clientY - h / 2 });
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return { mousePos };
};

export default useMousePos;
