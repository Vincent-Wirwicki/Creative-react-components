import styles from "./SmallNavBar.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  navLinks: { path: string; text: string }[];
  isDark: boolean;
  width?: string;
  top?: string;
  left?: string;
}

const SmallNavBar: React.FC<Props> = ({
  navLinks,
  isDark,
  width = "400px",
  top = "25%",
  left = "25%",
}) => {
  const {
    nav__bar,
    nav__bar__burger,
    nav__bar__burger__line,
    nav__bar__links,
    nav__bar__links__item,
    nav__bar__links__item__underline,
  } = styles;

  const colorMain = isDark ? "hsl(0, 0%, 10%, 1)" : "hsl(0, 0%, 85%, 1)";
  const colorSecondary = isDark ? "hsl(0, 0%, 20%, 1)" : "hsl(0, 0%, 78%, 1)";
  const colorText = isDark ? "hsl(0, 0%, 90%, 1)" : "hsl(0, 0%, 10%, 1)";

  return (
    <nav
      style={{
        top: top,
        left: left,
        width: width,
        backgroundColor: colorMain,
        color: colorText,
      }}
      className={nav__bar}
    >
      <div
        style={{ backgroundColor: colorSecondary }}
        className={nav__bar__burger}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            style={{ backgroundColor: colorText }}
            key={index}
            className={nav__bar__burger__line}
          />
        ))}
      </div>
      <ul
        style={{ backgroundColor: colorSecondary }}
        className={nav__bar__links}
      >
        {navLinks.map(({ text, path }, index) => (
          <NavLink
            className={nav__bar__links__item}
            key={path + index}
            to={path}
          >
            {({ isActive }) => (
              <motion.li className={nav__bar__links__item} layout>
                {text}
                {isActive ? (
                  <motion.span
                    style={{
                      backgroundColor: colorText,
                    }}
                    className={nav__bar__links__item__underline}
                    layoutId={nav__bar__links__item__underline}
                  />
                ) : null}
              </motion.li>
            )}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default SmallNavBar;

// const [selectedTab, setSelectedTab] = useState(tabs[0]);

//         {
//           tabs.map(item => (
//             <li
//               key={item.label}
//               className={item === selectedTab ? "selected" : ""}
//               onClick={() => setSelectedTab(item)}
//             >
//               {`${item.icon} ${item.label}`}
//               {item === selectedTab ? (
//                 <motion.div className="underline" layoutId="underline" />
//               ) : null}
//             </li>
//           ));
//         }
