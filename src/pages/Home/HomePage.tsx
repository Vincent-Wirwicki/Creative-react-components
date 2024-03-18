// import styles from "./Home.module.css";
// import PageTransition from "../../components/pageTransition/PageTransition";
// import { Variants, motion } from "framer-motion";
// import NoisyBackground from "../../components/layout/page/background/NoisyBackground";
// import BasicPageTransition from "../../components/pageTransition/basic/BasicPageTransition";
import DefaultPageLayout from "../../components/layout/page/PageLayout";

const HomePage = () => {
  return (
    <DefaultPageLayout title="home">
      <section className="absolute top-0 left-1/2 translate-x-[-50%] w-1/2 h-full p-2 flex flex-col justify-center gap-5 ">
        <h3 className="pt-2 text-2xl">
          This project is about exploring creative dev, <br />
          and make a collection of re-usable animation.
        </h3>
        {/* <h3 className="pt-4 text-lg font-bold">What I used ?</h3> */}
        <p className="pt-2 text-lg">
          Made with React, Typescript, Framer-motion, Three-fiber / drei.
        </p>
        <p>Styling is up to you!</p>
      </section>
    </DefaultPageLayout>
  );
};

// const homePageWithTransition = BasicPageTransition(HomePage);
// <article className="uppercase text-8xl text-emerald-200 font-bold select-none p-2">
//   <div className="h-[2px] w-full bg-neutral-500 mb-5"></div>
//   <h3 className="px-2">Welcome!</h3>
//   <h3 className="px-2">This project is </h3>
//   <h3 className="px-2">about creativity</h3>
//   <div className="h-[2px] w-full bg-neutral-500 mt-5"></div>
// </article>;
//  Hey, I made this project because I like awwwards style website, and
//     sometimes I try to re done what I have seen

export default HomePage;
