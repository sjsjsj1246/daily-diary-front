import DiaryList from "@components/DiaryList";
import { bookmarkListQuery } from "@recoil/diary";
import { useLocation } from "react-router";
import { useRecoilValueLoadable } from "recoil";
import qs from "qs";

const BookmarkListContainer: React.FC = () => {
  const query = useLocation().search.split("?")[1];
  const diaryListLoadable = useRecoilValueLoadable(
    bookmarkListQuery(qs.parse(query))
  );

  return <DiaryList diaryListLoadable={diaryListLoadable} />;
};
export default BookmarkListContainer;
