import { lazy, Suspense } from "react";

const RaymarchScene = lazy(
  () => import("../../../shaders/raymarching/RaymarchingScene")
);

const RayMarchPage = () => {
  return (
    <Suspense fallback={null}>
      <RaymarchScene />
    </Suspense>
  );
};

export default RayMarchPage;
