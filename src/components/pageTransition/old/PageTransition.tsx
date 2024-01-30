import { motion } from "framer-motion";
import {
  slideInVariants,
  slideInChildVariants,
  slideOut,
} from "./configTransition";
import styles from "./Transition.module.css";

const pageTransition = <P extends object>(
  OgComponent: React.ComponentType<P>
) => {
  const colors = ["#737155", "#A69F7C", "#F2E3B3", "#A69F7C", "#737155"];
  const { initial, end, transition } = slideOut;
  const { slide } = styles;

  return (props: P) => (
    <>
      <OgComponent {...props} />
      <motion.div
        className={slide}
        variants={slideInVariants}
        initial="enterIn"
        animate="enterIn"
        exit="exitIn"
      >
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className={slide}
            style={{ backgroundColor: color }}
            variants={slideInChildVariants}
          />
        ))}
      </motion.div>
      <motion.div
        className={slide}
        initial={initial}
        animate={end}
        exit={end}
        transition={transition}
      />
    </>
  );
};

export default pageTransition;
