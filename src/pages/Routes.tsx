import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import MainPage from "@pages/MainPage";
import WritePage from "@pages/WritePage";
import DiaryListPage from "@pages/DiaryListPage";
import DiaryPage from "@pages/DiaryPage";
import MyPage from "@pages/MyPage";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route index element={<MainPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/diary" element={<DiaryListPage />} />
      <Route path="/diary/:id" element={<DiaryPage />} />
      <Route path="/my" element={<MyPage />} />
    </ReactRouterRoutes>
  );
};
