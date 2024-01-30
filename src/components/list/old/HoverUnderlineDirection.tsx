import { useRef, useState } from "react";
interface AnimProps {
  previousId: number | null;
  isLeft: boolean | null;
}
const HoverUnderlineDirection = () => {
  const items = ["home", "projects", "contact", "about", "services", "prices"];
  const [activeId, setActiveId] = useState<number | null>(0);
  //   const []
  const animUtilsRef = useRef<AnimProps>({
    previousId: 0,
    isLeft: null,
  });

  const onEnter = (id: number | null) => {
    setActiveId(id);
    if (id && animUtilsRef.current.previousId) {
      if (id === 0 && animUtilsRef.current.previousId > id) {
        animUtilsRef.current.isLeft = false;
        console.log("1 is true");
      } else if (id === items.length) {
        animUtilsRef.current.isLeft = true;
        console.log("2 is true");
      } else {
        animUtilsRef.current.isLeft = id < animUtilsRef.current.previousId;
        // console.log("3 is true", id);
      }
    }
    console.log(
      "enter ",
      "current " + id,
      "previous " + animUtilsRef.current.previousId,
      animUtilsRef.current.isLeft
    );
    animUtilsRef.current.previousId = id;
  };

  //   interface MouseDirTypes {
  //     x: "left" | "right";
  //     y: "top" | "bottom";
  //   }

  //   const mousePosRef = useRef({ x: 0, y: 0 });
  //   const mousePosPrevRef = useRef({ x: 0, y: 0 });
  //   const mouseDirRef = useRef<MouseDirTypes>({ x: "left", y: "top" });

  //   const onMove = (e: MouseEvent) => {
  //     mousePosPrevRef.current.x = mousePosRef.current.x;
  //     mousePosPrevRef.current.y = mousePosRef.current.y;
  //     mousePosRef.current.x = e.clientX;
  //     mousePosRef.current.y = e.clientY;
  //     const dir = {
  //       x: mousePosRef.current.x - mousePosPrevRef.current.x,
  //       y: mousePosRef.current.y - mousePosPrevRef.current.y,
  //     };
  //     if (dir.x > 0 && dir.y > 0) {
  //       mouseDirRef.current.x = "left";
  //       mouseDirRef.current.y = "top";
  //       console.log(mouseDirRef.current);
  //     } else {
  //       mouseDirRef.current.x = "right";
  //       mouseDirRef.current.y = "bottom";
  //       console.log(mouseDirRef.current);
  //     }

  //     // console.log(dir);
  //   };

  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        width: "500px",
        justifyContent: "space-between",
      }}
      //   onMouseMove={e => onMove(e)}
    >
      {items.map((item, index) => (
        <li
          style={{
            position: "relative",
            borderBottom: activeId === index ? "1px solid white" : "none",
            cursor: "pointer",
          }}
          key={index + item + "liEl"}
          onMouseEnter={() => onEnter(index)}
          // onMouseLeave={() => onLeave(index)}
        >
          {item}
          <span
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              backgroundColor: "white",
              mixBlendMode: "difference",
              clipPath:
                activeId === index
                  ? "inset(0)"
                  : !animUtilsRef.current.isLeft
                  ? "inset(0 100% 0 0)"
                  : "inset(0 0 0 100%)",

              transition: "clip-path 300ms ease",
            }}
          ></span>
        </li>
      ))}
    </ul>
  );
};

export default HoverUnderlineDirection;
