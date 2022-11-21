import axios from "axios";

export const getUser = async (id?: number) =>
  (await axios.get<User>(`/user${id && "/" + id}`)).data;
