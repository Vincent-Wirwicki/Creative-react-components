import { RefObject, useState, MouseEvent } from "react";
import { useMotionValue, useSpring, Spring } from "framer-motion";

const useMagneticBasicButton = (ref: RefObject<HTMLDivElement | null>) => {
  const [isHover, setIsHover] = useState(false);
  const magneticArea = ref.current;
  //value to offset mouse position
  const friction = 0.3;
  //how the element animate
  const springConfig: Spring = {
    type: "spring",
    stiffness: 100,
    damping: 20,
  };

  //value for mouse position
  const button = { x: useMotionValue(0), y: useMotionValue(0) };

  // spring is for motion div :
  // style={{translateX: springX, translateY:springY}}
  const springs = {
    x: useSpring(button.x, springConfig),
    y: useSpring(button.y, springConfig),
  };

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (magneticArea && isHover) {
      const { top, left, height, width } = magneticArea.getBoundingClientRect();
      const mouseX = clientX - (left + width / 2);
      const mouseY = clientY - (top + height / 2);
      button.x.set(mouseX * friction);
      button.y.set(mouseY * friction);
    }
  };

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => {
    setIsHover(false);
    button.x.set(0);
    button.y.set(0);
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    springs,
  };
};

export default useMagneticBasicButton;
