import { lazy, Suspense } from "react";

const TerrainParticulesScene = lazy(
  () =>
    import(
      "../../../components/particules/terrain/scene/TerrainParticulesScene"
    )
);

const ParticulesTerrainPage = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={null}>
        <TerrainParticulesScene />
      </Suspense>
    </div>
  );
};

export default ParticulesTerrainPage;
