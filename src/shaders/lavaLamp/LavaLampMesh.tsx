import { useFrame, extend, Object3DNode } from "@react-three/fiber";
import * as THREE from "three";
import { LavaLampMaterial } from "./LavaLampMaterials";
import { useRef, useMemo } from "react";

interface Props {
  colors: string[];
}
// <typeof THREE.ShaderMaterial & { key: string }>
declare module "@react-three/fiber" {
  interface ThreeElements {
    lavaLampMaterial: Object3DNode<LavaLampMaterial, typeof LavaLampMaterial>;
  }
}

extend({ LavaLampMaterial });

const LavaLampMesh: React.FC<Props> = ({ colors }) => {
  const shaderColors = useMemo(
    () => colors.map(color => new THREE.Color(color)),
    [colors]
  );
  const ref = useRef<THREE.ShaderMaterial | null>(null);

  useFrame(() => {
    if (ref.current) ref.current.uniforms.uTime.value += 0.0003;
  });

  return (
    <mesh>
      <planeGeometry args={[1.5, 1.5, 400, 400]} />
      <lavaLampMaterial ref={ref} uColors={shaderColors} />
    </mesh>
  );
};

export default LavaLampMesh;
