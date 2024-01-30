import { lazy, Suspense } from "react";

const NoiseCanvas = lazy(() => import("../../../shaders/noise/NoiseCanvas"));

const NoisePage = () => {
  return (
    <Suspense fallback={null}>
      <NoiseCanvas />
    </Suspense>
  );
};

export default NoisePage;
