import { lazy, Suspense } from "react";

const Particules = lazy(
  () => import("../../../components/particules/constelation/Particules")
);

const ParticulesConstellationPage = () => {
  return (
    <Suspense fallback={null}>
      <Particules />
    </Suspense>
  );
};

export default ParticulesConstellationPage;
