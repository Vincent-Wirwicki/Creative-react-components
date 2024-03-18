import { lazy, Suspense } from "react";

const BasicImageDisplace = lazy(
  () =>
    import(
      "../../../components/image/displacement/basic/BasicImageDisplaceScene"
    )
);

const ImageDisplacePage = () => {
  return (
    <Suspense fallback={null}>
      <BasicImageDisplace />
    </Suspense>
  );
};

export default ImageDisplacePage;
