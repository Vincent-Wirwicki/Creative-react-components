import { useSpring, SpringOptions, MotionValue } from "framer-motion";

type PosType = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};
/**
 * Utility hook for framer motion that returns spring value to animate a motion.div
 * Don't forget to add springs to your style={{x,y}}
 *
 * @params take a pos{x: MotionValue<number>,y: MotionValue<number>}
 * @params take an optianal param of SpringOptions {}
 *
 * @returns springs{} with x and y propety
 *
 */
const useSpringsOnElement = (pos: PosType, options?: SpringOptions) => {
  const { x, y } = pos;
  const springs = {
    x: useSpring(x, options),
    y: useSpring(y, options),
  };
  return { springs };
};

export default useSpringsOnElement;
