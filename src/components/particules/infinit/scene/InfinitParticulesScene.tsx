import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import InfinitParticules from "../particules/InfinitParticules";

const InfinitParticulesScene = () => {
  return (
    <Canvas camera={{ position: [0, -1.75, 0.7] }}>
      <Suspense fallback={null}>
        <InfinitParticules />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default InfinitParticulesScene;
// camera={{ position: [0, -0.5, 0.1] }} 0.33184823306263417 2.7312241891882465 -0.16992885532869062
