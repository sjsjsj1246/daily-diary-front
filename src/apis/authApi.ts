import axios from "axios";

const login = async (token: string) =>
  await axios.post<User>("/auth/login", { token });
const logout = async () => await axios.post<null>("/auth/logout");

export default {
  login,
  logout,
};
