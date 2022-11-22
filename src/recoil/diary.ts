import diaryApi from "@apis/diaryApi";
import { selectorFamily } from "recoil";

export const diaryListQuery = selectorFamily<Diary[], string>({
  key: "diaryListQuery",
  get: (query: string) => async () => {
    const response = await diaryApi.getDiaryList();
    if (response.status !== 200) {
      throw new Error("일기 리스트 조회 실패");
    }
    return response.data;
  },
});
