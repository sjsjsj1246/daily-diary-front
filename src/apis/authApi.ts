import axios from "axios";

const google = async (token: string) =>
  await axios.post<{ token: string; user: User }>("/auth/login", { token });
const kakao = async (token: string) =>
  await axios.post<{ token: string; user: User }>("/auth/login", { token });
const logout = async () => await axios.post<null>("/auth/logout");

export default {
  google,
  kakao,
  logout,
};
