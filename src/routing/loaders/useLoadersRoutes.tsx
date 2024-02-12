import { Route } from "react-router-dom";
import LoadersPage from "../../pages/Loaders/LoadersPage";

const useLoadersRoutes = () => {
  return <Route path="/loaders" element={<LoadersPage />} />;
};

export default useLoadersRoutes;
