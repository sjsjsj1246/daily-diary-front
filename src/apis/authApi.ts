import axios from "axios";

const google = async (accessToken: string) =>
  await axios.post<AuthDTO>("/members/login", {
    accessToken,
  });
const kakao = async (accessToken: string) =>
  await axios.post<AuthDTO>("/members/login", {
    accessToken,
  });
const logout = async () => await axios.post<null>("/members/logout");

export default {
  google,
  kakao,
  logout,
};
