import { useFBO } from "@react-three/drei";
import {
  useFrame,
  createPortal,
  extend,
  Object3DNode,
} from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  AdditiveBlending,
  FloatType,
  NearestFilter,
  OrthographicCamera,
  RGBAFormat,
  Scene,
  ShaderMaterial,
} from "three";

import RenderMaterialFBOTwo from "../shader/render/RenderMaterialFBOTwo";
import SimMaterialFBOTwo from "../shader/sim/SimMaterialFBOTwo";

extend({
  SimMaterialFBOone: SimMaterialFBOTwo,
  RenderMaterialFBOone: RenderMaterialFBOTwo,
});

declare module "@react-three/fiber" {
  interface ThreeElements {
    renderMaterialFBOTwo: Object3DNode<
      RenderMaterialFBOTwo,
      typeof RenderMaterialFBOTwo
    >;
  }
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    simMaterialFBOTwo: Object3DNode<
      SimMaterialFBOTwo,
      typeof SimMaterialFBOTwo
    >;
  }
}
const ParticulesFBOTwo = () => {
  const size = 512;

  const simulationMaterialRef = useRef<ShaderMaterial | null>(null);
  const renderMaterialRef = useRef<ShaderMaterial | null>(null);

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1);
  const positions = new Float32Array([
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
  ]);
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

  const particles = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      const i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);

  const test = useMemo(() => {
    const length = size * size;
    const test = new Float32Array(length * 2);
    for (let j = 0; j < length; j++) {
      for (let i = 0; i < length; i++) {
        test[i * 2 + 0] = j / length;
        test[i * 2 + 1] = i / length;
      }
    }
    return test;
  }, [size]);

  const target = useFBO(size, size, {
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    format: RGBAFormat,
    type: FloatType,
  });
  console.log(test);
  useFrame(state => {
    const { gl, clock } = state;
    gl.setRenderTarget(target);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    if (renderMaterialRef.current) {
      renderMaterialRef.current.uniforms.uPositions.value = target.texture;
    }
    if (simulationMaterialRef.current)
      simulationMaterialRef.current.uniforms.uTime.value =
        clock.elapsedTime * 2;
  });

  return (
    <>
      {createPortal(
        <mesh>
          <simMaterialFBOone ref={simulationMaterialRef} args={[size]} />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points>
        <renderMaterialFBOone
          ref={renderMaterialRef}
          blending={AdditiveBlending}
        />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={2}
          />
        </bufferGeometry>
      </points>
    </>
  );
};

export default ParticulesFBOTwo;
