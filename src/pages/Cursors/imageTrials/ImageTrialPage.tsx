import ImageTrail from "../../../components/cursor/imgTrial/ImageTrail";

const ImageTrialPage = () => {
  const urls = [
    "/images/lowRes/design.jpg",
    "/images/lowRes/framer.jpg",
    "/images/lowRes/front.jpg",
    "/images/lowRes/maybe.jpg",
    "/images/lowRes/reactTwo.jpg",
    "/images/lowRes/design.jpg",
    "/images/lowRes/framer.jpg",
    "/images/lowRes/front.jpg",
    "/images/lowRes/maybe.jpg",
    "/images/lowRes/reactTwo.jpg",
    "/images/lowRes/design.jpg",
    "/images/lowRes/framer.jpg",
    "/images/lowRes/front.jpg",
    "/images/lowRes/maybe.jpg",
    "/images/lowRes/reactTwo.jpg",
    "/images/lowRes/design.jpg",
    "/images/lowRes/framer.jpg",
    "/images/lowRes/front.jpg",
    "/images/lowRes/maybe.jpg",
    "/images/lowRes/reactTwo.jpg",
  ];

  return (
    <section className="section-center pl-32">
      <h3 className="absolute top-1/2 left-1/2 translate-x-[-40%] translate-y-[-50%] text-2xl text-red-500 font-bold uppercase ">
        Image trial on mouse move
      </h3>
      <ImageTrail urls={urls} />
    </section>
  );
};

export default ImageTrialPage;
