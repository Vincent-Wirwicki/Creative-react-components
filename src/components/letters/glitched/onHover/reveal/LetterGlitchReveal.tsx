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
  const { stopAnimate, animate, letters } = useLetterGlicthReveal(
    ogLetters,
    perLetter,
    toNextLetter,
    toNextIteration
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

export default LetterGlitchReveal;
