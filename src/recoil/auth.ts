import authApi from "@apis/authApi";
import userApi from "@apis/userApi";
import { atom, useRecoilState } from "recoil";

export const authState = atom({
  key: "auth",
  default: {
    currentUser: null as User | null,
  },
});

export const useLogin = () => {
  const [auth, setAuth] = useRecoilState(authState);

  return async function login(token: string) {
    const response = await authApi.login(token);
    setAuth({
      ...auth,
      currentUser: response.status === 200 ? response.data : null,
    });
  };
};

export const useGetCurrentUser = () => {
  const [auth, setAuth] = useRecoilState(authState);

  return async function () {
    const response = await userApi.getUser();
    setAuth({
      ...auth,
      currentUser: response.status === 200 ? response.data : null,
    });
  };
};
