import { lazy, Suspense } from "react";

const NoisyCanvas = lazy(() => import("../../../shaders/noisy/NoisyScene"));

const NoisePage = () => {
  return (
    <Suspense fallback={null}>
      <NoisyCanvas />
    </Suspense>
  );
};

export default NoisePage;
