import { LogoWhite } from "@assets/svg";
import styled from "@emotion/styled";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <LogoWhite className="logo" />
        <hr />
        <p>© 2021 D.D, All Rights Reserved</p>
      </Content>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #5f5f5f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  .logo {
    width: 50px;
    height: 50px;
  }
`;

const Content = styled.div`
  width: 85%;
  max-width: 1536px;
`;
