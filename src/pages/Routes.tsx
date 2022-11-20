import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route index element={<MainPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </ReactRouterRoutes>
  );
};
