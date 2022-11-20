import { rest } from "msw";
import * as service from "./service";

export const authHandlers = [
  rest.post("/auth", service.getDiary),
  rest.get("/auth", service.getDiary),
  rest.patch("/auth/:id", service.getDiary),
  rest.patch("/auth/toggle/:id", service.getDiary),
  rest.delete("/auth/:id", service.getDiary),
];
