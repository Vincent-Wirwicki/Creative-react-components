import { Outlet } from "react-router-dom";
import PageLayout from "../../components/layout/page/PageLayout";
const CursorsPage = () => {
  return (
    <PageLayout title="cursors">
      <Outlet />
    </PageLayout>
  );
};

export default CursorsPage;
