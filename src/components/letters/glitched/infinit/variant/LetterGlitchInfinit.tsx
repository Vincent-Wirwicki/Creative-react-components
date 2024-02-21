import useLongestWord from "../../utils/useLongestWord";
import useLetterGlicthInfinit from "./useLetterGlicthInfinit";

interface Props {
  words: string[];
  className?: string;
  perLetter?: number;
  toNextLetter?: number;
  toNextIteration?: number;
  maxIteration?: number;
}

const LetterGlitchInfinit: React.FC<Props> = ({
  words,
  className,
  perLetter = 10,
  toNextLetter = 5,
  toNextIteration = 15,
  maxIteration = 10,
}) => {
  const { letters } = useLetterGlicthInfinit(
    words,
    perLetter,
    toNextLetter,
    toNextIteration,
    maxIteration
  );

  const maxLength = useLongestWord(words);
  const displayText = Array(maxLength).fill("");

  return (
    <div>
      {displayText.map((_, index) => (
        <span className={className} key={index} style={{ width: "50px" }}>
          {letters[index]}
        </span>
      ))}
    </div>
  );
};

export default LetterGlitchInfinit;
