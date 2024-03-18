import { textPaths } from "./text/useTextRoutes";
import { shaderPaths } from "./shaders/useShadersRoutes";
import { particulesPaths } from "./particules/useParticulesRoutes";
import { listPaths } from "./list/useListRoutes";
import { buttonPaths } from "./buttons/useButtonsRoutes";
import { cursorPaths } from "./cursors/useCursorsRoutes";
import { imagesPaths } from "./images/useImageRoutes";

export const navPaths = [
  { ...cursorPaths },
  { ...textPaths },
  { ...imagesPaths },
  { ...buttonPaths },
  { ...listPaths },
  { ...particulesPaths },
  { ...shaderPaths },
];
