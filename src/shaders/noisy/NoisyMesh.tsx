import { useMemo, useRef } from "react";
import { AdditiveBlending, ShaderMaterial } from "three";

import { noisyFragment } from "./shader/noisyFragment";
import { noisyVertex } from "./shader/noisyVertex";
import { useFrame } from "@react-three/fiber";

const NoisyMesh = () => {
  const shaderRef = useRef<ShaderMaterial | null>(null);
  //  const meshRef
  const dataShader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
      },
      vertex: noisyVertex,
      fragment: noisyFragment,
    }),
    []
  );

  useFrame(() => {
    if (shaderRef.current) shaderRef.current.uniforms.uTime.value += 0.005;
  });

  return (
    <mesh position={[0, -2, 0]}>
      <torusGeometry args={[10, 3, 16, 100]} />
      {/* <sphereGeometry args={[2, 64, 64]} /> */}

      <shaderMaterial
        ref={shaderRef}
        uniforms={dataShader.uniforms}
        fragmentShader={dataShader.fragment}
        vertexShader={dataShader.vertex}
        wireframe={true}
        blending={AdditiveBlending}
        transparent={true}
      />
    </mesh>
  );
};

export default NoisyMesh;
