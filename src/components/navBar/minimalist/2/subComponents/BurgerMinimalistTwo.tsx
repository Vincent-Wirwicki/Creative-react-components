import { motion } from "framer-motion";

// interface Props {
//   handleClick: () => void;
// }

const BurgerMinimalistTwo = () => {
  return (
    <>
      <motion.span
        className="absolute w-3/4 h-[2px] bg-white"
        variants={{ open: { rotate: -45 }, close: { rotate: 0 } }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute w-2/4 h-[2px] origin-right bg-white"
        initial={false}
        variants={{
          open: { scaleX: 0, y: 5, opacity: 0 },
          close: { scaleX: 1, y: 5, opacity: 1 },
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default BurgerMinimalistTwo;
