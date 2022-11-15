import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import LoginPage from "./LoginPage";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route index element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
    </ReactRouterRoutes>
  );
};
