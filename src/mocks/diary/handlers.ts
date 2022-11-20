import { rest } from "msw";
import * as service from "./service";

export const diaryHandlers = [
  rest.post("/todo", service.getDiary),
  rest.get("/todo", service.getDiary),
  rest.patch("/todo/:id", service.getDiary),
  rest.patch("/todo/toggle/:id", service.getDiary),
  rest.delete("/todo/:id", service.getDiary),
];
