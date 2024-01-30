import useLetterReverse from "./useLettersReverse";
// import styles from "./LetterReverse.module.css"

interface Props {
  text: string;
  speed?: number;
}

const LettersReverse: React.FC<Props> = ({ text, speed = 50 }) => {
  const { reverse, stopReverse, displayText } = useLetterReverse(text, speed);

  return (
    <div
      onMouseEnter={reverse}
      onMouseLeave={stopReverse}
      className=""
      style={{ userSelect: "none" }}
    >
      {displayText}
    </div>
  );
};

export default LettersReverse;
