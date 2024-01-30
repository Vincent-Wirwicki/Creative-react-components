import { useRef, useCallback } from "react";

export interface ParticuleType {
  radius: number;
  pos: { x: number; y: number };
  speed: { x: number; y: number };
}

const useParticule = () => {
  const particulesArrayRef = useRef<ParticuleType[]>([]);

  const randomizePos = (radius: number, max: number) =>
    radius + Math.random() * (max - radius * 2);

  const randomizeSpeed = () => Math.random() * 1 - 0.6;

  const initParticulesArray = useCallback(
    (
      density: number,
      radius: number,
      canvasWidth: number,
      canvasHeight: number
    ) => {
      if (particulesArrayRef.current.length > 0)
        particulesArrayRef.current = [];

      for (let i = 0; i < density; i++) {
        particulesArrayRef.current.push({
          radius: radius,
          pos: {
            x: randomizePos(radius, canvasWidth),
            y: randomizePos(radius, canvasHeight),
          },
          speed: {
            x: randomizeSpeed(),
            y: randomizeSpeed(),
          },
        });
      }
    },
    []
  );

  const draw = (
    ctx: CanvasRenderingContext2D,
    { pos, radius }: ParticuleType
  ) => {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    ctx.fill();
    // ctx.closePath();
  };

  const update = (
    { pos, speed, radius }: ParticuleType,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    pos.x += speed.x;
    pos.y += speed.y;
    if (pos.x < radius || pos.x > canvasWidth - radius) speed.x *= -1;
    if (pos.y < radius || pos.y > canvasHeight - radius) speed.y *= -1;
  };

  const drawConnection = (
    ctx: CanvasRenderingContext2D,
    particules: ParticuleType[],
    x: number,
    y: number,
    opacity: number
  ) => {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.beginPath();
    ctx.moveTo(particules[x].pos.x, particules[x].pos.y);
    ctx.lineTo(particules[y].pos.x, particules[y].pos.y);
    ctx.stroke();
    ctx.restore();
  };

  const connect = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      particules: ParticuleType[],
      maxDist: number
    ) => {
      for (let x = 0; x < particules.length; x++) {
        for (let y = x; y < particules.length; y++) {
          const distX = particules[x].pos.x - particules[y].pos.x;
          const distY = particules[x].pos.y - particules[y].pos.y;
          const dist = Math.hypot(distX, distY);
          const opacity = 1 - dist / maxDist;
          if (dist < maxDist) drawConnection(ctx, particules, x, y, opacity);
        }
      }
    },
    []
  );

  const updateAndConnect = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      particules: ParticuleType[],
      maxDist: number,
      width: number,
      height: number
    ) => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particules.length; i++) {
        draw(ctx, particules[i]);
        update(particules[i], width, height);
      }
      connect(ctx, particules, maxDist);
    },
    [connect]
  );

  return {
    particulesArrayRef,
    initParticulesArray,
    updateAndConnect,
  };
};

export default useParticule;
