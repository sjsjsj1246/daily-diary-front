import { getDiary } from "@apis/diary";
import { atom, selector } from "recoil";

const diaryAtom = atom({
  key: "diary",
  default: selector({
    key: "diary/Default",
    get: () => getDiary(),
  }),
});

export default diaryAtom;
