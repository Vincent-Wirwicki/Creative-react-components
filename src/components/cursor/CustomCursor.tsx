import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import useMousePos from "../../hooks/mousePos/useMousePos";
import styles from "./CustomCursor.module.css";

interface Props {
  radius?: number;
  color?: string;
}

const CustomCursor: React.FC<Props> = ({ radius = 64 }) => {
  const { cursor } = styles;
  const ref = useRef(null);
  const {
    mousePos: { x, y },
  } = useMousePos(ref);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  cursorX.set(x);
  cursorY.set(y);

  const springConfig = { damping: 25, stiffness: 200, mass: 2 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  return (
    <motion.div
      ref={ref}
      className={cursor}
      style={{
        height: radius,
        width: radius,
        translateX: springX,
        translateY: springY,
      }}
    />
  );
};

export default CustomCursor;
