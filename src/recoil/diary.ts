import diaryApi from "@apis/diaryApi";
import {
  atom,
  selector,
  selectorFamily,
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useResetRecoilState,
} from "recoil";
import { authState } from "./auth";

export const diaryQueryState = atom<DiaryQuery>({
  key: "diaryQueryState",
  default: {
    sort: "DESC",
    limit: 6,
    lte: 987654321,
  },
});

export const bookmarkDiaryQueryState = atom<DiaryQuery>({
  key: "bookmarkDiaryQueryState",
  default: {
    sort: "DESC",
    limit: 6,
    lte: 987654321,
  },
});

export const diaryListState = atom<Diary[]>({
  key: "diaryListState",
  default: [],
});

export const bookmarkDiaryListState = atom<Diary[]>({
  key: "bookmarkDiaryListState",
  default: [],
});

export const useGetPreviousDiary = () => {
  const [query, setQuery] = useRecoilState(diaryQueryState);
  const [diaryList, setDiaryList] = useRecoilState(diaryListState);

  const getPreviousDiary = async () => {
    const {
      data: { data },
    } = await diaryApi.getDiaryList(query);

    if (diaryList.includes(data[0])) return;

    const lte = data[data.length - 1].diaryId;
    setQuery((prev) => ({ ...prev, lte }));
    setDiaryList((prev) => [...prev, ...data]);
  };

  return getPreviousDiary;
};

export const useGetPreviousBookmarkDiary = () => {
  const [query, setQuery] = useRecoilState(bookmarkDiaryQueryState);
  const [diaryList, setDiaryList] = useRecoilState(bookmarkDiaryListState);

  const getPreviousBookmarkDiary = async () => {
    const {
      data: { data },
    } = await diaryApi.getBookMarkDiaryList(query);
    const lte = data[data.length - 1].diaryId;
    setQuery((prev) => ({ ...prev, lte }));
    setDiaryList((prev) => [...prev, ...data]);
  };

  return getPreviousBookmarkDiary;
};

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

export const useDeleteDiary = () => {
  const resetAllDiary = useResetAllDiary();

  return async (id: number) => {
    const response = await diaryApi.deleteDiary(id);
    if (response.status !== 204) {
      throw new Error("일기 삭제 실패");
    }
    resetAllDiary();
  };
};

export const useBookmarkDiary = () => {
  const resetBookmarkDiaryList = useResetRecoilState(bookmarkDiaryListState);
  const resetQuery = useResetRecoilState(bookmarkDiaryQueryState);

  return async (id: number) => {
    const response = await diaryApi.bookmarkDiary(id);
    if (response.status !== 201) {
      throw new Error("일기 북마크 실패");
    }
    resetBookmarkDiaryList();
    resetQuery();
  };
};

export const useResetAllDiary = () => {
  const resetDiaryList = useResetRecoilState(diaryListState);
  const resetQuery = useResetRecoilState(diaryQueryState);
  const resetBookmarkDiaryList = useResetRecoilState(bookmarkDiaryListState);
  const resetBookmarkQuery = useResetRecoilState(bookmarkDiaryQueryState);
  return () => {
    resetDiaryList();
    resetQuery();
    resetBookmarkDiaryList();
    resetBookmarkQuery();
  };
};
