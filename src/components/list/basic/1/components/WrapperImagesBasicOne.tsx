import { MotionValue, motion } from "framer-motion";

interface Props {
  height?: string;
  width?: string;
  springs: { x: MotionValue<number>; y: MotionValue<number> };
  selectedItem: number | null;
  translatePositions: string[];
  titles: string[];
  urls: string[];
}

const WrapperImagesBasicOne: React.FC<Props> = ({
  height = "200px",
  width = "200px",
  springs,
  selectedItem,
  urls,
  titles,
  translatePositions,
}) => (
  <motion.div
    style={{
      height: height,
      width: width,
      translateX: springs.x,
      translateY: springs.y,
    }}
    className="absolute overflow-hidden pointer-events-none"
    initial={false}
    variants={{
      enter: {
        clipPath: "inset(0%)",
        opacity: 1,
        transition: { duration: 0.5, easings: "circIn" },
      },
      leave: {
        clipPath: "inset( 0 0 100% 0)",
        opacity: 0,
        transition: { duration: 0.5, easings: "circOut" },
      },
    }}
  >
    <motion.div
      animate={{
        y: selectedItem != null ? `-${translatePositions[selectedItem]}%` : 0,
      }}
      transition={{ duration: 0.3, easings: "circOut" }}
    >
      {urls.map((url, index) => (
        <img
          key={index}
          alt={titles[index]}
          src={url}
          style={{ width: width, height: height }}
        />
      ))}
    </motion.div>
  </motion.div>
);

export default WrapperImagesBasicOne;
// w-[${width}] h-[${height}] object-fill
