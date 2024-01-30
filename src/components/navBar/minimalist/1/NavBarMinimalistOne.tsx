import { useState } from "react";
import { motion } from "framer-motion";

import NavLinksMinimalistOne from "./subComponents/NavLinksMinimalistOne";
import TextButtonMinimalistOne from "./subComponents/TextButtonMinimalistOne";
import DividerMinimalistOne from "./subComponents/DividerMinimalistOne";

const NavBarMinimalistOne = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navLinks = ["home", "projects", "about", "contact"];
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
        <TextButtonMinimalistOne isOpen={isOpen} />
      </button>
      <DividerMinimalistOne />
      <nav>
        <NavLinksMinimalistOne navLinks={navLinks} />
      </nav>
    </motion.div>
  );
};

export default NavBarMinimalistOne;
