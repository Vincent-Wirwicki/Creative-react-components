import { Canvas } from "@react-three/fiber";
import BasicImageDisplaceMesh from "./BasicImageDisplaceMesh";
import { OrbitControls } from "@react-three/drei";

const BasicImageDisplace = () => {
  return (
    <Canvas camera={{ position: [0, 0, 0.8] }}>
      <BasicImageDisplaceMesh />
      <OrbitControls />
    </Canvas>
  );
};

export default BasicImageDisplace;
