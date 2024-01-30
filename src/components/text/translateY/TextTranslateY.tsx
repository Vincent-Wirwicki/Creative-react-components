import { useRef } from "react";
import styles from "./TextTranslateY.module.css";

interface Props {
  text: string;
  color?: string;
}

const TextTranslateY: React.FC<Props> = ({ text, color = "#f9fafb" }) => {
  const { text__wrap } = styles;
  const divRef = useRef<HTMLDivElement>(null);
  let wrapperHeight = 0;

  const getRefHeight = () => {
    if (divRef.current) {
      wrapperHeight = divRef.current.getBoundingClientRect().height;
    }
  };

  getRefHeight();

  return (
    <div style={{ color: color, height: wrapperHeight }} className={text__wrap}>
      <div ref={divRef}>{text}</div>
      <div>{text}</div>
    </div>
  );
};

export default TextTranslateY;
