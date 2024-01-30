import { lazy, Suspense } from "react";

const ListImageRGBShift = lazy(
  () => import("../../../components/list/rgbShift/ListItemRGBShift")
);
const ListRgbShiftPage = () => {
  const titles = ["Web design", "Front-end", "React", "Three fiber"];
  const urls = [
    "/images/lowRes/design.jpg",
    "/images/lowRes/front.jpg",
    "/images/lowRes/reactTwo.jpg",
    "/images/lowRes/tree.jpg",
  ];
  return (
    <Suspense fallback={null}>
      <ListImageRGBShift titles={titles} urls={urls} />
    </Suspense>
  );
};

export default ListRgbShiftPage;
