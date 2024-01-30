import { useRef } from "react";
import useLetterGlicthReveal from "./useLetterGlicthReveal";

interface Props {
  text: string;
  className?: string;
  perLetter?: number;
  toNextLetter?: number;
  toNextIteration?: number;
}

const LetterGlitchReveal: React.FC<Props> = ({
  text,
  className,
  perLetter = 10,
  toNextLetter = 15,
  toNextIteration = 30,
}) => {
  const ogLetters = Array.from(text);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { handleMouseEnter, handleMouseLeave } = useLetterGlicthReveal(
    wrapperRef,
    ogLetters,
    perLetter,
    toNextLetter,
    toNextIteration
  );

  return (
    <div
      ref={wrapperRef}
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {ogLetters.map((letter, index) => (
        <span className={className} key={index + letter}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default LetterGlitchReveal;
