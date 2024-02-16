import { Route } from "react-router-dom";

import ShadersPage from "../../pages/Shaders/ShadersPage";
import NoisePage from "../../pages/Shaders/noise/NoisePage";
import LavaLampPage from "../../pages/Shaders/lavaLamp/LavaLampPage";

export const shaderPaths = {
  main: { path: "/shaders/lavaLamp", title: "Shaders" },
  sub: [
    { path: "/shaders/lavaLamp", title: "Lava lamp" },
    { path: "/shaders/noise", title: "Noisy" },
  ],
};

const useShadersRoutes = () => {
  return (
    <Route path="/shaders" element={<ShadersPage />}>
      <Route path="/shaders/lavaLamp" element={<LavaLampPage />} />
      <Route path="/shaders/noise" element={<NoisePage />} />
    </Route>
  );
};

export default useShadersRoutes;
