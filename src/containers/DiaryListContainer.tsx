import DiaryList from "@components/DiaryList";
import { diaryListQuery } from "@recoil/diary";
import { useLocation } from "react-router";
import { useRecoilValueLoadable } from "recoil";
import qs from "qs";

const DiaryListContainer: React.FC = () => {
  const query = useLocation().search;
  const diaryListLoadable = useRecoilValueLoadable(
    diaryListQuery(qs.parse(query))
  );

  return <DiaryList diaryListLoadable={diaryListLoadable} />;
};
export default DiaryListContainer;
