import { useRef } from "react";
import { motion } from "framer-motion";
import ItemsBasicOne from "./components/ItemBasicOne";
import useMotionOnElement from "../../useMotionOnElement";
import useSpringsOnElement from "../../useSpringsOnElement";
import useImagePositions from "./hooks/useImagesTranslate";
import useImageTranslateOne from "./hooks/useImageTranslateOne";
import WrapperImagesBasicOne from "./components/WrapperImagesBasicOne";

/*
 * Core concept :
 *    - you need 2 array of same length :
 *      - first array with your photos
 *      - second array is a string[] to calculate translate positions from your array of images
 * So when you hover item2[2] you translate to position 2 of the second array
 */

interface Props {
  urls: string[];
  titles: string[];
  imgHeight?: string;
  imgWidth?: string;
}

const ListImageTranslateOne: React.FC<Props> = ({
  urls,
  titles,
  imgHeight = "250px",
  imgWidth = "250px",
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const imgWrap = useMotionOnElement();
  const { springs } = useSpringsOnElement(imgWrap.pos, {
    stiffness: 20,
  });
  const { translatePositions } = useImagePositions(titles.length);

  const {
    selectedItem,
    isHover,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseEnterItem,
  } = useImageTranslateOne(wrapperRef, imgWrap);

  if (urls.length != titles.length)
    throw new Error("urls & titles array must be same length");

  return (
    <motion.div
      ref={wrapperRef}
      className=" relative w-1/2 p-5 flex justify-center items-center "
      animate={isHover ? "enter" : "leave"}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex flex-col text-xl uppercase select-none w-full p-2">
        <ItemsBasicOne
          titles={titles}
          handleMouseEnterItem={handleMouseEnterItem}
          className="border-b border-neutral-500 p-5 flex justify-between hover:bg-neutral-200 hover:text-neutral-950 "
        />
      </ul>
      <WrapperImagesBasicOne
        width={imgHeight}
        height={imgWidth}
        titles={titles}
        urls={urls}
        springs={springs}
        selectedItem={selectedItem}
        translatePositions={translatePositions}
      />
    </motion.div>
  );
};

export default ListImageTranslateOne;
