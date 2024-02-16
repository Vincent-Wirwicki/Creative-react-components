import useLetterGlicthInAndOutInfinit from "./useLetterGlicthInAndOutInfinit";

interface Props {
  className?: string;
  perLetter?: number;
  toNextLetter?: number;
  toNextIteration?: number;
  maxIteration?: number;
}

const LetterGlitchInAndOutInfinit: React.FC<Props> = ({
  className,
  perLetter = 15,
  toNextLetter = 5,
  toNextIteration = 5,
  maxIteration = 15,
}) => {
  const words = ["infinit", "glitched", "letters"];
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
        <span className={className} key={index} style={{ width: "50px" }}>
          {letters[index]}
        </span>
      ))}
    </div>
  );
};

export default LetterGlitchInAndOutInfinit;
