import { getUser } from "@apis/user";
import { atom, selector } from "recoil";

const userAtom = atom({
  key: "user",
  default: selector({
    key: "user/Default",
    get: () => getUser(),
  }),
});

export default userAtom;
