import LettersGlitchedBasic from "../../../../components/letters/glitched/basic/LettersGlitchedBasic";
import LettersGlitchedRandom from "../../../../components/letters/glitched/random/LettersGlitchedRandom";
import LetterGlitchReveal from "../../../../components/letters/glitched/reveal/LetterGlitchReveal";
import LetterGlitchInAndOut from "../../../../components/letters/glitched/inAndOut/LetterGlitchInAndOut";

const GlitchSection = () => {
  const tailwindCss =
    "inline-block xl:w-[50px] lg:w-[40px] w-[40px] md:w-[30px] sm:[10px] ";

  const tailwindCss2 = "tracking-widest w-full ";

  return (
    <>
      <LettersGlitchedBasic text="glitch" className={tailwindCss2} />
      <LettersGlitchedRandom text="random" className={tailwindCss} />
      <LetterGlitchReveal text="reveal" className={tailwindCss} />
      <LetterGlitchInAndOut text="in&out" className={tailwindCss} />
    </>
  );
};

export default GlitchSection;
