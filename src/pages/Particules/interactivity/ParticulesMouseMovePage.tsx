import { lazy, Suspense } from "react";

const ParticulesMouseMove = lazy(
  () =>
    import("../../../components/particules/interactivity/ParticulesMouseMove")
);

const ParticulesMouseMovePage = () => {
  return (
    <Suspense fallback={null}>
      <ParticulesMouseMove />
    </Suspense>
  );
};

export default ParticulesMouseMovePage;
