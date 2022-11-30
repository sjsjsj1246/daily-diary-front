import diaryApi from "@apis/diaryApi";
import { selectorFamily } from "recoil";
import { authState } from "./auth";

export const diaryListQuery = selectorFamily<Diary[], DiaryQuery>({
  key: "diaryListQuery",
  get:
    (query: DiaryQuery) =>
    async ({ get }) => {
      get(authState);
      const response = await diaryApi.getDiaryList(query);
      if (response.status !== 200) {
        throw new Error("일기 리스트 조회 실패");
      }
      return response.data;
    },
});

export const diaryQuery = selectorFamily<Diary, number>({
  key: "diaryQuery",
  get:
    (id: number) =>
    async ({ get }) => {
      get(authState);
      const response = await diaryApi.getDiary(id);
      if (response.status !== 200) {
        throw new Error("일기 조회 실패");
      }
      return response.data;
    },
});

export const bookmarkListQuery = selectorFamily<Diary[], DiaryQuery>({
  key: "bookmarkListQuery",
  get:
    (query: DiaryQuery) =>
    async ({ get }) => {
      get(authState);
      const response = await diaryApi.getBookMarkDiaryList(query);

      if (response.status !== 200) {
        throw new Error("북마크 리스트 조회 실패");
      }
      return response.data;
    },
});
