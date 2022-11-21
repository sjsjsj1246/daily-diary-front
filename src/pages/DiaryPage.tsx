import Footer from "@components/Footer";
import DiaryContainer from "@containers/DiaryContainer";
import HeaderContainer from "@containers/HeaderContainer";
import React from "react";

const DiaryPage: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <DiaryContainer />
      <Footer />
    </>
  );
};

export default DiaryPage;
