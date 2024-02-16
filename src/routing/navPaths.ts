import { textPaths } from "./text/useTextRoutes";
import { shaderPaths } from "./shaders/useShadersRoutes";
import { particulesPaths } from "./particules/useParticulesRoutes";
import { listPaths } from "./list/useListRoutes";
import { buttonPaths } from "./buttons/useButtonsRoutes";
import { cursorPaths } from "./cursors/useCursorsRoutes";

export const navPaths = [
  { ...cursorPaths },
  { ...textPaths },
  { ...buttonPaths },
  { ...listPaths },
  { ...particulesPaths },
  { ...shaderPaths },
];
