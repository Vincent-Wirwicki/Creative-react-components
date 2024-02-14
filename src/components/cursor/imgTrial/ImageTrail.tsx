// import { createElement } from "react" MouseEvent
import { useRef, MouseEvent } from "react";
import { AnimationSequence, useAnimate } from "framer-motion";

interface Props {
  urls: string[];
}

const ImageTrail: React.FC<Props> = ({ urls }) => {
  const [scope, animate] = useAnimate();
  const mousePos = useRef({ x: 0, y: 0, prev: { x: 0, y: 0 } });

  const maxDist = 80;
  let zImg = 0;
  let imgIdx = 0;

  const calcIndex = (arraylength: number) => {
    imgIdx++;
    if (imgIdx >= arraylength) imgIdx = 0;
    return imgIdx;
  };

  const onMove = (e: MouseEvent) => {
    const { prev } = mousePos.current;
    const dist = Math.hypot(e.clientX - prev.x, e.clientY - prev.y);
    if (dist > maxDist) {
      prev.x = e.clientX;
      prev.y = e.clientY;
      renderImage();
    }
  };

  const renderImage = () => {
    const { prev } = mousePos.current;

    const i = calcIndex(urls.length);
    const img = document.querySelector(`[data-index="${i}"]`) as HTMLElement;

    const top = prev.y - img.offsetHeight / 2;
    const left = prev.x - img.offsetWidth / 2;

    const sequence: AnimationSequence = [
      [
        img,
        { opacity: 1, top: top, left: left, zIndex: zImg },
        { duration: 0 },
      ],
      [
        img,
        {
          opacity: [1, 0],
          y: ["0%", "100%"],
        },
        { duration: 0.5, delay: 0.4, type: "inertia", velocity: 50 },
      ],
    ];
    zImg++;
    animate(sequence);
  };

  return (
    <div
      ref={scope}
      onMouseMove={onMove}
      className="relative flex justify-center items-center w-2/3 h-2/3 border border-neutral-800 "
    >
      {urls.map((url, i) => (
        <img
          key={i}
          src={url}
          data-index={i}
          className="w-[250px] h-[250px]  opacity-0 fixed pointer-events-none object-cover"
        />
      ))}
    </div>
  );
};

export default ImageTrail;
