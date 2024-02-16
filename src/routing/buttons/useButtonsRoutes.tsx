import { Route } from "react-router-dom";

import ButtonsPage from "../../pages/Buttons/ButtonsPage";
import ButtonsMagneticPage from "../../pages/Buttons/magnetic/ButtonsMagneticPage";

export const buttonPaths = {
  main: { path: "/buttons", title: "Buttons" },
  sub: [{ path: "/buttons/magnetic", title: "Magnetic" }],
};

const useButtonsRoutes = () => {
  return (
    <Route path="/buttons" element={<ButtonsPage />}>
      <Route path="/buttons/magnetic" element={<ButtonsMagneticPage />} />
    </Route>
  );
};

export default useButtonsRoutes;
