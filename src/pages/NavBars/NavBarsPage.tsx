import styles from "./NavBars.module.css";
// import SmallNavBar from "../../components/navBar/smallNavBarHorizontal/SmallNavBar";
import BasicBurger from "../../components/navBar/burger/BasicBurger";
import NavBarMinimalistOne from "../../components/navBar/minimalist/1/NavBarMinimalistOne";
import NavBarMinimalistTwo from "../../components/navBar/minimalist/2/NavBarMinimalistTwo";
import PageLayout from "../../components/layout/page/PageLayout";
import { Outlet } from "react-router-dom";
import { useState } from "react";
// import BasicPageTransition from "../../components/pageTransition/basic/BasicPageTransition";

const NavBarsPage = () => {
  const { nav__bars__page } = styles;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <PageLayout title="nav">
      <div className={nav__bars__page}>
        <button onClick={handleClick}>
          <BasicBurger isOpen={isOpen} />
        </button>
        <div>
          <NavBarMinimalistOne />
        </div>
        <div>
          <NavBarMinimalistTwo />
        </div>
        {/* <SmallNavBar navLinks={navLinks} isDark={true} /> */}
        <Outlet />
      </div>
    </PageLayout>
  );
};
export default NavBarsPage;
// const navLinks = [
//   { path: "/navbars/home", text: "home" },
//   { path: "/navbars/services", text: "services" },
//   { path: "/navbars/about", text: "about" },
//   { path: "/navbars/contact", text: "contact" },
//   // { path: "", text: "contact" },
// ];
