import { rest } from "msw";
import * as service from "./service";

export const diaryHandlers = [
  rest.get("/diary", service.getDiary),
  rest.patch("/diary/:id", service.getDiary),
  rest.patch("/diary/toggle/:id", service.getDiary),
  rest.delete("/diary/:id", service.getDiary),
];
