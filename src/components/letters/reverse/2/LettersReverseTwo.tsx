import { useRef } from "react";
import { motion } from "framer-motion";
import useLettersReverseTwo from "./useLettersReverseTwo";
import { wrapper, spanEl } from "./variantsConfigLettersReverseTwo";

interface Props {
  text: string;
  className?: string;
  perLetter?: number;
}
const LettersReverseTwo: React.FC<Props> = ({
  text,
  className,
  perLetter = 6,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ogLetters = Array.from(text);
  const { handleMouseEnter, handleMouseLeave } = useLettersReverseTwo(
    wrapperRef,
    ogLetters,
    perLetter
  );

  return (
    <motion.div
      ref={wrapperRef}
      className="w-fit flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={wrapper}
      initial="initial"
      whileHover="hover"
    >
      {ogLetters.map((letter, index) => (
        <motion.span
          key={index + letter}
          className={className}
          variants={spanEl}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LettersReverseTwo;
