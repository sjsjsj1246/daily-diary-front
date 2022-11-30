import { rest } from "msw";
import * as service from "./service";

export const userHandler = [
  rest.get("/user", service.getUser),
  rest.get("/user/:id", service.getUser),
  rest.patch("/user/:id", service.updateUser),
];
