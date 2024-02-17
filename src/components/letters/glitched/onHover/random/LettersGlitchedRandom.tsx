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
  const ogLetters = Array.from(text);
  const { animate, stopAnimate, letters } = useLettersGlitchedRandom(
    ogLetters,
    perLetter,
    toNextLetter
  );

  return (
    <div
      className="w-fit"
      onMouseEnter={animate}
      onMouseLeave={stopAnimate}
      // onTouchEnd={handleMouseLeave}
    >
      {ogLetters.map((letter, index) => (
        <span className={className} key={index + letter}>
          {letters[index]}
        </span>
      ))}
    </div>
  );
};

export default LettersGlitchedRandom;
