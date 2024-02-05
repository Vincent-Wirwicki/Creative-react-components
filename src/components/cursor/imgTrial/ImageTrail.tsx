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
  const zIdx = useRef(0);
  let zIndxImg = 0;
  const treshold = 100;

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
      `[data-index="${i}"]`,
      {
        opacity: [0.8, 1, 1, 0],
        transform: [
          "translateY(-10%) ",
          "translateY(0%) ",
          "translateY(10%) ",
          "translateY(0%)  ",
        ],
        clipPath: [
          "inset(25% 0 25% 0)",
          "inset(0%)",
          "inset(0%)",
          "inset(0 100% 0 0)",
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

// const onMove = (e: MouseEvent) => {
//   const { prev } = mousePos.current;
//   const dist = Math.hypot(e.clientX - prev.x, e.clientY - prev.y);
//   if (dist > 50) {
//     const i = calcIndex(colors.length);
//     prev.x = e.clientX;
//     prev.y = e.clientY;
//     // if (wrapperRef.current) {
//     //   const node =
//     //     wrapperRef.current.children[i].querySelector("[data-index=]");
//     // }
//   }
// };

// useEffect(() => {
//   const onMove = (e: MouseEvent) => {
//     // const { x, y, prev } = mousePos.current;
//     mousePos.current.x = e.clientX;
//     mousePos.current.y = e.clientY;
//   };

//   const render = () => {
//     const { x, y, prev } = mousePos.current;

//     const dist = Math.hypot(x - prev.x, y - prev.y);
//     if (dist > 50) {
//       const i = calcIndex(colors.length);
//       const el = document.querySelector(`[data-index]=${i}`);
//       el.st;
//       prev.x = x;
//       prev.y = y;
//       console.log("dist is true");
//     }
//     raf.current = requestAnimationFrame(render);
//   };
//   render();
//   window.addEventListener("mousemove", onMove);
// });
