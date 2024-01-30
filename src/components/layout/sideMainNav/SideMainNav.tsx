import { navData } from "./data/navData";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SideMainNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="fixed top-0 left-0 z-40 w-36 p-2 border-b border-r border-neutral-800 bg-neutral-950 flex justify-between items-ends"
        onClick={handleClick}
      >
        <span className=" text-neutral-200">{isOpen ? "Close" : "Menu"}</span>
        {isOpen && (
          <span className="text-xl text-neutral-200 rotate-45"> + </span>
        )}
        {!isOpen && <span className="text-xl text-neutral-200 "> + </span>}
      </button>
      <motion.nav
        className="side-main-nav"
        animate={isOpen ? "open" : "close"}
        variants={{
          open: { clipPath: "inset(0)" },
          close: { clipPath: "inset(0% 0 100% 0)" },
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.ul
          className="side-main-nav-wrap origin-left"
          // variants={{
          //   open: { scaleX: 1 },
          //   close: { scaleX: 0 },
          // }}
          transition={{ duration: 0.3, staggerChildren: 0.1 }}
        >
          {navData.map(({ main: { title }, sub }, index) => (
            <motion.li
              key={index + title}
              // variants={{
              //   open: { y: 0, transition: { staggerChildren: 0.5 } },
              //   close: { y: -200 },
              // }}
            >
              <span className="side-main-nav-category">{title}</span>
              {sub && (
                <ul className="side-main-nav-links-wrap">
                  {sub.map(({ title, path }, idx) => (
                    <NavLink to={path} key={title + idx}>
                      {({ isActive }) => (
                        <li
                          key={title + idx}
                          // onClick={e => console.log(e.currentTarget)}
                          className={
                            isActive
                              ? "side-main-nav-link-active"
                              : "side-main-nav-link-default"
                          }
                        >
                          {title}
                        </li>
                      )}
                    </NavLink>
                  ))}
                  <div className=""></div>
                </ul>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default SideMainNav;
