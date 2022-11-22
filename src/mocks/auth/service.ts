import { rest } from "msw";
import data from "./data";

export const login: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(data));
};
