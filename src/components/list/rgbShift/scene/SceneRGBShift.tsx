import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import MeshRGBShift from "../mesh/MeshRGBShift";
import { MutableRefObject } from "react";
import { Suspense } from "react";

interface Props {
  hoverId: number;
  isHover: boolean;
  urls: string[];
  targetPos: MutableRefObject<{
    x: number;
    y: number;
  }>;
}

const SceneRGBShift: React.FC<Props> = ({
  hoverId,
  isHover,
  targetPos,
  urls,
}) => {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, 300],
        }}
      >
        <Suspense fallback={null}>
          <MeshRGBShift
            hoverId={hoverId}
            isHover={isHover}
            targetPos={targetPos}
            urls={urls}
          />
          <Preload />
        </Suspense>
      </Canvas>
    </>
  );
};

export default SceneRGBShift;
