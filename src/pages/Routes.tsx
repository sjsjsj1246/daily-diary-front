import { redirect, Route, Routes as ReactRouterRoutes } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import DiaryListContainer from "@containers/DiaryListContainer";
import WriteContainer from "@containers/WriteContainer";
import DiaryContainer from "@containers/DiaryContainer";
import ProfileContainer from "@containers/ProfileContainer";
import BookmarkListContainer from "@containers/BookmarkListContainer";
import PrivateRoute from "./PrivateRoute";
import { useRecoilValue } from "recoil";
import { authState } from "@recoil/auth";

export const Routes = () => {
  const { currentUser } = useRecoilValue(authState);

  return (
    <ReactRouterRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DiaryListContainer />} />
        <Route path="/write" element={<WriteContainer />} />
        <Route path="/bookmark" element={<BookmarkListContainer />} />
        <Route path="/diary/:id" element={<DiaryContainer />} />
        <Route path="/profile/:id" element={<ProfileContainer />} />
      </Route>
    </ReactRouterRoutes>
  );
};
