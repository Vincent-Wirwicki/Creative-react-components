import useLetterGlicthInAndOutInfinit from "./useLetterGlicthInAndOutInfinit";

interface Props {
  words:string[]
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
  toNextLetter = 5,
  toNextIteration = 10,
  maxIteration = 20,
}) => {

  const { letters } = useLetterGlicthInAndOutInfinit(
    words,
    perLetter,
    toNextLetter,
    toNextIteration,
    maxIteration
  );

  const longestWord = () => {
    let longestWord = "";
    words.forEach(word => {
      if (word.length > longestWord.length) longestWord = word;
    });
    return longestWord.length;
  };

  const maxLength = longestWord() + 1;
  const displayText = Array(maxLength).fill("");

  return (
    <div>
      {displayText.map((_, index) => (
        <span className={className} key={index}>
          {letters[index]}
        </span>
      ))}
    </div>
  );
};

export default LetterGlitchInAndOutInfinit;
