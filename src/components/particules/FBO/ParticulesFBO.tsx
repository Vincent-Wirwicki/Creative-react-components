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

import SimulationMaterialFBO from "./shader/simulation/SimulationMaterialFBO";
import RenderMaterialFBO from "./shader/render/RenderMaterialFBO";

extend({
  SimulationMaterialFBO: SimulationMaterialFBO,
  RenderMaterialFBO: RenderMaterialFBO,
});

declare module "@react-three/fiber" {
  interface ThreeElements {
    simulationMaterialFBO: Object3DNode<
      SimulationMaterialFBO,
      typeof SimulationMaterialFBO
    >;
  }
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    renderMaterialFBO: Object3DNode<
      RenderMaterialFBO,
      typeof RenderMaterialFBO
    >;
  }
}

const ParticulesFBO = () => {
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

  const target = useFBO(size, size, {
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    format: RGBAFormat,
    type: FloatType,
  });

  useFrame(state => {
    const {
      gl,
      clock,
      camera: { position },
    } = state;
    console.log(position);
    gl.setRenderTarget(target);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    if (renderMaterialRef.current)
      renderMaterialRef.current.uniforms.uPositions.value = target.texture;

    if (simulationMaterialRef.current)
      simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterialFBO ref={simulationMaterialRef} args={[size]} />
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
        <renderMaterialFBO
          ref={renderMaterialRef}
          blending={AdditiveBlending}
        />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
      </points>
    </>
  );
};

export default ParticulesFBO;

//   const [scene] = useState(() => new Scene());
//   const [camera] = useState(
//     () => new OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1)
//   );
//   const [positions] = useState(
//     () =>
//       new Float32Array([
//         -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
//       ])
//   );
//   const [uvs] = useState(
//     () => new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0])
//   );
// var geom = new THREE.BufferGeometry();
// geom.addAttribute(
//   "position",
//   new THREE.BufferAttribute(
//     new Float32Array([
//       -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
//     ]),
//     3
//   )
// );
// geom.addAttribute(
//   "uv",
//   new THREE.BufferAttribute(
//     new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]),
//     2
//   )
// );
// scene.add(new THREE.Mesh(geom, simulationMaterial));
