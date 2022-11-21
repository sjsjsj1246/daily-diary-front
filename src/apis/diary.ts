import axios from "axios";

export const getDiary = async () => (await axios.get<Diary>(`/diary`)).data;
