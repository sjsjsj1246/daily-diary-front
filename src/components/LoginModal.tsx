import styled from "@emotion/styled";
import { CSSTransition } from "react-transition-group";

type LoginModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onLogin: (token: string) => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ open, setOpen, onLogin }) => {
  return (
    <Wrapper onClick={() => setOpen(false)}>
      <CSSTransition in={open} timeout={500} classNames="modal" unmountOnExit>
        <LoginForm>
          <p>로그인</p>
          <button onClick={() => onLogin("asd")}>로그인하기</button>
        </LoginForm>
      </CSSTransition>
    </Wrapper>
  );
};

export default LoginModal;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e2e2e255;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  .modal-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 0.5s ease-in-out;
  }
`;

const LoginForm = styled.div`
  width: 10rem;
  height: 15rem;
  background-color: #fff;
`;
