import { useMemo, useRef } from "react";

import { basicImgDisplaceFragment } from "./shader/basicImgDisplaceFragment";
import { basicImgDisplaceVertex } from "./shader/basicImgDisplaceVertex";
import { ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

// interface Props {
//     url:string;
// }

const BasicImageDisplaceMesh = () => {
  const shaderRef = useRef<ShaderMaterial | null>(null);

  const texture = useTexture("/images/lowRes/maybe.jpg");

  const scaleDown = 0.001;
  const width = texture.source.data.naturalHeight * scaleDown;
  const height = texture.source.data.naturalWidth * scaleDown;

  const dataShader = useMemo(
    () => ({
      uniforms: {
        uTime: { type: "f", value: 0 },
        uTexture: { type: "t", value: texture },
      },
      vertex: basicImgDisplaceVertex,
      fragment: basicImgDisplaceFragment,
    }),
    [texture]
  );
  // console.log(mapRange(scale[0], scale[1], 0,1))
  useFrame(({ clock }) => {
    if (shaderRef.current)
      shaderRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });
  return (
    <mesh>
      <planeGeometry attach="geometry" args={[width, height, 64, 64]} />
      <shaderMaterial
        ref={shaderRef}
        attach="material"
        uniforms={dataShader.uniforms}
        fragmentShader={dataShader.fragment}
        vertexShader={dataShader.vertex}
      />
    </mesh>
  );
};

export default BasicImageDisplaceMesh;
