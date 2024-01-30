import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  RefObject,
  useCallback,
} from "react";
import useParticule from "./useParticule";

const useParticulesCanvas = (
  canvasRef: RefObject<HTMLCanvasElement | null>
) => {
  const [config, setConfig] = useState({
    density: 200,
    maxDist: 80,
    color: "#b91c1c",
  });
  const radius = 1;
  const { density, maxDist, color } = config;
  const framesRef = useRef(0);
  const { particulesArrayRef, initParticulesArray, updateAndConnect } =
    useParticule();

  const initColor = (ctx: CanvasRenderingContext2D, color: string) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
  };

  const handleResize = useCallback(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const parentEl = canvas.parentElement;
      const ctx = canvas.getContext("2d");
      // particulesArrayRef.current = [];

      if (parentEl) {
        canvas.height = parentEl.offsetHeight;
        canvas.width = parentEl.offsetWidth;
      } else {
        return console.warn("your canvas need a parent element");
      }

      if (ctx) {
        initColor(ctx, color);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [canvasRef, color]);

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (!canvasRef) return console.warn("canvas ref is missing or undefined");
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const { height, width } = canvas;
      const ctx = canvas.getContext("2d");

      handleResize();
      initParticulesArray(density, radius, height, width);

      if (ctx) {
        const particules = particulesArrayRef.current;
        const animate = () => {
          updateAndConnect(ctx, particules, maxDist, width, height);
          framesRef.current = requestAnimationFrame(animate);
        };
        animate();
      }
    }

    return () => {
      cancelAnimationFrame(framesRef.current);
    };
  }, [
    canvasRef,
    config,
    density,
    maxDist,
    particulesArrayRef,
    updateAndConnect,
    handleResize,
    initParticulesArray,
  ]);

  return { config, setConfig };
};

export default useParticulesCanvas;
