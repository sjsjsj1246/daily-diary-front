import userApi from "@apis/userApi";
import { selectorFamily } from "recoil";

export const userQuery = selectorFamily<User, string>({
  key: "UserInfoQuery",
  get: (id) => async () => {
    const response = await userApi.getUser(id);
    if (response.status !== 200) {
      throw new Error("회원정보 조회 실패");
    }
    return response.data;
  },
});
