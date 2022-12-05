import { rest } from "msw";
import { data, savedData } from "./data";

export const login: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  //copy object
  const { accessToken, refreshToken, memberId, name, email, profileImage } =
    savedData;
  data.accessToken = accessToken;
  data.refreshToken = refreshToken;
  data.memberId = memberId;
  data.name = name;
  data.email = email;
  data.profileImage = profileImage;

  return res(ctx.delay(500), ctx.status(200), ctx.json(data));
};
