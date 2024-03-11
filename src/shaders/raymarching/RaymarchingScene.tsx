import { Canvas } from "@react-three/fiber";
import RaymarchMesh from "./RaymarchMesh";

const RaymarchingScene = () => {
  return (
    <Canvas>
      <RaymarchMesh />
    </Canvas>
  );
};

export default RaymarchingScene;
