import useButtonsRoutes from "./buttons/useButtonsRoutes";
import useCursorsRoutes from "./cursors/useCursorsRoutes";
import useHomeRoutes from "./home/useHomeRoutes";
import useListRoutes from "./list/useListRoutes";
import useParticulesRoutes from "./particules/useParticulesRoutes";
import useShadersRoutes from "./shaders/useShadersRoutes";
import useTextRoutes from "./text/useTextRoutes";
import useWipRoutes from "./wip/useWipRoutes";

const useAppRoutes = () => {
  const ButtonsRoutes = useButtonsRoutes();
  const CursorsRoutes = useCursorsRoutes();
  const HomeRoutes = useHomeRoutes();
  const ListRoutes = useListRoutes();
  const ParticulesRoutes = useParticulesRoutes();
  const ShaderRoutes = useShadersRoutes();
  const TextRoutes = useTextRoutes();
  const WipRoutes = useWipRoutes();

  return (
    <>
      {HomeRoutes}
      {ButtonsRoutes}
      {CursorsRoutes}
      {ListRoutes}
      {ShaderRoutes}
      {TextRoutes}
      {ParticulesRoutes}
      {WipRoutes}
    </>
  );
};

export default useAppRoutes;
