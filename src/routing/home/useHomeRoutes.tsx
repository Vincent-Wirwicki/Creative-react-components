import { Route } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";

const useHomeRoutes = () => {
  return <Route index element={<HomePage />} />;
};

export default useHomeRoutes;
