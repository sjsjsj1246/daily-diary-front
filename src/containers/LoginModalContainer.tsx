import LoginModal from "@components/LoginModal";
import React from "react";

type LoginModalContainerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModalContainer: React.FC<LoginModalContainerProps> = ({
  open,
  setOpen,
}) => {
  return open ? <LoginModal setOpen={setOpen} /> : null;
};

export default LoginModalContainer;
