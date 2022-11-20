import styled from "@emotion/styled";
import { useInternalRouter } from "@pages/routing";
import { Logo } from "assets/svg";

const Header: React.FC = () => {
  const router = useInternalRouter();
  return (
    <Wrapper>
      <Logo className="logo" onClick={() => router.push("/")} />
      <Menu style={{ flex: 1 }} onClick={() => router.push("/diary")}>
        일기
      </Menu>
      <Menu onClick={() => router.push("/login")}>로그인</Menu>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #ffffffe1;

  .logo {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  margin-left: 2rem;
  cursor: pointer;
`;
