import { motion } from "framer-motion";

interface Props {
  clipPath: string;
}

const InnerDivPageTransition: React.FC<Props> = ({ clipPath }) => {
  return (
    <motion.div
      className="fixed z-40 top-0 left-0 w-full h-screen bg-neutral-800 flex justify-center items-center"
      initial={{ clipPath: "inset(0)", opacity: 0 }}
      animate={{
        clipPath: clipPath,
        opacity: [1, 0.5],
        transition: {
          duration: 0.5,
          ease: [0.61, 1, 0.88, 1],
          times: [0.5, 1],
        },
      }}
      exit={{
        clipPath: "inset(0)",
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: [0.61, 1, 0.88, 1],
        },
      }}
    >
      {/* {text} */}
    </motion.div>
  );
};

export default InnerDivPageTransition;
