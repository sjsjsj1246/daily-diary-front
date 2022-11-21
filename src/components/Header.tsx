import styled from "@emotion/styled";
import { useInternalRouter } from "@pages/routing";
import { Logo } from "assets/svg";
import { useEffect, useState } from "react";
import { throttle } from "lodash";
import LoginModalContainer from "containers/LoginModalContainer";

const Header: React.FC = () => {
  const router = useInternalRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(updateScroll, 300));
    return () => window.removeEventListener("scroll", updateScroll);
  });

  return (
    <Wrapper className={scrollPosition ? "scrolled" : ""}>
      <Content>
        <Logo className="logo" onClick={() => router.push("/")} />
        <Menu onClick={() => router.push("/diary")}>일기</Menu>
        <Menu className="write" onClick={() => router.push("/write")}>
          작성하기
        </Menu>
        <Menu onClick={() => setOpenLoginModal(!openLoginModal)}>로그인</Menu>
        <LoginModalContainer
          open={openLoginModal}
          setOpen={setOpenLoginModal}
        />
      </Content>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  background-color: none;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;

  .logo {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }

  &.scrolled {
    background-color: #ffffffe1;
  }
`;

const Content = styled.div`
  width: 85%;
  max-width: 1536px;
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  width: 6rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  cursor: pointer;
  font-weight: bold;

  &.write {
    border-radius: 5px;
    margin-left: auto;
    background-color: #d7e7ec;
  }
`;
