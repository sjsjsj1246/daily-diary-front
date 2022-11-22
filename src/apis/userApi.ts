import axios from "axios";

const getUser = async (id?: string) =>
  await axios.get<User>(`/user${id && "/" + id}`);

export default {
  getUser,
};
