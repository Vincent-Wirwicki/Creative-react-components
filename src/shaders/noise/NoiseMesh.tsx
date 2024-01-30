import * as THREE from "three";
import { useRef } from "react";
import { NoiseShaderMaterial } from "./NoiseShaderMaterial";
import { extend, Object3DNode, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
// import { LayerMaterial, Fresnel, Noise } from "lamina";

declare module "@react-three/fiber" {
  interface ThreeElements {
    noiseShaderMaterial: Object3DNode<
      NoiseShaderMaterial,
      typeof NoiseShaderMaterial
    >;
  }
}

extend({ NoiseShaderMaterial });

interface Props {
  uColorA: THREE.Color;
  uColorB: THREE.Color;
  uColorC: THREE.Color;
}

const NoiseMesh: React.FC<Props> = ({ uColorA, uColorB, uColorC }) => {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

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
          <noiseShaderMaterial
            ref={materialRef}
            side={THREE.BackSide}
            uColorA={uColorA}
            uColorB={uColorB}
            uColorC={uColorC}
          />
        </mesh>
      </Environment>
    </>
  );
};

export default NoiseMesh;
