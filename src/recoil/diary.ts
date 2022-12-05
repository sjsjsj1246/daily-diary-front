import diaryApi from "@apis/diaryApi";
import {
  atom,
  selector,
  selectorFamily,
  useRecoilRefresher_UNSTABLE,
} from "recoil";
import { authState } from "./auth";

export const diaryQueryState = atom<DiaryQuery>({
  key: "diaryQueryState",
  default: {
    sort: "DESC",
    limit: 10,
    lte: 0,
  },
});

export const diaryListQuery = selector<Diary[]>({
  key: "diaryListQuery",
  get: async ({ get }) => {
    get(authState);

    const response = await diaryApi.getDiaryList(get(diaryQueryState));
    if (response.status !== 200) {
      throw new Error("일기 리스트 조회 실패");
    }
    return response.data.data;
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

export const bookmarkListQuery = selector<Diary[]>({
  key: "bookmarkListQuery",
  get: async ({ get }) => {
    get(authState);
    const response = await diaryApi.getBookMarkDiaryList(get(diaryQueryState));

    if (response.status !== 200) {
      throw new Error("북마크 리스트 조회 실패");
    }
    return response.data.data;
  },
});

export const deleteDiary = (id: number) => {
  const refresh = useRecoilRefresher_UNSTABLE(diaryListQuery);
  return async () => {
    const response = await diaryApi.deleteDiary(id);
    if (response.status !== 200) {
      throw new Error("일기 삭제 실패");
    }
    refresh();
  };
};

export const useBookmarkDiary = () => {
  const refresh = useRecoilRefresher_UNSTABLE(diaryListQuery);
  return async (id: number) => {
    const response = await diaryApi.bookmarkDiary(id);
    if (response.status !== 201) {
      throw new Error("일기 북마크 실패");
    }
    refresh();
  };
};
