import { useRef } from "react";
import { motion } from "framer-motion";
import useMagneticButtonVariantOne from "./useMagneticButtonVariantOne";
import useMagneticItem from "../../../1-utils/hooks/useMagneticItem";
import CircleMagneticShape from "../../../1-utils/shapes/CircleMagneticShape";
import TextMagnetic from "../../../1-utils/text/TextMagnetic";

interface Props {
  text: string;
}

const MagneticButtonVariantOne: React.FC<Props> = ({ text = "magnetic" }) => {
  const magneticAreaRef = useRef<HTMLDivElement | null>(null);
  const button = useMagneticItem(0.3);
  const txt = useMagneticItem(-0.2);
  const { handleMouseEnter, handleMouseLeave, handleMouseMove } =
    useMagneticButtonVariantOne(magneticAreaRef, { button, txt }); // springs for translateX and Y propeties of motion.div style

  return (
    <motion.div
      ref={magneticAreaRef}
      onMouseMove={e => handleMouseMove(e)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[150px] h-[150px] relative flex justify-center items-center rounded-full"
    >
      <CircleMagneticShape
        x={button.pos.x}
        y={button.pos.y}
        springs={{ stiffness: 100, damping: 20 }}
        radius="120px"
        className="border-2 border-pink-200"
      />
      {/* motion.div needs to be direct children of magneticArea*/}
      <TextMagnetic
        text={text}
        x={txt.pos.x}
        y={txt.pos.y}
        springs={{ stiffness: 90, damping: 30, mass: 0.1 }}
        className="text-pink-200 text-lg"
      />
    </motion.div>
  );
};

export default MagneticButtonVariantOne;
