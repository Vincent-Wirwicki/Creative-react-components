import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";

// import { OrbitControls } from "@react-three/drei";
import ParticulesFBOone from "../particules/ParticulesFBOCurl";

const ParticulesFBOSceneCurl = () => {
  return (
    <Canvas camera={{ position: [-525, -150, -125] }}>
      <Suspense fallback={null}>
        <ParticulesFBOone />
        <Preload />
      </Suspense>
    </Canvas>
  );
};

export default ParticulesFBOSceneCurl;
