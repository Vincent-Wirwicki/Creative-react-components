import GlitchSection from "../sections/GlitchSection";
import ReverseSection from "../sections/ReverseSection";
import TranslateTextSection from "../sections/TranslateTextSection";
import AboutTextSplit from "../sections/AboutTextSplit";

const TextSplitLayoutPage = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-split-bento">
        <article className="text-split-bento-card text-split-bento-card-about ">
          <AboutTextSplit />
        </article>
        <article className="text-split-bento-card text-split-bento-card-translate  ">
          <TranslateTextSection />
        </article>
        <article className="text-split-bento-card text-split-bento-card-content text-split-bento-card-glitch ">
          <GlitchSection />
        </article>
        <article className="text-split-bento-card text-split-bento-card-content text-split-bento-card-reverse ">
          <ReverseSection />
        </article>
      </div>
    </section>
  );
};

export default TextSplitLayoutPage;
