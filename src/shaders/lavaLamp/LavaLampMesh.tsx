import { useFrame } from "@react-three/fiber";
// import { LavaLampMaterial } from "./LavaLampMaterials";
import { useRef, useMemo } from "react";
import { Color } from "three";

import { lavaLampfragement } from "./shader/lavaLampFragment";
import { lavaLampVertex } from "./shader/lavaLampVertex";

// interface Props {
//   colors: string[];
// }

// Object3DNode
// <typeof THREE.ShaderMaterial & { key: string }>
// declare module "@react-three/fiber" {
//   interface ThreeElements {
//     lavaLampMaterial: Object3DNode<LavaLampMaterial, typeof LavaLampMaterial>;
//   }
// }

// extend({ LavaLampMaterial });

const LavaLampMesh = () => {
  // const shaderColors = useMemo(
  //   () => colors.map(color => new THREE.Color(color)),
  //   [colors]
  // );

  const dataShader = useMemo(
    () => ({
      uniforms: {
        uColors: {
          value: [
            new Color("#0c0a09"),
            new Color("#eab308"),
            new Color("#14532d"),
            new Color("#991b1b"),
            new Color("#292524"),
          ],
        },
        uTime: { value: 0 },
      },
      vertex: lavaLampVertex,
      fragment: lavaLampfragement,
    }),
    []
  );
  const ref = useRef<THREE.ShaderMaterial | null>(null);

  useFrame(() => {
    if (ref.current) ref.current.uniforms.uTime.value += 0.0003;
  });

  return (
    <mesh>
      <planeGeometry args={[1.5, 1.5, 400, 400]} />
      <shaderMaterial
        ref={ref}
        attach="material"
        uniforms={dataShader.uniforms}
        vertexShader={dataShader.vertex}
        fragmentShader={dataShader.fragment}
      />
      {/* <lavaLampMaterial ref={ref} uColors={shaderColors} /> */}
    </mesh>
  );
};

export default LavaLampMesh;
