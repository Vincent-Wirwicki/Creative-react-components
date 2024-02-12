import { Route } from "react-router-dom";

import ParticulesPage from "../../pages/Particules/ParticulesPage";
import ParticulesConstellationPage from "../../pages/Particules/constellation/ParticulesConstellationPage";
import ParticulesMouseMovePage from "../../pages/Particules/interactivity/ParticulesMouseMovePage";
import ParticulesFBOPage from "../../pages/Particules/FBO/ParticulesFBOPage";
import ParticulesTerrainPage from "../../pages/Particules/terrain/ParticulesTerrainPage";

const useParticulesRoutes = () => {
  return (
    <>
      <Route path="/particules" element={<ParticulesPage />}>
        <Route
          path="/particules/constellation"
          element={<ParticulesConstellationPage />}
        />
        <Route
          path="/particules/mousemove"
          element={<ParticulesMouseMovePage />}
        />
        <Route path="/particules/FBO" element={<ParticulesFBOPage />} />
        <Route path="/particules/terrain" element={<ParticulesTerrainPage />} />
      </Route>
    </>
  );
};

export default useParticulesRoutes;