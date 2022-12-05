import { rest } from "msw";
import * as service from "./service";

export const userHandler = [
  rest.get("/members", service.getUser),
  rest.get("/members/:id", service.getUser),
  rest.patch("/members/:id", service.updateUser),
];
