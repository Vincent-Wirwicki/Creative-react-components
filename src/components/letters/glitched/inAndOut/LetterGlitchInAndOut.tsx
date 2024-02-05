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
  const { animate, stopAnimate, letters } = useLetterGlicthInAndOut(
    ogLetters,
    perLetter,
    toNextLetter,
    toNextIteration,
    maxIteration
  );

  return (
    <div onMouseEnter={animate} onMouseLeave={stopAnimate}>
      {ogLetters.map((letter, index) => (
        <span className={className} key={index + letter}>
          {letters[index]}
        </span>
      ))}
    </div>
  );
};

export default LetterGlitchInAndOut;
