// import React from 'react'
import { lazy, Suspense } from "react";

const WipComponent = lazy(
  () => import("../../shaders/defaultTemplate/DefaultShaderScene")
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
