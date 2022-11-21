import Footer from "@components/Footer";
import HeaderContainer from "@containers/HeaderContainer";
import MainContainer from "@containers/MainContainer";

const MainPage: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <MainContainer />
      <Footer />
    </>
  );
};

export default MainPage;
