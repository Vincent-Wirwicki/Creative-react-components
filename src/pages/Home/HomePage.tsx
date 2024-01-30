// import styles from "./Home.module.css";
// import PageTransition from "../../components/pageTransition/PageTransition";
// import { Variants, motion } from "framer-motion";
// import NoisyBackground from "../../components/layout/page/background/NoisyBackground";
// import BasicPageTransition from "../../components/pageTransition/basic/BasicPageTransition";
import DefaultPageLayout from "../../components/layout/page/PageLayout";

const HomePage = () => {
  return (
    <DefaultPageLayout title="home">
      <section className="w-full h-full flex flex-col justify-center items-center">
        <article className="uppercase text-8xl text-emerald-200 font-bold select-none p-2">
          <div className="h-[2px] w-full bg-neutral-500 mb-5"></div>
          <h3 className="px-2">Welcome!</h3>
          <h3 className="px-2">This project is </h3>
          <h3 className="px-2">about creativity</h3>
          <div className="h-[2px] w-full bg-neutral-500 mt-5"></div>
        </article>
      </section>
    </DefaultPageLayout>
  );
};

// const homePageWithTransition = BasicPageTransition(HomePage);

export default HomePage;
