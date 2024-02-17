import useLetterGlicthInfinit from "./useLetterGlicthInfinit";

interface Props {
  words:string[]
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
  toNextLetter = 15,
}) => {

  const { letters } = useLetterGlicthInfinit(words, perLetter, toNextLetter);

  const longestWord = () => {
    let longestWord = "";
    words.forEach(word => {
      if (word.length > longestWord.length) longestWord = word;
    });
    return longestWord.length;
  };

  const maxLength = longestWord();
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
