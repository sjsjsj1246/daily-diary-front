import { rest } from "msw";
import * as service from "./service";

export const authHandlers = [rest.post("/auth/login", service.login)];
