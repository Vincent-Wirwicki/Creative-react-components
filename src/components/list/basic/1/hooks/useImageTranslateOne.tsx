import { useState, MouseEvent, RefObject } from "react";
import { MotionOnElementType } from "../../../useMotionOnElement";

const useImageTranslateOne = (
  ref: RefObject<HTMLElement | null>,
  element: MotionOnElementType
) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (ref.current) {
      const { left, width, top, height } = ref.current.getBoundingClientRect();
      const mx = clientX - (left + width / 2);
      const my = clientY - (top + height / 2);
      element.updateElement(mx * 0.5, my * 1.2);
    }
  };

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => {
    if (ref.current) {
      const { left, width, top, height } = ref.current.getBoundingClientRect();
      setIsHover(false);
      setSelectedItem(selectedItem);
      element.updateElement(left - width / 2, top - height / 2);
    }
  };

  const handleMouseEnterItem = ({ currentTarget }: MouseEvent) => {
    if (currentTarget) {
      const targetId = currentTarget.getAttribute("data-index");
      if (!targetId) throw new Error("data-index missing from HTML element");
      setSelectedItem(Number(targetId));
    }
  };

  return {
    selectedItem,
    isHover,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseEnterItem,
  };
};

export default useImageTranslateOne;
