import useButtonsRoutes from "./buttons/useButtonsRoutes";
import useCursorsRoutes from "./cursors/useCursorsRoutes";
import useHomeRoutes from "./home/useHomeRoutes";
import useListRoutes from "./list/useListRoutes";
import useParticulesRoutes from "./particules/useParticulesRoutes";
import useShadersRoutes from "./shaders/useShadersRoutes";
import useTextRoutes from "./text/useTextRoutes";
import useWipRoutes from "./wip/useWipRoutes";

const useAppRoutes = () => {
  const AppRoutes = {
    ButtonsRoutes: useButtonsRoutes(),
    CursorsRoutes: useCursorsRoutes(),
    HomeRoutes: useHomeRoutes(),
    ListRoutes: useListRoutes(),
    ParticulesRoutes: useParticulesRoutes(),
    ShaderRoutes: useShadersRoutes(),
    TextRoutes: useTextRoutes(),
    WipRoutes: useWipRoutes(),
  };

  return <>{Object.values(AppRoutes).map(route => route)}</>;
};

export default useAppRoutes;
