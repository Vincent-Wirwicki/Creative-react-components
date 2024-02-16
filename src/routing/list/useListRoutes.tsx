import { Route } from "react-router-dom";
import ListPage from "../../pages/List/ListPage";
import ListImageTranslatePage from "../../pages/List/translateImage/ListImageTranslatePage";
import ListRgbShiftPage from "../../pages/List/rgbShift/ListRgbShiftPage";
import ListImagePerItemOne from "../../pages/List/imagePerItem/component/ListImagePerItemOne";

export const listPaths = {
  main: { path: "/list", title: "List " },
  sub: [
    { path: "/list/imageTranslate", title: "translate" },
    { path: "/list/imageRgbShift", title: "RGB Shift" },
  ],
};

const useListRoutes = () => {
  return (
    <Route path="/list" element={<ListPage />}>
      <Route path="/list/imageTranslate" element={<ListImageTranslatePage />} />
      <Route path="/list/imageRgbShift" element={<ListRgbShiftPage />} />
      <Route path="/list/imagePerItem" element={<ListImagePerItemOne />} />
    </Route>
  );
};

export default useListRoutes;
