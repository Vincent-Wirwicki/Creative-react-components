import GlitchSection from "../sections/GlitchSection";
import ReverseSection from "../sections/ReverseSection";
import TranslateTextSection from "../sections/TranslateTextSection";
import AboutTextSplit from "../sections/AboutTextSplit";

const TextSplitLayoutPage = () => {
  return (
    <section className="absolute top-0 left-1/2 translate-x-[-50%] w-1/2 h-full p-2 flex flex-col justify-center gap-5 ">
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
