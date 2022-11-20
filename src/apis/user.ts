import axios from "axios";

export const check = async (id?: number) =>
  (await axios.get<User>(`/user${id && "/" + id}`)).data;
