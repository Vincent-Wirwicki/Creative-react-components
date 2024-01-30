import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  navLinks: string[];
}

const NavLinksMinimalistOne: React.FC<Props> = ({ navLinks }) => {
  const [hoverItemId, setHoverItemId] = useState<number | null>(null);
  const [clickedItem, setClickedItem] = useState<number>(0);

  return (
    <motion.ul
      className="flex justify-between cursor-pointer"
      layout
      initial={{ opacity: 0, rotateX: 90, y: -5, perspective: "preserve" }}
      variants={{
        open: { opacity: 1, rotateX: 0, y: 0 },
        close: { opacity: 0, rotateX: 90, y: -5 },
      }}
      transition={{
        duration: 0.4,
        easings: "circIn",
      }}
    >
      {navLinks.map((text, id) => (
        <motion.li
          key={id}
          // layoutId={text}
          onMouseEnter={() => setHoverItemId(id)}
          onClick={() => {
            setClickedItem(id);
          }}
          onMouseLeave={() => setHoverItemId(null)}
          className="relative p-2 h-fit w-fit  text-white "
        >
          <span>{text}</span>
          {hoverItemId === id && (
            <motion.div
              className="absolute bottom-[34px] left-[45%] w-[10px] h-[10px] rounded-full bg-teal-500"
              layoutId="miniHover"
              transition={{ duration: 0.3 }}
            />
          )}
          {clickedItem === id && (
            <motion.div
              className="absolute bottom-[34px] left-[35%] w-[10px] h-[10px] rounded-full bg-yellow-200"
              layoutId="miniClick"
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavLinksMinimalistOne;
