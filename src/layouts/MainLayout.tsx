import BottomNavContainer from "@containers/BottomNavContainer";
import SideNavContainer from "@containers/SideNavContainer";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <>
      {isMobile ? <BottomNavContainer /> : <SideNavContainer />}
      <Section>
        <Outlet />
      </Section>
    </>
  );
};

export default MainLayout;

const Section = styled.section`
  padding-left: 5rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 500px) {
    padding-left: 0;
    padding-bottom: 5rem;
  }
`;
