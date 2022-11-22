import styled from "@emotion/styled";

const Main: React.FC = () => {
  return (
    <Wrapper>
      <div style={{ height: "768px", backgroundColor: "#ffe4cfff" }}></div>
      <div style={{ height: "768px", backgroundColor: "#ffffff" }}></div>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div``;
