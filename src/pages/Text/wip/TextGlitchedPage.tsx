import { lazy, Suspense } from "react";

const LetterGlitchInAndOutInfinit = lazy(
  () =>
    import(
      "../../../components/letters/glitched/infinit/inAndOutInfinit/LetterGlitchInAndOutInfinit"
    )
);

const LetterGlitchInfinit = lazy(
  () =>
    import(
      "../../../components/letters/glitched/infinit/variant/LetterGlitchInfinit"
    )
);

const LetterGlitchRandomInfinit = lazy(
  () =>
    import(
      "../../../components/letters/glitched/infinit/random/LetterGlitchRandomInfinit"
    )
);

const TextGlitchedPage = () => {
  const defaultStyle =
    "inline-block xl:w-[40px] lg:w-[30px] w-[30px] md:w-[30px] sm:[10px]";
  return (
    <div className="section-center">
      <div className="bento-grid text-2xl text-center uppercase  ">
        <Suspense fallback={null}>
          <div className="bento-card col-start-2 col-span-6 row-start-1 row-span-2 flex justify-center items-center text-blue-600 font-bold text-4xl ">
            <LetterGlitchInAndOutInfinit
              className={defaultStyle}
              words={["glitched", "letters", "infinit"]}
            />
          </div>
          <div className="bento-card col-start-2 col-span-6 row-start-3 row-span-2 flex justify-center items-center text-red-600 font-bold text-4xl ">
            <LetterGlitchRandomInfinit
              className={defaultStyle}
              words={["letters", "infinit", "glitch"]}
            />
          </div>
          <div className="bento-card col-start-2 col-span-6 row-start-5 row-span-2 flex justify-center items-center text-blue-600 font-bold text-4xl ">
            <LetterGlitchInfinit
              className={defaultStyle}
              words={["infinit", "glitched", "letters"]}
            />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default TextGlitchedPage;
