import { useState } from "react";
import { motion } from "framer-motion";

const NavBarMinimalist = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navTexts = ["home", "projects", "about", "contact"];

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="relative w-fit select-none flex flex-col justify-center items-center mt-5"
      animate={isOpen ? "open" : "closed"}
    >
      <button
        className="w-[55px] cursor-pointer p-2 text-center"
        onClick={handleClick}
      >
        <h3>{isOpen ? "close" : "menu"}</h3>
      </button>
      {/* divider */}
      <div className="flex justify-center items-center">
        <motion.div
          className="absolute w-full h-[2px] bg-white rounded-full"
          variants={{
            open: { clipPath: "inset(0 0% 0 0)" },
            closed: { clipPath: "inset(0 100% 0 100%)" },
          }}
          transition={{ duration: 0.4, easings: "circIn" }}
        />
        {/* simple circle */}
        <div className="absolute w-[10px] h-[10px] bg-white rounded-full" />
      </div>
      {/* nav item */}
      <nav>
        <motion.ul
          className="flex justify-between cursor-pointer"
          initial={{ opacity: 0, rotateX: 90, y: -5, perspective: "preserve" }}
          variants={{
            open: { opacity: 1, rotateX: 0, y: 0 },
            close: { opacity: 0, rotateX: 135, y: -5 },
          }}
          transition={{
            duration: 0.4,
            easings: "circIn",
          }}
        >
          {navTexts.map((text, id) => (
            <li
              key={id}
              className="p-2 h-fit w-fit overflow-hidden text-white hover:text-yellow-400"
            >
              {text}
            </li>
          ))}
        </motion.ul>
      </nav>
    </motion.div>
  );
};

export default NavBarMinimalist;
