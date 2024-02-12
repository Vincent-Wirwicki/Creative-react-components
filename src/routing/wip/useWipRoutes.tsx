import { Route } from "react-router-dom";
import WipPage from "../../pages/1-wip/WipPage";

const useWipRoutes = () => {
  return <Route path="/wip" element={<WipPage />} />;
};

export default useWipRoutes;
