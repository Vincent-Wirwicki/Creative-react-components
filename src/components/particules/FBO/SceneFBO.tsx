import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import ParticulesFBO from "./ParticulesFBO";

// import NoiseMesh from "./NoiseMesh";
// https://barradeau.com/blog/?p=621 to learn more

const SceneFBO = () => {
  return (
    <Canvas camera={{ position: [-228, -40, -121] }}>
      <ParticulesFBO />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default SceneFBO;
