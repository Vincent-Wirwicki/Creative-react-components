import { useRef } from "react";
import { motion } from "framer-motion";
import useMagneticBasicButton from "./useMagneticBasicButton";

interface Props {
  text: string;
}

const MagneticButton: React.FC<Props> = ({ text = "magnetic" }) => {
  const magneticAreaRef = useRef<HTMLDivElement | null>(null);
  const { handleMouseEnter, handleMouseLeave, handleMouseMove, springs } =
    useMagneticBasicButton(magneticAreaRef);

  const { x, y } = springs;

  return (
    <motion.div
      ref={magneticAreaRef}
      onMouseMove={e => handleMouseMove(e)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group w-[150px] h-[150px] flex justify-center items-center rounded-full border border-dashed border-pink-800 hover:border-emerald-800	"
    >
      <motion.div
        style={{
          translateX: x,
          translateY: y,
        }}
        className="w-[120px] h-[120px] select-none rounded-full border flex justify-center items-center text-pink-400 border-pink-400 group-hover:border-green-400 group-hover:text-green-400"
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

export default MagneticButton;
