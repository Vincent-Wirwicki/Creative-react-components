import { useRef } from "react";
import useLettersReverseOne from "./useLettersReverseOne";

interface Props {
  text: string;
  className?: string;

  perLetter?: number;
}

const LettersReverseOne: React.FC<Props> = ({
  text,
  className,
  perLetter = 10,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ogLetters = Array.from(text);
  const { displayText, animate, stopAnimate } = useLettersReverseOne(
    ogLetters,
    perLetter
  );

  const handleMouseEnter = () => animate();

  const handleMouseLeave = () => stopAnimate();

  return (
    <div
      ref={wrapperRef}
      className="w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={stopAnimate}
    >
      <span className={className}>{displayText}</span>
    </div>
  );
};

export default LettersReverseOne;
