import { rest } from "msw";
import data from "./data";
import { savedData } from "../auth/data";

export const getUser: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const id = req.params.id as string | undefined;
  if (id) {
    return res(
      ctx.delay(200),
      ctx.status(200),
      ctx.json(data.find((user) => user.id === id))
    );
  } else {
    return res(
      ctx.delay(200),
      ctx.status(200),
      ctx.json(data.find((user) => user.id === savedData.memberId))
    );
  }
};

export const updateUser: Parameters<typeof rest.patch>[1] = (req, res, ctx) => {
  const body = req.body as User;
  const index = data.findIndex((user) => user.id === body.id);
  data[index] = body;
  return res(ctx.delay(200), ctx.status(200), ctx.json(data));
};
