import { Route } from "react-router-dom";

import ParticulesPage from "../../pages/Particules/ParticulesPage";
import ParticulesConstellationPage from "../../pages/Particules/constellation/ParticulesConstellationPage";

export const particulesPaths = {
  main: { path: "/particules", title: "Particules" },
  sub: [{ path: "/particules/constellation", title: "Cloud" }],
};

const useParticulesRoutes = () => {
  return (
    <>
      <Route path="/particules" element={<ParticulesPage />}>
        <Route
          path="/particules/constellation"
          element={<ParticulesConstellationPage />}
        />
      </Route>
    </>
  );
};

export default useParticulesRoutes;
