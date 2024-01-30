import { motion } from "framer-motion";

interface Props {
  navLinks: string[];
}

const NavLinksMinimalistTwo: React.FC<Props> = ({ navLinks }) => {
  return (
    <motion.ul
      variants={{
        open: { clipPath: "inset(0)" },
        close: { clipPath: "inset(0% 0 100% 0)" },
      }}
      transition={{ duration: 0.4 }}
    >
      {navLinks.map((text, id) => (
        <motion.li key={id} className="cursor-pointer text-base">
          {text}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavLinksMinimalistTwo;
