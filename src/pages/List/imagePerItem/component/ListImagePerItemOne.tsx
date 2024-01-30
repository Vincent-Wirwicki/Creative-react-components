import { motion } from "framer-motion";

const ListImagePerItemOne = () => {
  const txt = "react ";
  return (
    <motion.div
      className="flex text-4xl"
      style={{ perspective: "preserve" }}
      initial={{}}
      whileHover={{}}
    >
      {Array.from(txt).map((letter, index) => (
        <motion.p key={index} initial={{}}>
          {letter}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default ListImagePerItemOne;
