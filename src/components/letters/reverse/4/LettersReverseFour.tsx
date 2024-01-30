import { useRef } from "react";
import { motion } from "framer-motion";
import { wrapper, spanEl } from "./variantsConfigLettersReverseFour";
import useLettersReverseFour from "./useLettersReverseFour"; // import { wrapper, spanEl } from "./variantsConfigLettersReverseTwo";

interface Props {
  text: string;
  className?: string;
  perLetter?: number;
}

const LettersReverseFour: React.FC<Props> = ({
  text,
  className,
  perLetter = 6,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ogLetters = Array.from(text);
  const { handleMouseEnter, handleMouseLeave } = useLettersReverseFour(
    wrapperRef,
    ogLetters,
    perLetter
  );

  return (
    <motion.div
      ref={wrapperRef}
      className="w-fit flex justify-evenly"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={wrapper}
      initial="initial"
      whileHover="hover"
    >
      {ogLetters.map((letter, index) => (
        <motion.span
          key={index + letter}
          style={{ perspective: "preserve" }}
          variants={spanEl}
          className={className}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LettersReverseFour;
