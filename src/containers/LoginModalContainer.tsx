import LoginModal from "@components/LoginModal";
import { authState, useLogin } from "@recoil/auth";
import { useResetAllDiary } from "@recoil/diary";
import { openLoginModalState } from "@recoil/ui";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const LoginModalContainer: React.FC = () => {
  const [open, setOpen] = useRecoilState(openLoginModalState);
  const { currentUser } = useRecoilValue(authState);
  const login = useLogin();
  const resetAllDiary = useResetAllDiary();

  const onLogin = async (mode: "kakao" | "google", token: string) => {
    await login(mode, token);
    resetAllDiary();
    setOpen(false);
  };

  useEffect(() => {
    if (currentUser) {
      setOpen(false);
    }
  }, [currentUser]);

  return <LoginModal open={open} setOpen={setOpen} onLogin={onLogin} />;
};

export default LoginModalContainer;
