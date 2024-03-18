import PageLayout from "../../components/layout/page/PageLayout";
import { Outlet } from "react-router-dom";

const ImagesPage = () => {
  return (
    <PageLayout title="cursors">
      <Outlet />
    </PageLayout>
  );
};

export default ImagesPage;
