import { useRef, useState } from "react";
import useParticulesMouseMove from "./hook/useParticulesMouseMove";
import { motion } from "framer-motion";

const ParticulesMouseMove = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useParticulesMouseMove(canvasRef, isHover);

  return (
    <motion.div
      className="bento-grid cursor-[none]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas
        className="col-start-1 col-span-8 row-start-1 row-span-6"
        ref={canvasRef}
      />
    </motion.div>
  );
};

export default ParticulesMouseMove;
