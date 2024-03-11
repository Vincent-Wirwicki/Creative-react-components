// import React from 'react'
// import { useMemo, useRef } from "react";

import { Suspense } from "react";

// const WipComponent = lazy(lazy
//   () => import("../../shaders/raymarching/fract/RaymarchingFractScene")
// );

// const WipComponent = lazy(
//   () => import("../../shaders/raymarching/infinit/RaymarchingInfinitScene")
// );

const WipPage = () => {
  return (
    <div className="h-screen w-screen">
      <Suspense fallback={null}>
        {/* <WipComponent /> */}
      </Suspense>
    </div>
  );
};

export default WipPage;
