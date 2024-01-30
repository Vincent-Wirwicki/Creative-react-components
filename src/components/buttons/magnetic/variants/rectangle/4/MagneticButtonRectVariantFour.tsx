import { useRef } from "react";
import { motion } from "framer-motion";
import useMagneticButtonRectVariantThree from "./useMagneticButtonRectVariantFour";
// import CircleMagneticShape from "../../1-utils/shapes/CircleMagneticShape";
import TextMagnetic from "../../../1-utils/text/TextMagnetic";
import useMagneticItem from "../../../1-utils/hooks/useMagneticItem";
import RectMagneticShape from "../../../1-utils/shapes/RectMagneticShape";

interface Props {
  text: string;
}
const MagneticButtonRectVariantFour: React.FC<Props> = ({ text }) => {
  const magneticAreaRef = useRef<HTMLDivElement | null>(null);

  const txt = useMagneticItem(0.1);
  const txtRed = useMagneticItem(0.15);
  const txtBlue = useMagneticItem(0.2);

  const button = useMagneticItem(0.15);
  const buttonRed = useMagneticItem(0.2);
  const buttonBlue = useMagneticItem(0.25);

  const { handleMouseEnter, handleMouseLeave, handleMouseMove } =
    useMagneticButtonRectVariantThree(magneticAreaRef, {
      txt,
      txtRed,
      txtBlue,
      button,
      buttonRed,
      buttonBlue,
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
        x={buttonBlue.pos.x}
        y={buttonBlue.pos.y}
        w="120px"
        h="60px"
        // springs={{ damping: 50, stiffness: 20 }}
        className="border-blue-600 border  rounded-lg  mix-blend-difference"
      />{" "}
      <RectMagneticShape
        x={buttonRed.pos.x}
        y={buttonRed.pos.y}
        w="120px"
        h="60px"
        // springs={{ damping: 50, stiffness: 20 }}
        className="border-red-400 border  rounded-lg  mix-blend-difference"
      />
      <RectMagneticShape
        x={button.pos.x}
        y={button.pos.y}
        w="120px"
        h="60px"
        // springs={{ damping: 50, stiffness: 20 }}
        className="border-green-800 border bg-neutral-950 rounded-lg mix-blend-difference"
      />
      <TextMagnetic
        text={text}
        x={txtBlue.pos.x}
        y={txtBlue.pos.y}
        className="text-blue-600 text-xl font-bold mix-blend-difference"
      />
      <TextMagnetic
        text={text}
        x={txtRed.pos.x}
        y={txtRed.pos.y}
        className="text-red-400 text-xl font-bold mix-blend-difference"
      />{" "}
      <TextMagnetic
        text={text}
        x={txt.pos.x}
        y={txt.pos.y}
        className="text-green-800 text-xl font-bold mix-blend-difference"
      />
    </motion.div>
  );
};

export default MagneticButtonRectVariantFour;
