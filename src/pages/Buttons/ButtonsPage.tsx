import PageLayout from "../../components/layout/page/PageLayout";
import { Outlet } from "react-router-dom";

const ButtonsPage = () => {
  return (
    <PageLayout title="buttons">
      <Outlet />
    </PageLayout>
  );
};

// const ButtonsPageWithTransition = BasicPageTransition(ButtonsPage);

export default ButtonsPage;
