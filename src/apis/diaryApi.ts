import axios from "axios";
import qs from "qs";

const getDiaryList = async (query: DiaryQuery) =>
  await axios.get<{ count: number; data: Diary[] }>(
    `/diary?${qs.stringify(query)}`
  );

const createDiary = async (diary: FormData) =>
  await axios.post<Diary>("/diary", diary);

const getDiary = async (id: number) => await axios.get<Diary>(`/diary/${id}`);

const updateDiary = async (id: number, diary: Diary) =>
  await axios.patch<Diary>(`/diary/${id}`, diary);

const deleteDiary = async (id: number) =>
  await axios.delete<Diary>(`/diary/${id}`);

const bookmarkDiary = async (id: number) =>
  await axios.post<Diary>(`/bookmark`, { diaryId: id });

const getBookMarkDiaryList = async (query: DiaryQuery) =>
  await axios.get<{ count: number; data: Diary[] }>(
    `/diary/bookmark?${qs.stringify(query)}`
  );

export default {
  getDiaryList,
  getDiary,
  createDiary,
  updateDiary,
  deleteDiary,
  bookmarkDiary,
  getBookMarkDiaryList,
};
