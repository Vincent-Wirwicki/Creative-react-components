import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
// import { useControls } from "leva";
// import { Color } from "three";useMemo
import NoiseMesh from "./NoiseMesh";

const NoiseCanvas = () => {
  // const options = useMemo(() => {
  //   return {
  //     colorA: "#ff0000",
  //     colorB: "#000000",
  //     colorC: "#000000",
  //   };
  // }, []);

  // const { colorA, colorB, colorC } = useControls(options);        {/* <NoiseMesh
  //   uColorA={new Color(colorA)}
  //   uColorB={new Color(colorB)}
  //   uColorC={new Color(colorC)}
  // /> */}

  return (
    <Canvas camera={{ position: [0.774, -0.601, -0.1] }}>
      <Suspense fallback={null}>
        <NoiseMesh />
      </Suspense>
      <EffectComposer>
        <Noise opacity={0.05} />
      </EffectComposer>
      <OrbitControls
        autoRotate
        minPolarAngle={Math.PI / 1.8}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
};

export default NoiseCanvas;

// x: 0.7740974486154854, y: -0.601845185319965, z: -0.10077456501602013
// [1.097, -0.543,-1.048]
// x: 1.0978681057635034;
// y: -0.5431821401511646;
// z: -1.0487090011308882;
