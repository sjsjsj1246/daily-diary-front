import { rest } from "msw";
import data from "./data";

export const login: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  data.currentUser = data.user;
  return res(ctx.delay(500), ctx.status(200), ctx.json(data));
};
