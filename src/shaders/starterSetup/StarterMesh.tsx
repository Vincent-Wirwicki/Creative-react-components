import { useRef } from "react";
import { StarterShaderMaterial } from "./StarterShaderMaterial";
import { extend, Object3DNode, useFrame } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    starterShaderMaterial: Object3DNode<
      StarterShaderMaterial,
      typeof StarterShaderMaterial
    >;
  }
}

extend({ StarterShaderMaterial });

const StarterMesh = () => {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  useFrame(() => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value += 0.02;
  });

  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <starterShaderMaterial ref={materialRef} />
    </mesh>
  );
};

export default StarterMesh;
