import { Route } from "react-router-dom";
import ImagesPage from "../../pages/Images/ImagesPage";
import ImageDisplacePage from "../../pages/Images/displace/ImageDisplacePage";

export const imagesPaths = {
  main: { path: "/images", title: "Images " },
  sub: [
    { path: "/images/displace", title: "displace" },
    // { path: "/list/imageRgbShift", title: "RGB Shift" },
  ],
};

const useImageRoutes = () => {
  return (
    <Route path="/images" element={<ImagesPage />}>
      <Route path="/images/displace" element={<ImageDisplacePage />}></Route>
    </Route>
  );
};

export default useImageRoutes;
