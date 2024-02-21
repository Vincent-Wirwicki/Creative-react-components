import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import RaymarchMesh from "./RaymarchMesh";

const RaymarchingScene = () => {
  return (
    <Canvas>
      <RaymarchMesh />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default RaymarchingScene;
