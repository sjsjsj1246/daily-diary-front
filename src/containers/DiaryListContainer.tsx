import DiaryList from "@components/DiaryList";
import {
  diaryListState,
  diaryQueryState,
  useGetPreviousDiary,
} from "@recoil/diary";
import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";

const DiaryListContainer: React.FC = () => {
  const diaryList = useRecoilValue(diaryListState);
  const getPreviousDiary = useGetPreviousDiary();

  const onGetPreviousDiary = () => {
    getPreviousDiary();
  };

  useEffect(() => {
    if (diaryList.length === 0) {
      onGetPreviousDiary();
    }
  }, []);

  return (
    <DiaryList diaryList={diaryList} onGetPreviousDiary={onGetPreviousDiary} />
  );
};
export default DiaryListContainer;
