import SideMainNav from "./sideMainNav/SideMainNav";
import { Outlet } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import NoisyBackground from "./page/background/NoisyBackground";

const Layout = () => {
  // const location = useLocation();
  // const currentUrl = location.pathname;

  return (
    <>
      {/* {currentUrl.includes("/shaders") ||
      currentUrl.includes("/list") ? null : (
        <NoisyBackground />
      )} */}
      <SideMainNav />
      <Outlet />
    </>
  );
};

export default Layout;

// || currentUrl.includes("/particules")
