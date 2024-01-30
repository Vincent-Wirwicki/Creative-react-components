import { useRef } from "react";
import useLettersGlitchedRandom from "./useLettersGlitchedRandom";

interface Props {
  text: string;
  className?: string;
  perLetter?: number;
  toNextLetter?: number;
}

const LettersGlitchedRandom: React.FC<Props> = ({
  text,
  className,
  perLetter = 10,
  toNextLetter = 50,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ogLetters = Array.from(text);
  const { handleMouseEnter, handleMouseLeave } = useLettersGlitchedRandom(
    wrapperRef,
    ogLetters,
    perLetter,
    toNextLetter
  );

  return (
    <div
      ref={wrapperRef}
      className="w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
    >
      {ogLetters.map((letter, index) => (
        <span className={className} key={index + letter}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default LettersGlitchedRandom;
