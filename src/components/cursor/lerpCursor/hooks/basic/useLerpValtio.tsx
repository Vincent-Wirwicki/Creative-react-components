import { useEffect, RefObject, useRef, useCallback } from "react";
import { store } from "../../../../../storeValtio/store";

const useLerpValtio = (ref: RefObject<HTMLElement>, ease: number = 0.075) => {
  const frame = useRef(0);
  const mousePosRef = useRef({ mx: 0, my: 0, target: { x: 0, y: 0 } });

  const lerp = (start: number, end: number, ease: number) =>
    (1 - ease) * start + ease * end;

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    mousePosRef.current.mx = clientX;
    mousePosRef.current.my = clientY;
  };

  const animate = useCallback(() => {
    const { mx, my, target } = mousePosRef.current;
    if (ref.current) {
      target.x = lerp(target.x, mx, ease);
      target.y = lerp(target.y, my, ease);
      ref.current.style.transform = `translate3d(
          ${target.x - ref.current.offsetWidth / 2}px,
          ${target.y - ref.current.offsetHeight / 2}px,0)`;
      if (store.isHover) {
        ref.current.style.clipPath = "circle(50% at 50% 50%)";
      } else {
        ref.current.style.clipPath = "circle(10% at 50% 50%)";
      }
    }
    frame.current = requestAnimationFrame(animate);
  }, [ease, ref]);

  useEffect(() => {
    if (!ref.current) return console.error("invalid ref");
    if (ease > 1 || ease < 0)
      return console.error(
        "Ease value is not between 0 & 1, best value are between 0 & 0.5"
      );

    animate();
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame.current);
    };
  }, [ref, ease, animate]);
};

export default useLerpValtio;
