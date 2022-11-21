import HeaderContainer from "@containers/HeaderContainer";
import DiaryListContainer from "@containers/DiaryListContainer";
import React from "react";
import Footer from "@components/Footer";

const DiaryListPage: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <DiaryListContainer />
      <Footer />
    </>
  );
};

export default DiaryListPage;
