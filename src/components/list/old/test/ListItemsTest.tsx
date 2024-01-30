import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import useMotionOnElement from "../../useMotionOnElement";
import useSpringsOnElement from "../../useSpringsOnElement";

const ListItemsTest = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);

  const items = ["nature", "ocean", "forest"];
  const translateYPerItem = 100 / items.length;
  const translatePositions = [];

  const imgWrap = useMotionOnElement();
  const { springs } = useSpringsOnElement(imgWrap.pos, { stiffness: 10 });

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (ref.current) {
      const { left, width, top, height } = ref.current.getBoundingClientRect();
      const mx = clientX - (left + width * 0.5);
      const my = clientY - (top + height * 0.5);
      imgWrap.updateElement(mx, my);
    }
  };

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => {
    setIsHover(false);
    setSelectedItem(null);
    imgWrap.resetElement();
  };

  const handleMouseEnterItem = ({ currentTarget }: MouseEvent) => {
    const targetId = currentTarget.getAttribute("data-index");
    if (targetId) setSelectedItem(Number(targetId));
  };

  const pos = ["0", "33.33", "66.66"];

  const testArr: string[] = [];

  const getPos = () => {
    const init = 100 / items.length;
    for (let i = 0; i < items.length; i++) {
      const val = init * i;
      testArr.push(val.toFixed(3));
    }
  };

  getPos();

  return (
    <div
      ref={ref}
      className=" relative flex justify-center items-center w-fit h-fit p-2 border "
    >
      <ul
        className="flex flex-col text-6xl uppercase select-none h-30"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {items.map((item, index) => (
          <li
            key={index}
            data-index={index}
            className="border-y h-[100px] flex items-center justify-center"
            onMouseEnter={handleMouseEnterItem}
          >
            {item}
          </li>
        ))}
      </ul>
      <motion.div
        style={{
          translateX: springs.x,
          translateY: springs.y,
          clipPath: isHover ? "inset(4%)" : "inset(100%)",
        }}
        className="absolute w-[200px] h-[200px] overflow-hidden pointer-events-none "
      >
        {/* pos[selectedItem] */}
        <motion.div
          //   animate={selectedItem != null ? "animate" : "reset"}
          initial={false}
          animate={{ y: selectedItem != null ? `-${pos[selectedItem]}%` : 0 }}
          transition={{ duration: 0.3, easings: "circOut" }}
        >
          <div className="h-[200px] w-full bg-green-500"></div>
          <div className="h-[200px] w-full bg-blue-500"></div>
          <div className="h-[200px] w-full bg-yellow-500"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ListItemsTest;
