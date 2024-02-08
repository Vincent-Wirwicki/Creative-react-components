import { lazy, Suspense } from "react";

const ParticulesFBO = lazy(
  () =>
    import(
      "../../../components/particules/FBO/curl/scene/ParticulesFBOSceneCurl"
    )
);

// const TerrainParticules = lazy(
//   () =>
//     import(
//       "../../../components/particules/terrain/scene/TerrainParticulesScene"
//     )
// );

// const ParticulesFBOTwo = lazy(
//   () => import("../../../components/particules/FBO/2/scene/SceneFBOTwo")
// );

// const ParticulesFBOMorph = lazy(
//   () => import("../../../components/particules/FBO/morph/scene/MorphSceneFBO")
// );

const ParticulesFBOPage = () => {
  return (
    <Suspense fallback={null}>
      <ParticulesFBO />
      {/* <ParticulesFBO /> */}
    </Suspense>
  );
};

export default ParticulesFBOPage;
