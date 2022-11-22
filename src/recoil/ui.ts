import { atom } from "recoil";

export const openLoginModalState = atom<boolean>({
  key: "openLoginModal",
  default: false,
});
