import { useRef } from "react";
import { motion } from "framer-motion";
import useMagneticButtonRectVariantTwo from "./useMagneticButtonRectVariantTwo";
// import CircleMagneticShape from "../../1-utils/shapes/CircleMagneticShape";
import TextMagnetic from "../../../1-utils/text/TextMagnetic";
import useMagneticItem from "../../../1-utils/hooks/useMagneticItem";
import RectMagneticShape from "../../../1-utils/shapes/RectMagneticShape";

interface Props {
  text: string;
}
const MagneticButtonRectVariantTwo: React.FC<Props> = ({ text }) => {
  const magneticAreaRef = useRef<HTMLDivElement | null>(null);

  const txt = useMagneticItem(0.1);
  const button = useMagneticItem(0.25);
  const buttonBorder = useMagneticItem(0.3);
  const buttonBorderMid = useMagneticItem(0.35);

  const { handleMouseEnter, handleMouseLeave, handleMouseMove } =
    useMagneticButtonRectVariantTwo(magneticAreaRef, {
      txt,
      button,
      buttonBorder,
      buttonBorderMid,
    });

  return (
    <motion.div
      ref={magneticAreaRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      whileHover="visible"
      className="w-[160px] h-[100px] relative flex justify-center items-center rounded-lg border border-dashed border-neutral-800 "
    >
      {/* motion.div needs to be direct children of magneticArea Variants*/}
      <RectMagneticShape
        x={buttonBorderMid.pos.x}
        y={buttonBorderMid.pos.y}
        w="120px"
        h="60px"
        // springs={{ damping: 50, stiffness: 20 }}
        className="border-blue-600 border rounded-lg "
      />{" "}
      <RectMagneticShape
        x={buttonBorder.pos.x}
        y={buttonBorder.pos.y}
        w="120px"
        h="60px"
        // springs={{ damping: 50, stiffness: 20 }}
        className="border-red-400 border  rounded-lg "
      />
      <RectMagneticShape
        x={button.pos.x}
        y={button.pos.y}
        w="120px"
        h="60px"
        // springs={{ damping: 50, stiffness: 20 }}
        className="border-green-200 border  rounded-lg"
      />
      <TextMagnetic
        text={text}
        x={txt.pos.x}
        y={txt.pos.y}
        className="text-green-200 text-xl font-bold"
      />
    </motion.div>
  );
};

export default MagneticButtonRectVariantTwo;
