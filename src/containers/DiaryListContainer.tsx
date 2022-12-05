import DiaryList from "@components/DiaryList";
import { diaryListQuery } from "@recoil/diary";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

const DiaryListContainer: React.FC = () => {
  const diaryListLoadable = useRecoilValueLoadable(diaryListQuery);

  return <DiaryList diaryListLoadable={diaryListLoadable} />;
};
export default DiaryListContainer;
