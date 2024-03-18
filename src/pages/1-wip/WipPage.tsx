// import React from 'react'
// import { useMemo, useRef } from "react";

import { Suspense, lazy } from "react";

// const WipComponent = lazy(lazy
//   () => import("../../shaders/raymarching/fract/RaymarchingFractScene")
// );
// import BasicImageDisplace from "../../components/image/displacement/basic/BasicImageDisplace";

const WipComponent = lazy(
  () => import("../../components/image/displacement/basic/BasicImageDisplaceScene")
);

const WipPage = () => {
  return (
    <div className="h-screen w-screen">
      <Suspense fallback={null}>
        <WipComponent />
      </Suspense>
    </div>
  );
};

export default WipPage;
