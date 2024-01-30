import { Outlet } from "react-router-dom";
import PageLayout from "../../components/layout/page/PageLayout";

const ListPage = () => {
  return (
    <PageLayout title="list">
      <section className="w-full h-full flex flex-col justify-center items-center">
        {/* <h3 className="mb-2 text-neutral-500 text-xl font-bold tracking-wider select-none">
          On hover / rgbShift
        </h3>
        <div className="w-2/6 h-[2px] mb-10 bg-neutral-500"></div> */}
        <Outlet />
      </section>
    </PageLayout>
  );
};

export default ListPage;
