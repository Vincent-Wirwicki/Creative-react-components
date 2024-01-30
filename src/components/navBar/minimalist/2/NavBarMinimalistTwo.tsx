import { useState } from "react";
import { motion } from "framer-motion";
import BurgerMinimalistTwo from "./subComponents/BurgerMinimalistTwo";
import NavLinksMinimalistTwo from "./subComponents/NavLinksMinimalistTwo";
// import DividerMinimalistTwo from "./subComponents/DividerMinimalistTwo";

const NavBarMinimalistTwo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navLinks = ["home", "projects", "about", "contact"];
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="mt-10 w-[150px] h-[120px] select-none flex justify-between jus p-2"
      animate={isOpen ? "open" : "close"}
    >
      <button
        className="relative w-[40px] h-[40px] border border-solid border-white flex justify-end items-center text-lg cursor-pointer p-1 "
        onClick={handleClick}
      >
        <BurgerMinimalistTwo />
      </button>
      {/* <DividerMinimalistTwo /> */}
      <nav>
        <NavLinksMinimalistTwo navLinks={navLinks} />
      </nav>
    </motion.div>
  );
};

export default NavBarMinimalistTwo;
