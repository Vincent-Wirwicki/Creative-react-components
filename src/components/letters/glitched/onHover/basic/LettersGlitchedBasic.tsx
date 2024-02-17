import useLettersGlitchedBasic from "./useLettersGlitchedBasic";

interface Props {
  text: string;
  className?: string;
  perLetter?: number;
}

const LettersGlitchedOne: React.FC<Props> = ({
  text,
  className,
  perLetter = 12,
}) => {
  const { displayText, animate, stopAnimate } = useLettersGlitchedBasic(
    text,
    perLetter
  );

  return (
    <div
      className={className}
      onMouseEnter={animate}
      onMouseLeave={stopAnimate}
    >
      {displayText}
    </div>
  );
};

export default LettersGlitchedOne;
