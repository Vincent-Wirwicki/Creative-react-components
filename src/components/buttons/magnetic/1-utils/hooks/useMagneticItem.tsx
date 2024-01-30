import { useMotionValue, MotionValue } from "framer-motion";

type posType = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export type MagneticHookType = {
  pos: posType;
  updateElement: (mx: number, my: number) => void;
  resetElement: () => void;
};

const useMagneticItem = (
  friction: number = 0.4,
  offset: number = 0
): MagneticHookType => {
  const pos: posType = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const updateElement = (mx: number, my: number) => {
    pos.x.set(mx * friction + offset);
    pos.y.set(my * friction + offset);
  };

  const resetElement = () => {
    pos.x.set(0);
    pos.y.set(0);
  };

  return {
    pos,
    updateElement,
    resetElement,
  };
};

export default useMagneticItem;
