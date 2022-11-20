import Footer from "@components/Footer";
import styled from "@emotion/styled";
import HeaderContainer from "containers/HeaderContainer";
import MainContainer from "containers/MainContainer";
import MainLayout from "layouts/MainLayout";

const MainPage: React.FC = () => {
  return (
    <MainLayout>
      <HeaderContainer />
      <MainContainer />
      <Footer />
    </MainLayout>
  );
};

export default MainPage;
