import { Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./components/layout/Layout";
import useAppRoutes from "./routing/useAppRoutes";

const App = () => {
  const location = useLocation();
  const AppRoutes = useAppRoutes();

  return (
    <>
      {/* layout with side nav */}
      <Layout />
      {/* animate presence for page transition if needed */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {AppRoutes}
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
