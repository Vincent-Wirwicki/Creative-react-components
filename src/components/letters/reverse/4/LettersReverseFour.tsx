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
  const { animate, stopAnimate, letters } = useLettersReverseFour(
    ogLetters,
    perLetter
  );

  return (
    <motion.div
      ref={wrapperRef}
      className="w-fit flex justify-evenly"
      onMouseEnter={animate}
      onMouseLeave={stopAnimate}
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
          {letters[index]}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LettersReverseFour;
