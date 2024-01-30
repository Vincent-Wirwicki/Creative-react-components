import { Variants, motion } from "framer-motion";

const ButtonTranslate = () => {
  const hoverVariants: Variants = {
    initial: { perspective: "preserve" },
    hover: {},
  };

  return (
    <motion.button
      className=""
      variants={hoverVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.div />
      <motion.div />
      <motion.h3>Hover me</motion.h3>
      <motion.h3>Hover me</motion.h3>
    </motion.button>
  );
};

export default ButtonTranslate;
