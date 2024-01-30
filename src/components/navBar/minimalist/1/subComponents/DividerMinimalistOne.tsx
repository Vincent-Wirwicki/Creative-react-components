import { motion } from "framer-motion";

interface Props {}

const DividerMinimalistOne: React.FC<Props> = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <motion.div
        className="absolute top-1/2 w-full h-[2px] bg-white "
        variants={{
          open: { clipPath: "inset(0 0% 0 0)" },
          closed: { clipPath: "inset(0 50% 0 50%)" },
        }}
        transition={{ duration: 0.4, easings: "circIn" }}
      />
      {/* simple circle */}
      <div className="absolute w-[10px] h-[10px] bg-white rounded-full" />
    </div>
  );
};

export default DividerMinimalistOne;
