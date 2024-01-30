import { lazy, Suspense } from "react";

const TextSplitLayoutPage = lazy(
  () => import("./1-layout/TextSplitLayoutPage")
);

const TextSplitPage = () => {
  return (
    <Suspense>
      <TextSplitLayoutPage />
    </Suspense>
  );
};

export default TextSplitPage;
