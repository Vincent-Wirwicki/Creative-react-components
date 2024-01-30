import { motion } from "framer-motion";

const TransitionScaleY = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 z-50 w-full h-full bg-neutral-950 border-b-2 border-neutral-200 origin-top"
        initial={{ scaleY: 0.5 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed bottom-0 z-50 w-full h-full bg-neutral-950 border-t-2 border-neutral-200 origin-bottom"
        initial={{ scaleY: 0.5 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default TransitionScaleY;
