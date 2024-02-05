import { motion } from "framer-motion";
import { wrapper, spanEl } from "./variantsConfigLettersReverseThree";
import useLettersReverseThree from "./useLettersReverseThree"; // import { wrapper, spanEl } from "./variantsConfigLettersReverseTwo";

interface Props {
  text: string;
  className?: string;
  perLetter?: number;
}

const LettersReverseThree: React.FC<Props> = ({
  text,
  className,
  perLetter = 6,
}) => {
  const ogLetters = Array.from(text);
  const { animate, stopAnimate, letters } = useLettersReverseThree(
    ogLetters,
    perLetter
  );

  return (
    <motion.div
      className="w-fit flex"
      onMouseEnter={animate}
      onMouseLeave={stopAnimate}
      variants={wrapper}
      initial="initial"
      whileHover="hover"
    >
      {ogLetters.map((letter, index) => (
        <motion.span
          key={index + letter}
          variants={spanEl}
          className={className}
        >
          {letters[index]}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LettersReverseThree;
