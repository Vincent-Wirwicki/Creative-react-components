// import { createElement } from "react" MouseEvent
import { useRef, MouseEvent } from "react";
import { useAnimate } from "framer-motion";

interface Props {
  urls: string[];
}

const ImageTrail: React.FC<Props> = ({ urls }) => {
  const [scope, animate] = useAnimate();
  const mousePos = useRef({ x: 0, y: 0, prev: { x: 0, y: 0 } });
  const imgIndex = useRef(0);

  const treshold = 100;
  let zIndxImg = 0;

  const calcIndex = (arraylength: number) => {
    imgIndex.current++;
    if (imgIndex.current >= arraylength) imgIndex.current = 0;
    return imgIndex.current;
  };

  const onMove = (e: MouseEvent) => {
    const { prev } = mousePos.current;
    const dist = Math.hypot(e.clientX - prev.x, e.clientY - prev.y);
    if (dist > treshold) {
      prev.x = e.clientX;
      prev.y = e.clientY;
      renderImage();
    }
  };

  const renderImage = () => {
    const { prev } = mousePos.current;

    const i = calcIndex(urls.length);
    const el = document.querySelector(`[data-index="${i}"]`) as HTMLElement;
    const { width, height } = el.getBoundingClientRect();
    el.style.top = `${prev.y - height / 2}px`;
    el.style.left = `${prev.x - width / 2}px`;
    el.style.zIndex = zIndxImg.toString();
    zIndxImg++;

    animate(
      el,
      {
        opacity: [0.8, 1, 1, 0],
        transform: [
          "translate(-10%, -20%) ",
          "translate(0%, 0%) ",
          "translate(10%, 25%) ",
          "translate(0%, 0%)  ",
        ],
        clipPath: [
          "inset(25% 0 25% 0)",
          "inset(0%)",
          "inset(0%)",
          "inset(0% 100% 0% 0)",
        ],
      },
      { duration: 1.5, ease: "circIn" }
    );
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
          className="w-[250px] h-[250px] opacity-0 fixed pointer-events-none object-cover"
        />
      ))}
    </div>
  );
};

export default ImageTrail;
