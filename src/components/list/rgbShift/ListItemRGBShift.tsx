import { useRef, useState, MouseEvent, Suspense, lazy } from "react";

const SceneRGBShift = lazy(() => import("./scene/SceneRGBShift"));

interface Props {
  urls: string[];
  titles: string[];
}

const ListItemRGBShift: React.FC<Props> = ({ urls, titles }) => {
  const [hoverId, setHoverId] = useState<number>(0);
  const [isHover, setIsHover] = useState<boolean>(false);
  const targetPos = useRef({ x: 0, y: 0 });

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    targetPos.current.x = clientX;
    targetPos.current.y = clientY;
  };

  return (
    <div
      className="relative w-1/2 h-4/6 rounded-lg "
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute left-0 w-full h-full pointer-events-none bg-neutral-950">
        <Suspense fallback={null}>
          <SceneRGBShift
            hoverId={hoverId}
            isHover={isHover}
            targetPos={targetPos}
            urls={urls}
          />
        </Suspense>
      </div>
      <ul className="absolute left-0 z-30 w-full h-full p-5 grid grid-rows-4 text-5xl uppercase select-none mix-blend-exclusion">
        {titles.map((title, index) => (
          <li
            key={index}
            className="w-full h-full border-b-2 p-2 flex justify-start items-center opacity-50 hover:opacity-100 transition-opacity "
            data-index={index}
            onMouseEnter={() => setHoverId(index)}
          >
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItemRGBShift;
