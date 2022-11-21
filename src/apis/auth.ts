import axios from "axios";

export const login = async (token: string) =>
  (await axios.post<User>("/auth/login", { token })).data;
export const logout = async () => (await axios.post<null>("/auth/logout")).data;
