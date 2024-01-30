import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import useMagneticButtonVariantTwo from "./useMagneticButtonVariantTwo";
import useMagneticItem from "../../../1-utils/hooks/useMagneticItem";
import CircleMagneticShape from "../../../1-utils/shapes/CircleMagneticShape";
import TextMagnetic from "../../../1-utils/text/TextMagnetic";

interface Props {
  text: string;
}

const MagneticButtonVariantTwo: React.FC<Props> = ({ text = "magnetic" }) => {
  const magneticAreaRef = useRef<HTMLDivElement | null>(null);

  //init element with useMotionValue
  const btn = useMagneticItem(0.4);
  const btnShadow = useMagneticItem(-0.2);
  const txt = useMagneticItem(-0.08);

  const { handleMouseEnter, handleMouseLeave, handleMouseMove } =
    useMagneticButtonVariantTwo(magneticAreaRef, {
      btn,
      btnShadow,
      txt,
    });

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.6, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      ref={magneticAreaRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      whileHover="visible"
      className="w-[150px] h-[150px] relative flex justify-center items-center rounded-full select-none"
    >
      {/* motion.div needs to be direct children of magneticArea*/}
      <CircleMagneticShape
        x={btnShadow.pos.x}
        y={btnShadow.pos.y}
        variants={variants}
        radius="100px"
        className="border-2 border-neutral-700"
      />
      <CircleMagneticShape
        x={btn.pos.x}
        y={btn.pos.y}
        radius="120px"
        className="border-2 border-violet-400"
      />
      <motion.span
        className="text-lg text-neutral-700 font-bold "
        variants={variants}
      >
        {text}
      </motion.span>
      <TextMagnetic
        text={text}
        x={txt.pos.x}
        y={txt.pos.y}
        className="text-violet-400 violetf4nt-light"
      />
    </motion.div>
  );
};

export default MagneticButtonVariantTwo;
