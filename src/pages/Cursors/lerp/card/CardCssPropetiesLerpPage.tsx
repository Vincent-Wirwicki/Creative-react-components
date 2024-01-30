import { motion } from "framer-motion";
const CardCssPropetiesLerpPage = () => {
  return (
    <article className=" p-5 flex flex-col items-center border border-neutral-500">
      <h3 className="mb-5"> Css properties</h3>
      <div
        className="relative flex justify-center items-center h-[150px] w-[150px] text-center border-2 rounded-full"
        style={{ perspective: "preserve" }}
      >
        <motion.div
          className="absolute h-[120px] w-[120px] bg-white  rounded-full"
          initial={{ clipPath: "circle(30% at 50% 50%)" }}
          animate={{ clipPath: "circle(50% at 50% 50%)" }}
          transition={{
            duration: 1.5,
            easings: "anticipate",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
          }}
        ></motion.div>
        <h3 className="absolute p-2 mix-blend-exclusion">
          clip-path
          <br />
          to-scale
        </h3>
      </div>
      <div className="flex mt-2 justify-center items-center h-[40px] w-[150px]  bg-white text-center">
        <h3 className="absolute p-2 mix-blend-exclusion">mix-blend-for-text</h3>
      </div>
      <div className="flex mt-2 justify-center items-center h-[40px] w-[150px]  bg-white text-center">
        <h3 className="absolute p-2 mix-blend-exclusion">
          pointer-events-none
        </h3>
      </div>
    </article>
  );
};

export default CardCssPropetiesLerpPage;
