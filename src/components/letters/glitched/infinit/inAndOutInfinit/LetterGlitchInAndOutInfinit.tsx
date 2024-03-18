import useLongestWord from "../../utils/useLongestWord";
import useLetterGlicthInAndOutInfinit from "./useLetterGlicthInAndOutInfinit";

interface Props {
  words: string[];
  className?: string;
  perLetter?: number;
  toNextLetter?: number;
  toNextIteration?: number;
  maxIteration?: number;
}

const LetterGlitchInAndOutInfinit: React.FC<Props> = ({
  words,
  className,
  perLetter = 15,
  toNextLetter = 10,
  toNextIteration = 10,
  maxIteration = 20,
}) => {
  const specialChars = [..."°²+'@*!&".split("")];

  //animation
  const { letters } = useLetterGlicthInAndOutInfinit(
    words,
    specialChars,
    perLetter,
    toNextLetter,
    toNextIteration,
    maxIteration
  );

  //number of span elements based on the longest word of the array
  const maxSpan = useLongestWord(words) + 1;
  const spanEl = Array(maxSpan).fill("");

  return (
    <p>
      {spanEl.map((_, index) => (
        <span className={className} key={index}>
          {letters[index]}
        </span>
      ))}
    </p>
  );
};

export default LetterGlitchInAndOutInfinit;
