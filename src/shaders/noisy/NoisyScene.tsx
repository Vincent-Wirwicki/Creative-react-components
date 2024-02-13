import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NoisyMesh from "./NoisyMesh";

const NoisyScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 25] }}>
      {/* <color attach="background" args={["black"]} /> */}
      <NoisyMesh />
      <OrbitControls />
    </Canvas>
  );
};

export default NoisyScene;
