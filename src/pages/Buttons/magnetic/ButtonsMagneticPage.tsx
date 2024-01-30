import { lazy, Suspense } from "react";

const MagneticSection = lazy(() => import("./sections/MagneticSection"));

const ButtonsMagneticPage = () => {
  return (
    <section className="w-full h-full flex justify-center items-center ">
      {/* <article className="grid grid-cols-6 grid-row-6"> */}
      <Suspense fallback={null}>
        <MagneticSection />
      </Suspense>
      {/* </article> */}
    </section>
  );
};

export default ButtonsMagneticPage;
