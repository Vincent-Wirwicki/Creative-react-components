import { Outlet } from "react-router-dom";
// import { useState } from "react";
// import { motion } from "framer-motion";Link
import PageLayout from "../../components/layout/page/PageLayout";

const ShadersPage = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const handleClick = () => setIsOpen(!isOpen);
  return (
    <PageLayout title="shaders">
      <section className="fixed h-full w-full ">
        <Outlet />
      </section>
    </PageLayout>
  );
};
// const ShadersPageWithTransition = BasicPageTransition(ShadersPage);
export default ShadersPage;
