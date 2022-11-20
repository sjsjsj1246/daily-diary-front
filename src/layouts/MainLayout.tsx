import styled from "@emotion/styled";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Content = styled.section`
  width: 100%;
  max-width: 85%;

  @media (max-width: 1024px) {
    max-width: 95%;
  }
`;
