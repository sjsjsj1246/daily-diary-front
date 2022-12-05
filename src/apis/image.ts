import axios from "axios";

const getImage = async (filename: string) =>
  await axios.get<string>(`/images/${filename}`);

const createImage = async (formData: FormData) =>
  await axios.patch<string>("/images/profile");

export default {
  getImage,
  createImage,
};
