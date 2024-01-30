import LinkSideMainBar from "../LinkSideMainBar";
import { navPath } from "../data/navData";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import BurgerMenuMainSideNav from "../Icons/BurgerMenuMainSideNav";

const SideMainNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleClick = () => setIsOpen(!isOpen);
  const ref = useRef<HTMLUListElement | null>(null);

  const getBounding = () => {
    if (ref.current) {
      const { height, width } = ref.current.getBoundingClientRect();
      return { height, width };
    }
  };

  const bounding = getBounding();

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

      <motion.div
        className="relative w-full h-[1px] bg-neutral-500 mt-2"
        // variants={{ open: { bottom: 0 }, close: { top: 0 } }}
      ></motion.div>
      {/* wrap all item overflow hidden */}

      {/* translate */}
      <div
        className="relative overflow-hidden w-fit h-fit"
        style={{
          height: bounding?.height + "px",
          width: bounding?.width + "px",
        }}
      >
        <motion.ul
          ref={ref}
          className="absolute z-10 p-2 h-fit w-fit flex flex-col list-none  "
          variants={{
            open: { clipPath: "inset(0)" },
            close: { clipPath: "inset(0 0 100% 0)" },
          }}
          transition={{ duration: 0.8 }}
        >
          {/* wrap li to have a little delay before displaying*/}
          {navPath.map(({ path, text }, index) => (
            <LinkSideMainBar
              key={index + path + text}
              path={path}
              text={text}
            />
          ))}
        </motion.ul>
        <motion.div
          className="absolute z-20  border-t border-neutral-500  "
          style={{
            height: bounding?.height + "px",
            width: bounding?.width + "px",
          }}
          variants={{
            open: { y: "100%" },
            close: { y: "0%" },
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
      {/* <motion.div
          className="w-full h-[1px] bg-neutral-500 "
          variants={{
            open: { clipPath: "inset(0)" },
            close: { clipPath: "inset(0 100% 0 100%)" },
          }}
        ></motion.div> */}
    </motion.nav>
  );
};

export default SideMainNav;
