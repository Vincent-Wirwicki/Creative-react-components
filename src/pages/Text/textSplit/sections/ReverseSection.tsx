import LettersReverseOne from "../../../../components/letters/reverse/1/LettersReverseOne";
import LettersReverseTwo from "../../../../components/letters/reverse/2/LettersReverseTwo";
import LettersReverseThree from "../../../../components/letters/reverse/3/LettersReverseThree";
import LettersReverseFour from "../../../../components/letters/reverse/4/LettersReverseFour";
// import GridElement from "../../../components/layout/utils/grid/GridElement";

const ReverseSection = () => {
  const tailwindCss =
    "inline-block xl:w-[35px] lg:w-[30px] xs:w-[20px] text-center";
  const tailwindCss2 = "inline-block w-fit text-center";

  return (
    <>
      <LettersReverseOne text="reverse" className={tailwindCss2} />
      <LettersReverseTwo text="reverse2" className={tailwindCss} />
      <LettersReverseThree text="reverse3" className={tailwindCss} />
      <LettersReverseFour text="reverse4" className={tailwindCss} />
    </>
  );
};

export default ReverseSection;
