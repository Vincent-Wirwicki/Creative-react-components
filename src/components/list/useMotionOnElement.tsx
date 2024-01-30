import { useMotionValue, MotionValue } from "framer-motion";

type PosType = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};
/**Utility hook that initialize a pos{x:useMotionValue(0), y:useMotionValue(0)}
 * @returns pos: {x: MotionValue<number>,y: MotionValue<number>;}
 * @returns updateElement where you set value of x and y
 * @returns resetElement that set x and y value to 0
 */
export type MotionOnElementType = {
  pos: PosType;
  updateElement: (mx: number, my: number) => void;
  resetElement: () => void;
};

const useMotionOnElement = (): MotionOnElementType => {
  const pos: PosType = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  /**
   * Update your motion value
   * @param mx:number
   * @param my:number
   */
  const updateElement = (mx: number, my: number) => {
    pos.x.set(mx);
    pos.y.set(my);
  };

  const resetElement = (resetX: number = 0, resetY: number = 0) => {
    pos.x.set(resetX);
    pos.y.set(resetY);
  };

  return {
    pos,
    updateElement,
    resetElement,
  };
};

export default useMotionOnElement;
