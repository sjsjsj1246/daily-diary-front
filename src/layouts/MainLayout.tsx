import HeaderContainer from "@containers/HeaderContainer";
import styled from "@emotion/styled";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  padding-left: 5rem;
`;
