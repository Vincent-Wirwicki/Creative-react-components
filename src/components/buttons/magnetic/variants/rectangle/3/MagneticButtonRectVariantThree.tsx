import { useRef } from "react";
import { motion } from "framer-motion";
import useMagneticButtonRectVariantThree from "./useMagneticButtonRectVariantThree";
// import CircleMagneticShape from "../../1-utils/shapes/CircleMagneticShape";
import TextMagnetic from "../../../1-utils/text/TextMagnetic";
import useMagneticItem from "../../../1-utils/hooks/useMagneticItem";
import RectMagneticShape from "../../../1-utils/shapes/RectMagneticShape";

interface Props {
  text: string;
}
const MagneticButtonRectVariantThree: React.FC<Props> = ({ text }) => {
  const magneticAreaRef = useRef<HTMLDivElement | null>(null);

  const txt = useMagneticItem(0.1);
  const button = useMagneticItem(-0.2);
  const buttonBgMid = useMagneticItem(-0.35);
  const buttonBgLast = useMagneticItem(-0.45);

  const { handleMouseEnter, handleMouseLeave, handleMouseMove } =
    useMagneticButtonRectVariantThree(magneticAreaRef, {
      txt,
      button,
      buttonBgMid,
      buttonBgLast,
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
        x={buttonBgLast.pos.x}
        y={buttonBgLast.pos.y}
        w="120px"
        h="60px"
        className="bg-blue-800 rounded-lg mix-blend-exclusion"
      />
      <RectMagneticShape
        x={buttonBgMid.pos.x}
        y={buttonBgMid.pos.y}
        w="120px"
        h="60px"
        className="bg-red-800 rounded-lg mix-blend-exclusion"
      />
      <RectMagneticShape
        x={button.pos.x}
        y={button.pos.y}
        w="120px"
        h="60px"
        className="border-green-200 border bg-neutral-950 rounded-lg"
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

export default MagneticButtonRectVariantThree;
