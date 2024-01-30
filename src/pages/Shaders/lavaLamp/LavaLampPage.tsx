import { lazy, Suspense } from "react";

const LavaLampScene = lazy(
  () => import("../../../shaders/lavaLamp/LavaLampScene")
);

const LavaLampPage = () => (
  <Suspense fallback={<div>loading</div>}>
    <LavaLampScene />
  </Suspense>
);

export default LavaLampPage;
