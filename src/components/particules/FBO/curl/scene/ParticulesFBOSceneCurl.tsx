import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";

import { OrbitControls } from "@react-three/drei";
import ParticulesFBOone from "../particules/ParticulesFBOCurl";

const ParticulesFBOSceneCurl = () => {
  return (
    <Canvas camera={{ position: [-52, 4, -2] }}>
      <Suspense fallback={null}>
        <ParticulesFBOone />
        <Preload />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ParticulesFBOSceneCurl;

// x: -52.78058277595631;
// y: 4.452921559604716;
// z: -2.669522172558941;
