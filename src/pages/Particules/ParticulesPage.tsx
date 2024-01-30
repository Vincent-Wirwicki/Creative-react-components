import PageLayout from "../../components/layout/page/PageLayout";
// import LogoGithub from "../../components/layout/logo/LogoGithub";
import { Outlet } from "react-router-dom";
const ParticulesPage = () => {
  return (
    <PageLayout title="particules">
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        {/* <h3 className="mb-2 text-neutral-500 text-xl font-bold tracking-wider select-none">
          Canvas / Particules
        </h3> */}
        {/* <div className="w-2/6 h-[2px] mb-5 bg-neutral-500"></div> */}
        <Outlet />
        {/* <LogoGithub className="cursor-pointer mt-5" fill="#737373" />
        <div className="w-1/6 h-[2px]  bg-neutral-500 mt-5"></div> */}
      </section>
    </PageLayout>
  );
};

// const ParticulesPageWithTransition = BasicPageTransition(ParticulesPage);

export default ParticulesPage;
