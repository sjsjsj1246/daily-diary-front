import axios from "axios";

const getUser = async (id?: string) =>
  await axios.get<User>(`/user${id && "/" + id}`);

const updateUser = async (id: string, user: User) =>
  await axios.patch<User>(`/user/${id}`, user);

export default {
  getUser,
  updateUser,
};
