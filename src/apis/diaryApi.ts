import axios from "axios";

const getDiary = async () => await axios.get<Diary[]>(`/diary`);

export default {
  getDiaryList: getDiary,
};
