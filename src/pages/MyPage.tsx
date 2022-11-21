import Footer from "@components/Footer";
import HeaderContainer from "@containers/HeaderContainer";
import MyConatainer from "@containers/MyConatainer";

const MyPage: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <MyConatainer />
      <Footer />
    </>
  );
};

export default MyPage;
