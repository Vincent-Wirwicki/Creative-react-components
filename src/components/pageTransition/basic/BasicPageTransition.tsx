import { motion, Variants } from "framer-motion";

const BasicPageTransition = <P extends object>(
  OgComponent: React.ComponentType<P>
) => {
  const style =
    "fixed top-0 left-0 w-full h-screen pointer-events-none bg-neutral-800";

  const path = {
    start: {
      clipPath: "inset(100% 0 0 0)",
    },
    mid: {
      clipPath: "inset(0 0 0 0)",
    },
    end: {
      clipPath: "inset(0 0 100% 0)",
    },
  };

  const { start, mid, end } = path;

  const slideIn: Variants = {
    slideInStart: { ...start },
    slideInEnd: {
      ...mid,
      transition: {
        duration: 0.5,
        easings: "backIn",
      },
    },
  };

  const slideOut: Variants = {
    slideOutStart: { ...mid },
    slideOutEnd: {
      ...end,
      transition: { duration: 0.5, easings: "backOut" },
    },
  };

  return (props: P) => (
    <>
      <OgComponent {...props} />
      <motion.div
        className={style}
        variants={slideIn}
        initial="slideInStart"
        animate="slideInStart"
        exit="slideInEnd"
      />
      <motion.div
        className={style}
        variants={slideOut}
        initial="slideOutStart"
        animate="slideOutEnd"
        exit="slideOutEnd"
      />
    </>
  );
};

export default BasicPageTransition;
