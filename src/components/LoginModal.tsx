import styled from "@emotion/styled";
import { useRef } from "react";
import KakaoLogin from "react-kakao-login";
import { CSSTransition } from "react-transition-group";

type LoginModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onLogin: (mode: "kakao" | "google", token: string) => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ open, setOpen, onLogin }) => {
  const ref = useRef(null);

  return (
    <CSSTransition
      in={open}
      timeout={200}
      classNames="modal"
      nodeRef={ref}
      unmountOnExit
    >
      <Wrapper onClick={() => setOpen(false)}>
        <LoginForm ref={ref} onClick={(e) => e.stopPropagation()}>
          <p className="title">로그인</p>
          <KakaoLogin
            className="kakao-login"
            useLoginForm={true}
            token={process.env.REACT_APP_KAKAO_API_KEY!}
            onSuccess={(result) => {
              onLogin("kakao", result.response.access_token);
            }}
            onFail={(result) => console.log(result)}
          ></KakaoLogin>
        </LoginForm>
      </Wrapper>
    </CSSTransition>
  );
};

export default LoginModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  .modal-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 0.2s ease;
  }

  .modal-exit {
    opacity: 1;
  }
  .modal-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.2s ease;
  }
`;

const LoginForm = styled.div`
  width: 20rem;
  height: 15rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .kakao-login {
    font-weight: bold;
  }
`;
