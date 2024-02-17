import useLongestWord from "../../utils/useLongestWord";
import useLetterGlicthRandomInfinit from "./useLetterGlicthRandomInfinit";

interface Props {
  words:string[]
  className?: string;
  perLetter?: number;
  toNextLetter?: number;
  toNextIteration?: number;
  maxIteration?: number;
}

const LetterGlitchRandomInfinit: React.FC<Props> = ({
  words,
  className,
  perLetter = 10,
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

  const maxLength = useLongestWord(words);
  const displaySpan = Array(maxLength).fill("");

  return (
    <div>
      {displaySpan.map((_, index) => (
        <span className={className} key={index}>
          {letters[index]}
        </span>
      ))}
    </div>
  );
};

export default LetterGlitchRandomInfinit;
