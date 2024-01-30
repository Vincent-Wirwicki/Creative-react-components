import PageLayout from "../../components/layout/page/PageLayout";
import { Outlet } from "react-router-dom";
const TextPage = () => {
  return (
    <PageLayout title="text">
      <Outlet />
    </PageLayout>
  );
};

export default TextPage;

// const style =
//   "w-1/2 h-full text-xl uppercase select-none flex flex-col justify-evenly items-center text-yellow-200";
// "relative col-start-3 col-end-7 row-start-2 row-end-4 flex justify-evenly items-center border border-yellow-200 p-2 rounded-lg";
// <PageLayout title="text">
//   <section className="w-full h-full flex flex-col justify-center items-center">
//     <Outlet />
//   </section>
// </PageLayout>;
