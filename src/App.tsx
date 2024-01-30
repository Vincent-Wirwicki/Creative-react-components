import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./components/layout/Layout";

import HomePage from "./pages/Home/HomePage";

/**-----------
 * cursor page
 * ------------
 */
import CursorsPage from "./pages/Cursors/CursorsPage";
import LerpCursorPage from "./pages/Cursors/lerp/LerpCursorPage";

/**-----------
 * text split page
 * ------------
 */
import TextPage from "./pages/Text/TextPage";
import TextSplitPage from "./pages/Text/textSplit/TextSplitPage";

/**-----------
 * particules page
 * ------------
 */
import ParticulesPage from "./pages/Particules/ParticulesPage";
import ParticulesConstellationPage from "./pages/Particules/constellation/ParticulesConstellationPage";
import ParticulesMouseMovePage from "./pages/Particules/interactivity/ParticulesMouseMovePage";
import ParticulesFBOPage from "./pages/Particules/FBO/ParticulesFBOPage";

/**-----------
 * shader page
 * ------------
 */
import ShadersPage from "./pages/Shaders/ShadersPage";
import NoisePage from "./pages/Shaders/noise/NoisePage";
import LavaLampPage from "./pages/Shaders/lavaLamp/LavaLampPage";

/**-----------
 * button page
 * ------------
 */
import ButtonsPage from "./pages/Buttons/ButtonsPage";
import ButtonsMagneticPage from "./pages/Buttons/magnetic/ButtonsMagneticPage";
import LoadersPage from "./pages/Loaders/LoadersPage";

/**-----------
 * list page
 * ------------
 */
import ListPage from "./pages/List/ListPage";
import ListImageTranslatePage from "./pages/List/translateImage/ListImageTranslatePage";
import ListRgbShiftPage from "./pages/List/rgbShift/ListRgbShiftPage";
import ListImagePerItemOne from "./pages/List/imagePerItem/component/ListImagePerItemOne";

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* layout with side nav */}
      <Layout />

      {/* animate presence for page transition if needed */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* home */}
          <Route index element={<HomePage />} />

          {/* cursor page */}
          <Route path="/cursors" element={<CursorsPage />}>
            <Route path="/cursors/lerp" element={<LerpCursorPage />} />
          </Route>

          {/*text page */}
          <Route path="/text" element={<TextPage />}>
            <Route path="/text/text-split" element={<TextSplitPage />} />
          </Route>

          {/* particules page */}
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
          </Route>

          {/* shader page */}
          <Route path="/shaders" element={<ShadersPage />}>
            <Route path="/shaders/lavaLamp" element={<LavaLampPage />} />
            <Route path="/shaders/noise" element={<NoisePage />} />
          </Route>

          {/* button page */}
          <Route path="/buttons" element={<ButtonsPage />}>
            <Route path="/buttons/magnetic" element={<ButtonsMagneticPage />} />
          </Route>

          {/* loader page */}
          <Route path="/loaders" element={<LoadersPage />} />

          {/* list page */}
          <Route path="/list" element={<ListPage />}>
            <Route
              path="/list/imageTranslate"
              element={<ListImageTranslatePage />}
            />
            <Route path="/list/imageRgbShift" element={<ListRgbShiftPage />} />
            <Route
              path="/list/imagePerItem"
              element={<ListImagePerItemOne />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
