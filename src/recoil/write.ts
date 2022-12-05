import { atom, useRecoilRefresher_UNSTABLE, useResetRecoilState } from "recoil";
import { diaryListQuery } from "./diary";

export const writeDiaryState = atom<WriteDiary>({
  key: "diaryState",
  default: {
    id: null,
    title: "",
    content: "",
    isPublic: false,
    tags: [],
    image: null,
  },
});

export const useCreateDiary = () => {
  const reset = useResetRecoilState(writeDiaryState);

  const createDiary = async () => {
    const newDiary = {};

    reset();
  };

  return createDiary;
};
