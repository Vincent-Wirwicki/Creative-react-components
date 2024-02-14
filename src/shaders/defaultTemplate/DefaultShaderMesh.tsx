import { useMemo, useRef } from "react";
import { ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";

import { defaultVertex } from "./shader/defaultVertex";
import { defaultFragment } from "./shader/defaultFragment";

const DefaultShaderMesh = () => {
  const shaderRef = useRef<ShaderMaterial | null>(null);

  const dataShader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
      },
      vertex: defaultVertex,
      fragment: defaultFragment,
    }),
    []
  );

  useFrame(() => {
    if (shaderRef.current) shaderRef.current.uniforms.uTime.value += 0.005;
  });

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[5, 5, 100, 100]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={dataShader.uniforms}
        fragmentShader={dataShader.fragment}
        vertexShader={dataShader.vertex}
        // wireframe={true}
        // blending={AdditiveBlending}
        // transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
};

export default DefaultShaderMesh;
