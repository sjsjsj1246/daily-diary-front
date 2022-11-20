import styled from "@emotion/styled";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <p>D.D</p>
      <hr />
      <p>© 2021 D.D, All Rights Reserved</p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
`;
