import { Canvas } from "@react-three/fiber";
import ParticulesFBOTwo from "../particules/ParticulesFBOTwo";
import { OrbitControls } from "@react-three/drei";

const ParticulesFBOSceneOne = () => {
  return (
    <Canvas>
      <ParticulesFBOTwo />
      <OrbitControls />
    </Canvas>
  );
};

export default ParticulesFBOSceneOne;
