import { useAspect } from "@react-three/drei";
import { ShaderMaterial, Vector2 } from "three";
import { raymarchFragment } from "./shader/raymarchFragment";
import { raymarchVertex } from "./shader/raymarchVertex";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RaymarchMesh = () => {
  const scale = useAspect(window.innerWidth, window.innerHeight, 1);
  const shaderRef = useRef<ShaderMaterial | null>(null);

  const dataShader = useMemo(
    () => ({
      uniforms: {
        uTime: { type: "f", value: 0 },
        uResolution: {
          type: "v2",
          value: new Vector2(),
        },
      },
      vertex: raymarchVertex,
      fragment: raymarchFragment,
    }),
    []
  );

  useFrame(({ clock }) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = clock.getElapsedTime();
      // shaderRef.current.uniforms.uResolution.value.x = window.innerWidth;
      // shaderRef.current.uniforms.uResolution.value.y = window.innerHeight;
      shaderRef.current.uniforms.uResolution.value = new Vector2(
        window.innerWidth,
        window.innerHeight
      );
    }
  });

  return (
    <mesh scale={[...scale]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={dataShader.uniforms}
        fragmentShader={dataShader.fragment}
        vertexShader={dataShader.vertex}
        transparent={true}
      />
    </mesh>
  );
};

export default RaymarchMesh;
//  <ScreenQuad scale={scale}></ScreenQuad>; ScreenQuad           value: new Vector2(window.innerWidth, window.innerHeight),  value: new Vector2(scale[0], scale[1]),
// <mesh scale={[...scale]}>
//   <planeGeometry args={[1, 1, 1, 1]} />
//   <shaderMaterial
//     ref={shaderRef}
//     uniforms={dataShader.uniforms}
//     fragmentShader={dataShader.fragment}
//     vertexShader={dataShader.vertex}
//     transparent={true}
//   />
// </mesh>
