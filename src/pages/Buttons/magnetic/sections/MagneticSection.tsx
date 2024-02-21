import MagneticButton from "../../../../components/buttons/magnetic/basic/MagneticButton";
// import MagneticButtonRect from "../../../components/buttons/magnetic/basic/rect/MagneticButtonRect";
import MagneticButtonVariantOne from "../../../../components/buttons/magnetic/variants/circle/1/MagneticButtonVariantOne";
import MagneticButtonVariantTwo from "../../../../components/buttons/magnetic/variants/circle/2/MagneticButtonVariantTwo";
import MagneticButtonVariantThree from "../../../../components/buttons/magnetic/variants/circle/3/MagneticButtonVariantThree";
import MagneticButtonRectVariantOne from "../../../../components/buttons/magnetic/variants/rectangle/1/MagneticButtonRectVariantOne";
import MagneticButtonRectVariantTwo from "../../../../components/buttons/magnetic/variants/rectangle/2/MagneticButtonRectVariantTwo";
import MagneticButtonRectVariantThree from "../../../../components/buttons/magnetic/variants/rectangle/3/MagneticButtonRectVariantThree";
import MagneticButtonRectVariantFour from "../../../../components/buttons/magnetic/variants/rectangle/4/MagneticButtonRectVariantFour";
import LogoGithub from "../../../../components/layout/logo/LogoGithub";

const MagneticSection = () => {
  return (
    <article className="magnetic-btn-bento ">
      <div className="bento-card magnetic-btn-bento-card-basic">
        <MagneticButton text="basic" />
      </div>
      <div className="bento-card magnetic-btn-bento-card-circ">
        <MagneticButtonVariantOne text="circ._1" />
        <MagneticButtonVariantTwo text="circ._2" />
        <MagneticButtonVariantThree text="circ._3" />
      </div>
      <div className="bento-card magnetic-btn-bento-card-rect">
        <MagneticButtonRectVariantOne text="rect._1" />
        <MagneticButtonRectVariantTwo text="rect._2" />
        <MagneticButtonRectVariantThree text="rect._3" />
        <MagneticButtonRectVariantFour text="rect._4" />
      </div>
      <div className="bento-card magnetic-btn-bento-card-about">
        {/* <h3 className="">on hover</h3> */}
        <a
          rel="external"
          target="blank"
          href="https://github.com/Vincent-Wirwicki/Creative-react-components/tree/main/src/components/buttons/magnetic"
        >
          <LogoGithub fill="rgb(45 212 191)" />
        </a>
        <h3 className="">Magnetic button </h3>
      </div>
      <div className="bento-card magnetic-btn-bento-card-wip">
        Work in progress
      </div>
    </article>
  );
};

export default MagneticSection;
