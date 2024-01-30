import { motion } from "framer-motion";

interface Props {
  text: string;
}

const TitlePageTransition: React.FC<Props> = ({ text }) => {
  const splitText = Array.from(text);
  return (
    <motion.div
      className="fixed top-1/2 left-1/2 z-50 translate-x-[-50%] translate-y-[-50%] w-20 h-fit"
      initial={{ perspective: "preserve", x: 0, rotateX: 0 }}
      animate={{
        transition: {
          duration: 0.6,
          ease: [0.61, 1, 0.88, 1],
          staggerChildren: 0.02,
        },
      }}
      exit={{
        transition: {
          duration: 0.4,
          ease: [0.61, 1, 0.88, 1],
          staggerChildren: 0.02,
        },
      }}
    >
      {splitText.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ perspective: "preserve", x: 0, rotateX: 0 }}
          animate={{ x: 10, rotateX: 90 }}
          exit={{ x: 10, rotateX: 90 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TitlePageTransition;
// clipPath: "inset(0)",
// opacity: 1,
// transition: {
//   duration: 0.4,
//   // easings: "backInOut",
//   ease: [0.61, 1, 0.88, 1],
// },
