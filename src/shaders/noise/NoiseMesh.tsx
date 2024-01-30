// import * as THREE from "three";
import { useRef, useMemo } from "react";
// import { NoiseShaderMaterial } from "./NoiseShaderMaterial";
import { useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Color, ShaderMaterial } from "three";
import { noisyFragment } from "./shader/noisyFragment";
import { noisyVertex } from "./shader/noisyVertex";
// import NoisyMaterial from "./shader/NoisyMaterial";

// import { LayerMaterial, Fresnel, Noise } from "lamina"; Object3DNode

// declare module "@react-three/fiber" {
//   interface ThreeElements {
//     noisyMaterial: Object3DNode<NoisyMaterial, typeof NoisyMaterial>;
//   }
// }

// extend({ NoisyMaterial });

// interface Props {
//   uColorA: THREE.Color;
//   uColorB: THREE.Color;
//   uColorC: THREE.Color;
// }: React.FC<Props> { uColorA, uColorB, uColorC }

const NoiseMesh = () => {
  const materialRef = useRef<ShaderMaterial | null>(null);
  const dataShader = useMemo(
    () => ({
      uniforms: {
        uColorA: {
          value: new Color("#ff0000"),
        },
        uColorB: {
          value: new Color("#000000"),
        },
        uColorC: {
          value: new Color("#000000"),
        },
        uTime: { value: 0 },
      },
      vertex: noisyVertex,
      fragment: noisyFragment,
    }),
    []
  );
  useFrame(() => {
    const time = 0.005;
    if (materialRef.current) materialRef.current.uniforms.uTime.value += time;
  });

  return (
    <>
      <mesh>
        <sphereGeometry args={[0.4, 64, 64]} />
        <meshStandardMaterial roughness={0.1} metalness={0.9} />
      </mesh>
      <Environment background frames={Infinity} far={1000} resolution={256}>
        <mesh scale={20}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <shaderMaterial
            ref={materialRef}
            attach="material"
            uniforms={dataShader.uniforms}
            vertexShader={dataShader.vertex}
            fragmentShader={dataShader.fragment}
          />
        </mesh>
      </Environment>
    </>
  );
};

export default NoiseMesh;
