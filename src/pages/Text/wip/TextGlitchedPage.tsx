import { lazy, Suspense } from "react";

const GlitchedTextInfinit = lazy(
  () =>
    import(
      "../../../components/letters/glitched/inAndOutInfinit/LetterGlitchInAndOutInfinit"
    )
);
const TextGlitchedPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Suspense fallback={null}>
        <div className="text-4xl text-center uppercase ">
          <GlitchedTextInfinit className="inline-block xl:w-[50px] lg:w-[40px] w-[40px] md:w-[30px] sm:[10px]" />
        </div>
      </Suspense>
    </div>
  );
};

export default TextGlitchedPage;
