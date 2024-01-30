import { lazy, Suspense } from "react";

const ListImageTranslateOne = lazy(
  () => import("../../../components/list/basic/1/ListImageTranslateOne")
);

const ListImageTranslatePage = () => {
  const titles = ["Web design", "Front-end", "React", "Framer"];
  const urls = [
    "/images/lowRes/design.jpg",
    "/images/lowRes/front.jpg",
    "/images/lowRes/reactTwo.jpg",
    "/images/lowRes/framer.jpg",
  ];
  return (
    <Suspense fallback={null}>
      <ListImageTranslateOne titles={titles} urls={urls} />
    </Suspense>
  );
};

export default ListImageTranslatePage;
