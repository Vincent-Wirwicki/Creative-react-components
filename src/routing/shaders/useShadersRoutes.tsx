import { Route } from "react-router-dom";

import ShadersPage from "../../pages/Shaders/ShadersPage";
import NoisePage from "../../pages/Shaders/noise/NoisePage";
import LavaLampPage from "../../pages/Shaders/lavaLamp/LavaLampPage";

const useShadersRoutes = () => {
  return (
    <Route path="/shaders" element={<ShadersPage />}>
      <Route path="/shaders/lavaLamp" element={<LavaLampPage />} />
      <Route path="/shaders/noise" element={<NoisePage />} />
    </Route>
  );
};

export default useShadersRoutes;
