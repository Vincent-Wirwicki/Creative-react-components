import { useRef } from "react";
import { Variants, motion } from "framer-motion";
import useMagneticButtonVariantThree from "./useMagneticButtonVariantThree";
import CircleMagneticShape from "../../../1-utils/shapes/CircleMagneticShape";
import TextMagnetic from "../../../1-utils/text/TextMagnetic";
import useMagneticItem from "../../../1-utils/hooks/useMagneticItem";

interface Props {
  text: string;
}

const MagneticButtonVariantThree: React.FC<Props> = ({ text = "magnetic" }) => {
  const magneticAreaRef = useRef<HTMLDivElement | null>(null);
  const offset = 25;

  const particules = {
    1: useMagneticItem(-1.8, offset),
    2: useMagneticItem(1.8, -offset),
    3: useMagneticItem(-0.8, offset * 2),
    4: useMagneticItem(0.8, -offset * 2),
    5: useMagneticItem(-1.4, offset * 3),
    6: useMagneticItem(1.4, -offset * 3),
  };

  const txt = useMagneticItem(-0.1);
  const button = useMagneticItem(0.1);

  const { handleMouseEnter, handleMouseLeave, handleMouseMove } =
    useMagneticButtonVariantThree(magneticAreaRef, {
      ...particules,
      txt,
      button,
    });

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

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
      {Object.values(particules).map((particule, index) => (
        <CircleMagneticShape
          key={index}
          x={particule.pos.x}
          y={particule.pos.y}
          variants={variants}
          springs={{ stiffness: 100 - (index + 4) * 2 }}
          radius="5px"
          className={`bg-blue-400`}
        />
      ))}
      <CircleMagneticShape
        x={button.pos.x}
        y={button.pos.y}
        radius="120px"
        className="border-2 border-blue-600 "
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
