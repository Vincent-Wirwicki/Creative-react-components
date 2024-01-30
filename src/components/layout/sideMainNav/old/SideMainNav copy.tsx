import LinkSideMainBar from "../LinkSideMainBar";
import { navPath } from "../data/navData";
import { useState } from "react";
import { motion } from "framer-motion";
import { wrapperUl, wrapperLi } from "./variants/variantsControlMainSideNav";
import BurgerMenuMainSideNav from "../Icons/BurgerMenuMainSideNav";

const SideMainNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="fixed top-2 left-2 z-30 flex flex-col  p-2"
      animate={isOpen ? "open" : "close"}
    >
      <button
        onClick={handleClick}
        className={
          "relative flex justify-center items-center p-2 cursor-pointer w-[40px] h-[40px] border border-solid border-neutral-500"
        }
      >
        <BurgerMenuMainSideNav />
      </button>
      {/* Divider X */}
      <div className="w-full h-[1px] bg-neutral-500 mt-2"></div>
      {/* wrap all item overflow hidden */}
      <div
        className="w-full h-fit overflow-hidden"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {/* translate */}
        <motion.ul
          className="relative p-2 h-fit w-fit flex flex-col list-none border-b  border-neutral-500 origin-top  "
          variants={wrapperUl}
        >
          {/* wrap li to have a little delay before displaying*/}
          <motion.div variants={wrapperLi}>
            {navPath.map(({ path, text }, index) => (
              <LinkSideMainBar
                key={index + path + text}
                path={path}
                text={text}
              />
            ))}
          </motion.div>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default SideMainNav;
