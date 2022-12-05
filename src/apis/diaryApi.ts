import axios from "axios";
import qs from "qs";

const getDiaryList = async (query: DiaryQuery) =>
  await axios.get<Diary[]>(`/diary${qs.stringify(query)}`);

const getDiary = async (id: number) => await axios.get<Diary>(`/diary/${id}`);

const updateDiary = async (id: number, diary: Diary) =>
  await axios.patch<Diary>(`/diary/${id}`, diary);

const deleteDiary = async (id: number) =>
  await axios.delete<Diary>(`/diary/${id}`);

const bookmarkDiary = async (id: number) =>
  await axios.post<Diary>(`/diary/bookmark/${id}`);

const getBookMarkDiaryList = async (query: DiaryQuery) =>
  await axios.get<Diary[]>(`/bookmark?${qs.stringify(query)}`);

export default {
  getDiaryList,
  getDiary,
  updateDiary,
  deleteDiary,
  bookmarkDiary,
  getBookMarkDiaryList,
};
