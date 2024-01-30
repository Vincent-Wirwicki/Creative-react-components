import { Outlet } from "react-router-dom";
// import { useState } from "react";
// import { motion } from "framer-motion";Link
import PageLayout from "../../components/layout/page/PageLayout";

const ShadersPage = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const handleClick = () => setIsOpen(!isOpen);
  return (
    <PageLayout title="shaders">
      <section className="fixed h-full w-full ">
        {/* <motion.div
          className="absolute w-fit h-fit p-2  z-30 top-10 left-1/2 translate-x-[-50%]  	"
          animate={isOpen ? "open" : "close"}
        >
          <div className="backdrop-blur-3xl">
            <h3 className="mb-2 px-5 text-neutral-50 text-center text-xl font-bold tracking-wider select-none">
              React Three Fiber
            </h3>
            <div className="w-full h-[2px] mb-2 bg-neutral-50"></div>
            <div className="flex justify-evenly items-center">
              <motion.span
                className="inline-block h-full text-neutral-50 text-xl"
                variants={{ open: { rotate: 45 }, close: { rotate: 0 } }}
              >
                +
              </motion.span>
              <h3
                className=" px-5 text-neutral-50 text-xl font-bold tracking-wider select-none cursor-pointer"
                onClick={handleClick}
              >
                More projects
              </h3>
              <motion.span
                className="inline-block h-full text-neutral-50 text-xl"
                variants={{ open: { rotate: 45 }, close: { rotate: 0 } }}
              >
                +
              </motion.span>
            </div>
          </div>
          <motion.div
            className="backdrop-blur-3xl flex flex-col justify-center items-center mb-2 px-5 text-neutral-50 text-xl font-bold tracking-wider select-none"
            variants={{
              open: { clipPath: "inset(0)" },
              close: { clipPath: "inset(0 0 100% 0)" },
            }}
          >
            <Link to="/shaders/lavaLamp" className="my-2 border-b-2">
              Lava Lamp
            </Link>
            <Link to="/shaders/noise" className="my-2 border-b-2">
              NoisyEnv
            </Link>
          </motion.div>
        </motion.div> */}

        <Outlet />
      </section>
    </PageLayout>
  );
};
// const ShadersPageWithTransition = BasicPageTransition(ShadersPage);
export default ShadersPage;
