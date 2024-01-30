import { useRef } from "react";
import { motion } from "framer-motion";
import useMagneticButtonVariantThree from "./useMagneticButtonVariantThree";
import CircleMagneticShape from "../../../1-utils/shapes/CircleMagneticShape";
import TextMagnetic from "../../../1-utils/text/TextMagnetic";
import useMagneticItem from "../../../1-utils/hooks/useMagneticItem";

interface Props {
  text: string;
}

const MagneticButtonVariantThree: React.FC<Props> = ({ text = "magnetic" }) => {
  const magneticAreaRef = useRef<HTMLDivElement | null>(null);

  const txt = useMagneticItem(-0.1);
  const button = useMagneticItem(0.1);
  const buttonBg = useMagneticItem(-0.1);

  const { handleMouseEnter, handleMouseLeave, handleMouseMove } =
    useMagneticButtonVariantThree(magneticAreaRef, {
      txt,
      button,
      buttonBg,
    });

  return (
    <motion.div
      ref={magneticAreaRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      whileHover="visible"
      className="w-[150px] h-[150px] relative flex justify-center items-center rounded-full"
    >
      {/* motion.div needs to be direct children of magneticArea*/}

      <CircleMagneticShape
        x={button.pos.x}
        y={button.pos.y}
        radius="120px"
        className="bg-red-700"
      />
      <CircleMagneticShape
        x={buttonBg.pos.x}
        y={buttonBg.pos.y}
        radius="120px"
        className="border-2 border-blue-600 bg-neutral-950"
      />
      <TextMagnetic
        text={text}
        x={txt.pos.x}
        y={txt.pos.y}
        className="text-blue-600 text-xl"
      />
    </motion.div>
  );
};

export default MagneticButtonVariantThree;
