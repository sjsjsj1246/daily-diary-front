import styled from "@emotion/styled";

type LoginModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal: React.FC<LoginModalProps> = ({ setOpen }) => {
  return (
    <Wrapper onClick={() => setOpen(false)}>
      <LoginForm>로그인</LoginForm>
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
`;

const LoginForm = styled.div`
  width: 10rem;
  height: 15rem;
  background-color: #fff;
`;
