import diaryApi from "@apis/diaryApi";
import {
  atom,
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useResetRecoilState,
} from "recoil";
import {
  bookmarkDiaryListState,
  bookmarkDiaryQueryState,
  diaryListState,
  diaryQueryState,
  useResetAllDiary,
} from "./diary";

export const writeDiaryState = atom<WriteDiary>({
  key: "diaryState",
  default: {
    id: null,
    title: "",
    contents: "",
    isPublic: false,
    tags: [],
    image: null,
  },
});

export const useCreateDiary = () => {
  const resetAllDiary = useResetAllDiary();
  const resetWriteDiary = useResetRecoilState(writeDiaryState);
  const wirteDiary = useRecoilValue(writeDiaryState);

  const createDiary = async () => {
    const formData = new FormData();
    formData.append("title", wirteDiary.title || "");
    formData.append("contents", wirteDiary.contents || "");
    formData.append("isPublic", wirteDiary.isPublic.toString());
    formData.append("tags", wirteDiary.tags.join(","));
    if (wirteDiary.image) formData.append("image", wirteDiary.image);

    const response = await diaryApi.createDiary(formData);
    if (response.status !== 201) {
      throw new Error("일기 생성 실패");
    }

    resetWriteDiary();
    resetAllDiary();
  };

  return createDiary;
};
