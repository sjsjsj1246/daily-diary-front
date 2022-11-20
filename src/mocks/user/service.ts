import { rest } from "msw";
import data from "./data";

export const getUser: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(data));
};

export const updateUser: Parameters<typeof rest.patch>[1] = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(data));
};
