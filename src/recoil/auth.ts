import authApi from "@apis/authApi";
import userApi from "@apis/userApi";
import axios from "axios";
import { atom, useRecoilState } from "recoil";

export const authState = atom({
  key: "auth",
  default: {
    accessToken: null as string | null,
    refreshToken: null as string | null,
    currentUser: null as User | null,
  },
});

export const useLogin = () => {
  const [auth, setAuth] = useRecoilState(authState);

  return async function login(mode: "kakao" | "google", token: string) {
    let response;

    switch (mode) {
      case "kakao":
        response = await authApi.kakao(token);
        break;
      case "google":
        response = await authApi.google(token);
        break;
    }

    if (response.status !== 200) throw new Error("Login failed");

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.accessToken}`;

    localStorage.setItem(
      "auth",
      JSON.stringify({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        currentUser: {
          id: response.data.memberId,
          name: response.data.name,
          image: response.data.profileImage,
          email: response.data.email,
        },
      })
    );

    setAuth({
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      currentUser: {
        id: response.data.memberId,
        name: response.data.name,
        image: response.data.profileImage,
        email: response.data.email,
      },
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
