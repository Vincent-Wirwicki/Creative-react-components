import useLetterGlicthRandomInfinit from "./useLetterGlicthRandomInfinit";
// import { frame } from "framer-motion";
import { useRef } from "react";

interface Props {
  words: string[];
  className?: string;
  perLetter?: number;
  toNextLetter?: number;
  toNextIteration?: number;
  maxIteration?: number;
}

const LetterGlitchRandomInfinit: React.FC<Props> = ({
  words,
  className,
  perLetter = 15,
  toNextLetter = 10,
  toNextIteration = 10,
  maxIteration = 20,
}) => {
  const { letters } = useLetterGlicthRandomInfinit(
    words,
    perLetter,
    toNextLetter,
    toNextIteration,
    maxIteration
  );
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}>
      {letters.map((letter, index) => (
        <span className={className} key={index}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default LetterGlitchRandomInfinit;
