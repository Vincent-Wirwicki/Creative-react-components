// import { createElement } from "react" MouseEvent
import { useEffect, useRef, useState } from "react";
const ImageTrail = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState(false);
  const mousePos = useRef({ curr: { x: 0, y: 0 }, prev: { x: 0, y: 0 } });
  const raf = useRef(0);
  const frames = useRef(0);
  const colors = ["red", "green", "black"];
  let idx = 0;

  const calcIndex = (length: number) => {
    idx++;
    if (idx >= length) idx = 0;
    return idx;
  };
  const imgStyleDefault = (el: HTMLDivElement) => {
    el.setAttribute("class", "w-[150px] h-[150px]");
    // el.style.height = "150px";
    // el.style.width = "150px";
    el.style.position = "fixed";
    // el.style.transform = "scale(0.2)";
    el.style.transform = "translateY(0)";
    el.style.pointerEvents = "none";
    // el.style.opacity = "0";
    // el.style.transition = "all 300ms cubic-bezier(0.68, -0.6, 0.32, 1.6)";
    // el.animate(
    //   [{ transform: "translateY(-10%)" }, { transform: "translateY(10%)" }],
    //   {
    //     duration: 2000,
    //     easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    //   }
    // );
  };

  //   const imgStyleIn = (el: HTMLDivElement) => {};

  const animateImages = (x: number, y: number, i: number) => {
    const wrap = wrapperRef.current;
    if (wrap) {
      const div = document.createElement("div");
      imgStyleDefault(div);
      div.style.top = y - 150 / 2 + "px";
      div.style.left = x - 150 / 2 + "px";
      div.style.background = colors[i];
      div.animate(
        [{ transform: "translateY(-10px)" }, { transform: "translateY(10%)" }],
        {
          duration: 2000,
          easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        }
      );
      wrap.appendChild(div);

      //   window.setTimeout(() => {
      //     div.style.opacity = "1";
      //     div.style.transform = "translateY(-80px)";
      //   }, 100);

      //   window.setTimeout(() => {
      //     div.style.transform = " translateY(80px)";
      //     // div.style.opacity = "0";
      //   }, 300);
      //   window.setTimeout(() => {
      //     // div.style.transform = " translateY(100px)";
      //     // div.style.transform = " scale(0)";
      //     div.style.opacity = "0";
      //   }, 800);

      window.setTimeout(() => {
        wrapperRef.current?.removeChild(div);
      }, 2000);
    }
  };

  const calcDist = (x1: number, x2: number, y1: number, y2: number) => {
    const distX = x1 - x2;
    const distY = y1 - y2;
    return Math.sqrt(distX * distX + distY * distY);
  };

  useEffect(() => {
    // if (!isHover) return;
    const animate = () => {
      frames.current++;
      const { curr, prev } = mousePos.current;
      if (frames.current % 5 === 0) {
        const dist = calcDist(curr.x, prev.x, curr.y, prev.y);
        if (dist > 1) {
          //   const elX = curr.x;
          //   const elY = curr.y;
          const i = calcIndex(colors.length);
          animateImages(curr.x, curr.y, i);
        }

        prev.x = curr.x;
        prev.y = curr.y;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onMove = ({ clientX, clientY }: MouseEvent) => {
      const { curr } = mousePos.current;
      curr.x = clientX;
      curr.y = clientY;
    };

    window.addEventListener("mousemove", onMove);
    if (isHover) animate();
  }, [isHover]);
  console.log(isHover);
  return (
    <div
      id="wrapRef"
      ref={wrapperRef}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative flex justify-center items-center w-2/3 h-2/3 border "
    ></div>
  );
};

export default ImageTrail;
// const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {     onMouseMove={handleMouseMove}
//   mousePos.current.x = clientX;
//   mousePos.current.y = clientY;
// };
// console.log(mousePos.current.x);
// window.addEventListener("mousemove", handleMouseMove);
// return () => {
//   window.removeEventListener("mousemove", handleMouseMove);
// };
//   const wrapperRef = useRef<HTMLDivElement | null>(null);
//   const mousePos = useRef({ curr: { x: 0, y: 0 }, prev: { x: 0, y: 0 } });
//   const raf = useRef(0);
//   const frames = useRef(0);

//   const calcDist = (x1: number, x2: number, y1: number, y2: number) => {
//     const distX = x1 - x2;
//     const distY = y1 - y2;
//     return Math.sqrt(distX * distX + distY * distY);
//   };

//   //   const update = () => {};
//   const createHTMLEl = () => {
//     if (wrapperRef.current) {
//       const el = document.createElement("div");
//       el.style.width = "40px";
//       el.style.height = "40px";
//       el.style.background = "red";
//       wrapperRef.current.appendChild(el);
//     }
//   };
//   useEffect(() => {
//     const { curr, prev } = mousePos.current;
//     const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
//       mousePos.current.curr.x = clientX;
//       mousePos.current.curr.y = clientY;
//       //   console.log(mx, clientX);
//     };
//     const update = () => {
//       if (frames.current % 40 === 0) {
//         const d = calcDist(curr.x, prev.x, curr.y, prev.y);
//         if (d > 50) {
//           console.log(d + "is true");
//           createHTMLEl();
//         }
//         prev.x = curr.x;
//         prev.y = curr.y;
//       }
//       setTimeout(() => {
//         if (wrapperRef.current && wrapperRef.current.childNodes.length > 0) {
//           wrapperRef.current.childNodes[0].remove();
//         }
//       }, 3000);
//       frames.current++;
//       raf.current = requestAnimationFrame(update);
//     };
//     raf.current = requestAnimationFrame(update);
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       cancelAnimationFrame(raf.current);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);
