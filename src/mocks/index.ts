import { setupWorker } from "msw";
import { authHandlers } from "./auth/handlers";
import { diaryHandlers } from "./diary/handlers";
import { userHandler } from "./user/handlers";

export const worker = setupWorker(
  ...authHandlers,
  ...diaryHandlers,
  ...userHandler
);
