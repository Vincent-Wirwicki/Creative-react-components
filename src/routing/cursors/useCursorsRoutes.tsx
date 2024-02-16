import { Route } from "react-router-dom";

import CursorsPage from "../../pages/Cursors/CursorsPage";
import LerpCursorPage from "../../pages/Cursors/lerp/LerpCursorPage";
import ImageTrialPage from "../../pages/Cursors/imageTrials/ImageTrialPage";

export const cursorPaths = {
  main: { path: "/cursors/lerp", title: "Cursors" },
  sub: [
    { path: "/cursors/lerp", title: "lerp" },
    { path: "/cursors/image-trail", title: "img trial" },
  ],
};

const useCursorsRoutes = () => {
  return (
    <Route path="/cursors" element={<CursorsPage />}>
      <Route path="/cursors/lerp" element={<LerpCursorPage />} />
      <Route path="/cursors/image-trail" element={<ImageTrialPage />} />
    </Route>
  );
};

export default useCursorsRoutes;
