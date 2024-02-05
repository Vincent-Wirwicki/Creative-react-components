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
  const ogLetters = Array.from(text);
  const { animate, stopAnimate, letters } = useLettersReverseTwo(
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
          className={className}
          variants={spanEl}
        >
          {letters[index]}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LettersReverseTwo;
