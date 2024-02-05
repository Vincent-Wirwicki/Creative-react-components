import {
  useEffect,
  RefObject,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";

const useLerpCursor = (ref: RefObject<HTMLElement>, ease: number = 0.075) => {
  const centerX = window.innerWidth * 0.5;
  const centerY = window.innerHeight * 0.5;
  const frame = useRef(0);
  const elementRef = useRef({ h: 0, w: 0 });
  const mousePosRef = useRef({ mx: centerX, my: centerY });
  const txRef = useRef(centerX);
  const tyRef = useRef(centerY);

  const boundingRef = useCallback(() => {
    if (ref.current) {
      const { height, width } = ref.current.getBoundingClientRect();
      return (elementRef.current = { h: height, w: width });
    }
  }, [ref]);
  //start = ref element current position,
  //end = current mousePos,
  //ease = how fast your ref element will reach your mousePos
  const lerp = (start: number, end: number, ease: number) =>
    (1 - ease) * start + ease * end;

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) =>
    (mousePosRef.current = { mx: clientX, my: clientY });

  const updatePos = useCallback(() => {
    const { mx, my } = mousePosRef.current;
    if (ref.current) {
      txRef.current = lerp(txRef.current, mx, ease);
      tyRef.current = lerp(tyRef.current, my, ease);
      ref.current.style.transform = `translate3d(
          ${txRef.current - elementRef.current.h / 2}px,
          ${tyRef.current - elementRef.current.w / 2}px,0)`;
    }
    frame.current = requestAnimationFrame(updatePos);
  }, [ease, ref]);

  useLayoutEffect(() => {
    boundingRef();
  }, [boundingRef]);

  useEffect(() => {
    if (!ref.current) return console.error("invalid ref");
    if (ease > 1 || ease < 0)
      return console.error(
        "Ease value is not between 0 & 1, best value are between 0 & 0.5"
      );
    frame.current = requestAnimationFrame(updatePos);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame.current);
    };
  }, [ref, ease, updatePos]);
};

export default useLerpCursor;
