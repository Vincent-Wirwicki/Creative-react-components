import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import StarterMesh from "./StarterMesh";

// import NoiseMesh from "./NoiseMesh";

const StarterCanvas = () => {
  return (
    <Canvas>
      <StarterMesh />
      <OrbitControls />
    </Canvas>
  );
};

export default StarterCanvas;
