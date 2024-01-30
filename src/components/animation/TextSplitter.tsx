import { motion } from "framer-motion";
import styles from "./TextSplitter.module.css";

interface Props {
  text: string;
}
const TextSplitter: React.FC<Props> = ({ text }) => {
  const { wrap, wrap__span, span__letter } = styles;

  const hoverVariants = {
    rest: {},
    hover: {
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.02,
        // issue with stagger do not properly reverse
      },
    },
  };

  const spanLettersTop = {
    rest: { transform: "translate3d(0, 0%, 0) rotateX(0deg)" },
    hover: {
      transform: "translate3d(0, -25%, 0) rotateX(90deg)",
    },
  };

  const spanLettersBottom = {
    rest: { transform: "translate3d(0, -75%, 0) rotateX(-90deg)" },
    hover: {
      transform: "translate3d(0, -100%, 0) rotateX(0deg)",
    },
  };

  const CreateSpan = (
    text: string,
    og: "top" | "bottom",
    variants: typeof spanLettersTop | typeof spanLettersBottom
  ) => (
    <div className={wrap__span}>
      {Array.from(text).map((letter, index) => (
        <motion.span
          style={{ transformOrigin: og }}
          className={span__letter}
          key={index}
          variants={variants}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );

  return (
    <motion.div
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
      className={wrap}
    >
      {CreateSpan(text, "top", spanLettersTop)}
      {CreateSpan(text, "bottom", spanLettersBottom)}
    </motion.div>
  );
};

export default TextSplitter;
