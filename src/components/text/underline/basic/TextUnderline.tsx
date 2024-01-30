import styles from "./TextUnderline.module.css";

interface Props {
  text: string;
  // outerColor?: string;
  // innerColor?: string;
}

const TextUnderline: React.FC<Props> = ({
  text,
  // outerColor = "#6b7280",
  // innerColor = "#f9fafb",
}) => {
  const { text__wrap, underline__outer, underline__inner } = styles;
  return (
    <div className={text__wrap}>
      {text}
      <div
        // style={{ backgroundColor: outerColor }}
        className={underline__outer}
        // className="w-full h-[2px] bg-neutral-800"
      >
        <div
          // style={{ backgroundColor: innerColor }}
          className={underline__inner}
          // className="w-full h-full transition-transform origin-left scale-x-0 group-hover:scale-x-100 bg-yellow-200"
        />
      </div>
    </div>
  );
};
//text__wrap
export default TextUnderline;
