import { RefObject, useState, MouseEvent } from "react";
import { MagneticHookType } from "../../../1-utils/hooks/useMagneticItem";

type ElementsType = {
  [key: string]: MagneticHookType;
};

const useMagneticButtonVariantTwo = (
  ref: RefObject<HTMLDivElement | null>,
  elements: ElementsType = {}
) => {
  const [isHover, setIsHover] = useState(false);
  const magneticArea = ref.current;

  const update = (mx: number, my: number) =>
    Object.values(elements).forEach(value => {
      value.updateElement(mx, my);
    });

  const reset = () =>
    Object.values(elements).forEach(value => {
      value.resetElement();
    });

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (magneticArea && isHover) {
      const { top, left, height, width } = magneticArea.getBoundingClientRect();
      const mx = clientX - (left + width / 2);
      const my = clientY - (top + height / 2);
      update(mx, my);
    }
  };

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => {
    setIsHover(false);
    reset();
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  };
};

export default useMagneticButtonVariantTwo;
