import { useRef, MutableRefObject, useMemo } from "react";
import { Mesh, Vector2, ShaderMaterial, Texture } from "three";
import { lerp } from "three/src/math/MathUtils.js";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { vertexRGBShift } from "../shader/vertexRGBShift";
import { fragmentRGBShift } from "../shader/fragmentRGBShift";
// import useTextureRGBShift from "./texture/useTextureRGBShift";

interface Props {
  hoverId: number;
  isHover: boolean;
  urls: string[];
  targetPos: MutableRefObject<{
    x: number;
    y: number;
  }>;
}

type ShaderMaterialProps = {
  uniforms: {
    uTexture: { value: Texture | null };
    uOffset: { value: Vector2 };
    uAlpha: { value: number };
  };
  vertexRGBShift: string;
  fragmentRGBShift: string;
};

const MeshRGBShift: React.FC<Props> = ({
  hoverId,
  isHover,
  targetPos,
  urls,
}) => {
  const meshRef = useRef<Mesh | null>(null);
  const mesh = meshRef.current;

  const materialRef = useRef<ShaderMaterial | null>(null);
  const material = materialRef.current;

  const offsetRef = useRef<Vector2>(new Vector2(0.0, 0.0));
  const offset = offsetRef.current;
  const target = targetPos.current;

  const textures = useTexture([...urls]);

  /**
   * Uniforms :
   * uAlpha = opacity,
   * uOffset = lerped MousePos
   * uTexture = photo
   */
  const data = useMemo<ShaderMaterialProps>(
    () => ({
      uniforms: {
        uAlpha: { value: 0.0 },
        uOffset: { value: new Vector2(0.0, 0.0) },
        uTexture: { value: textures[0] },
      },
      vertexRGBShift,
      fragmentRGBShift,
    }),
    [textures]
  );

  /**
   * lerp uAlpha value
   * @param endValue - 0.0 = hide / 1.0 = show
   */
  const handleAlpha = (endValue: 0.0 | 1.0) => {
    if (material) {
      return (material.uniforms.uAlpha.value = lerp(
        material.uniforms.uAlpha.value,
        endValue,
        0.1
      ));
    }
  };

  useFrame(({ size: { left, width, top, height } }) => {
    if (material && mesh) {
      material.uniforms.uTexture.value = textures[hoverId];

      /** lerp offset value to mouse position */
      offset.x = lerp(offset.x, target.x, 0.1);
      offset.y = lerp(offset.y, target.y, 0.1);

      /**
       * formula to shift the shader
       * 0.0005 low value or the effect go crazy
       */
      material.uniforms.uOffset.value.set(
        (target.x - offset.x) * 0.0005,
        -(target.y - offset.y) * 0.0005
      );

      /** Update mesh position */
      mesh.position.set(
        (offset.x - (left + width / 2)) * 0.4,
        (-offset.y + (top + height / 2)) * 0.1,
        0
      );

      /**if mouse is hover canvas show or hide material  */
      isHover ? handleAlpha(1.0) : handleAlpha(0.0);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[250, 350, 1]}>
      <planeGeometry args={[1, 1, 20, 20]} />
      <shaderMaterial
        ref={materialRef}
        attach="material"
        uniforms={data.uniforms}
        vertexShader={data.vertexRGBShift}
        fragmentShader={data.fragmentRGBShift}
        transparent={true}
      />
    </mesh>
  );
};

export default MeshRGBShift;
