import { useRef } from "react";
import useLetterGlicthInAndOut from "./useLetterGlicthInAndOut";

interface Props {
  text: string;
  className?: string;
  perLetter?: number;
  toNextLetter?: number;
  toNextIteration?: number;
  maxIteration?: number;
}

const LetterGlitchInAndOut: React.FC<Props> = ({
  text,
  className,
  perLetter = 10,
  toNextLetter = 15,
  toNextIteration = 30,
  maxIteration = 3,
}) => {
  const ogLetters = Array.from(text);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { handleMouseEnter, handleMouseLeave } = useLetterGlicthInAndOut(
    wrapperRef,
    ogLetters,
    perLetter,
    toNextLetter,
    toNextIteration,
    maxIteration
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

export default LetterGlitchInAndOut;
