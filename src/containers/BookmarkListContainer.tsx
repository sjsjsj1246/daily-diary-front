import DiaryList from "@components/DiaryList";
import { bookmarkListQuery } from "@recoil/diary";
import { useLocation } from "react-router";
import { useRecoilValueLoadable } from "recoil";
import qs from "qs";

const BookmarkListContainer: React.FC = () => {
  const diaryListLoadable = useRecoilValueLoadable(bookmarkListQuery);

  return <DiaryList diaryListLoadable={diaryListLoadable} />;
};
export default BookmarkListContainer;
