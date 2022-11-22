import DiaryList from "@components/DiaryList";
import { diaryListQuery } from "@recoil/diary";
import { Suspense } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

const DiaryListContainer: React.FC = () => {
  const diaryList = useRecoilValueLoadable(diaryListQuery("asd"));

  return <DiaryList diaryList={diaryList} />;
};

export default DiaryListContainer;
