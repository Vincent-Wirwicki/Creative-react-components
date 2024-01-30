import { motion } from "framer-motion";
import styles from "./TextSplitter.module.css";

interface Props {
  text: string;
}
const TextTranslate: React.FC<Props> = ({ text }) => {
  const { wrap, wrap__text } = styles;

  const hoverVariants = {
    rest: {},
    hover: {
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const translateTop = {
    rest: { transform: "translate3d(0, 0%, 0) rotateX(0deg)" },
    hover: { transform: "translate3d(0, -25%, 0) rotateX(90deg)" },
  };

  const translateBottom = {
    rest: { transform: "translate3d(0, -75%, 0) rotateX(-90deg)" },
    hover: { transform: "translate3d(0, -100%, 0) rotateX(0deg)" },
  };

  const AnimateText = (
    text: string,
    origin: "top" | "bottom",
    variants: typeof translateBottom | typeof translateTop,
    font: "Young Serif, serif" | "Gabarito, sans-serif"
  ) => (
    <motion.div
      style={{ transformOrigin: origin, fontFamily: font }}
      className={wrap__text}
      variants={variants}
    >
      {text}
    </motion.div>
  );

  return (
    <motion.div
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
      className={wrap}
    >
      {AnimateText(text, "top", translateTop, "Gabarito, sans-serif")}
      {AnimateText(text, "bottom", translateBottom, "Young Serif, serif")}
    </motion.div>
  );
};

export default TextTranslate;
