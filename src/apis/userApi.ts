import axios from "axios";

const getUser = async (id?: string) =>
  await axios.get<User>(`/members${id && "/" + id}`);

const updateUser = async (id: string, user: User) =>
  await axios.patch<User>(`/members/${id}`, user);

export default {
  getUser,
  updateUser,
};
