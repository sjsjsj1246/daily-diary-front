import { rest } from "msw";
import * as service from "./service";

export const diaryHandlers = [
  rest.get("/diary", service.getDiaryList),
  rest.get("/diary/bookmark", service.getBookMarkDiaryList),
  rest.post("/diary/bookmark/:id", service.bookmarkDiary),
  rest.get("/diary/:id", service.getDiary),
  rest.patch("/diary/:id", service.updateDiary),
  rest.delete("/diary/:id", service.deleteDiary),
];
