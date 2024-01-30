import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Noise,
  Vignette,
  // Glitch,
} from "@react-three/postprocessing";
// import { Vector2 } from "three";

const NoisyBackground = () => {
  // const delay = new Vector2(0.5, 2.5);
  // const duration = new Vector2(0.1, 0.3);
  return (
    <div
      id="layout-background"
      className="fixed top-0 left-0 w-full h-screen pointer-events-none"
    >
      <Canvas color="#262626" className="pointer-events-none">
        <color attach="background" args={["#0a0a0a"]} />
        <fog color="#0a0a0a" attach="fog" near={15} far={30} />
        <EffectComposer>
          <Noise opacity={0.02} attach="background" />
          {/* <Glitch delay={delay} ratio={0.2} duration={duration} /> */}
          <Vignette eskil={false} offset={0.1} darkness={0.9} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default NoisyBackground;
