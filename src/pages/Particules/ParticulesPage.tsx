import PageLayout from "../../components/layout/page/PageLayout";
// import LogoGithub from "../../components/layout/logo/LogoGithub";
import { Outlet } from "react-router-dom";
const ParticulesPage = () => {
  return (
    <PageLayout title="particules">
      <div className="fixed top-1/2 left-1/2 translate-x-[-50%]">
        more particules <br /> project
        <a
          href="https://particules-canvas-three.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          here
        </a>
      </div>
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        <Outlet />
      </section>
    </PageLayout>
  );
};

// const ParticulesPageWithTransition = BasicPageTransition(ParticulesPage);

export default ParticulesPage;
