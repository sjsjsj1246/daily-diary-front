import authApi from "@apis/authApi";
import userApi from "@apis/userApi";
import { atom, useRecoilState } from "recoil";

export const authState = atom({
  key: "auth",
  default: {
    token: null as string | null,
    currentUser: null as User | null,
  },
});

export const useLogin = () => {
  const [auth, setAuth] = useRecoilState(authState);

  return async function login(token: string) {
    const response = await authApi.google(token);
    if (response.status !== 200) throw new Error("Login failed");

    setAuth({
      token: response.data.token,
      currentUser: response.data.user,
    });
  };
};

export const useGetCurrentUser = () => {
  const [auth, setAuth] = useRecoilState(authState);

  return async function () {
    const response = await userApi.getUser();
    if (response.status !== 200) throw new Error("Login failed");

    setAuth({
      ...auth,
      currentUser: response.data,
    });
  };
};
