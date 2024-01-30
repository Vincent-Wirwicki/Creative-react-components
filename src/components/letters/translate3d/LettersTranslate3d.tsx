import { useRef, useEffect } from "react";

import styles from "./LettersTranslate3d.module.css";

interface Props {
  text?: string;
  duration?: number;
  delay?: number;
  easing?: string;
}

const LettersTranslate3d: React.FC<Props> = ({
  text = "translate",
  duration = 250,
  delay = 0.02,
  easing = "cubic-bezier(0.5, 1, 0.89, 1)",
}) => {
  const letters = Array.from(text);
  const { wrap, span__letter } = styles;
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const CreateSpan = (origin: "top" | "bottom") => (
    <div>
      {letters.map((letter, index) => (
        <span
          key={letter + index}
          className={span__letter}
          style={{
            transformOrigin: origin,
            transitionDuration: `${duration}ms`,
            transitionDelay: `${delay * index}s`,
            transitionTimingFunction: easing,
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
  useEffect(() => {}, []);

  return (
    <div className={wrap} ref={wrapRef}>
      {CreateSpan("top")}
      {CreateSpan("bottom")}
    </div>
  );
};

export default LettersTranslate3d;
