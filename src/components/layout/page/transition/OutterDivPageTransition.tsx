import { motion } from "framer-motion";

interface Props {
  clipPath: string;
  position: string;
}

const OutterDivPageTransition: React.FC<Props> = ({ clipPath, position }) => {
  return (
    <motion.div
      className={" fixed z-50 " + position + " bg-neutral-900"}
      initial={{ clipPath: "inset(0)", opacity: 0 }}
      animate={{
        clipPath: clipPath,
        opacity: [1, 0.5],
        transition: {
          duration: 0.5,
          // easings: "backInOut",
          ease: [0.61, 1, 0.88, 1],
          times: [0.5, 1],
        },
      }}
      exit={{
        clipPath: "inset(0)",
        opacity: 1,
        transition: {
          duration: 0.4,
          // easings: "backInOut",
          ease: [0.61, 1, 0.88, 1],
        },
      }}
    />
  );
};

export default OutterDivPageTransition;
