import { motion } from "framer-motion";

const TransitionBlock = () => {
  return (
    <motion.div
      className="absolute z-30 w-full h-full bg-neutral-950 border-b-2 border-neutral-500 origin-top"
      initial={{ scaleY: 0.5 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      exit={{ scaleY: 0 }}
    />
  );
};

export default TransitionBlock;
