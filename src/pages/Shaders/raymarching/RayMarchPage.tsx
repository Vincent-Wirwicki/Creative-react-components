import { lazy, Suspense } from "react";

const RaymarchScene = lazy(
  () => import("../../../shaders/raymarching/RaymarchingScene")
);

const RayMarchPage = () => {
  return (
    <>
      {" "}
      <div className="fixed z-10 top-1/2 left-1/2 translate-x-[-50%]">
        more raymarching <br /> projects{" "}
        <a
          href="https://raymarching-r3f.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          here
        </a>
      </div>
      <Suspense fallback={null}>
        <RaymarchScene />
      </Suspense>
    </>
  );
};

export default RayMarchPage;
