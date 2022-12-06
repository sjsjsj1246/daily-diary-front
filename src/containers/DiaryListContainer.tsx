import DiaryList from "@components/DiaryList";
import { authState } from "@recoil/auth";
import {
  diaryListState,
  diaryQueryState,
  useGetPreviousDiary,
  useResetAllDiary,
} from "@recoil/diary";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

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
  }, [diaryList]);

  return (
    <DiaryList
      diaryList={diaryList.filter(
        (element, index) =>
          diaryList.findIndex((x) => x.diaryId === element.diaryId) === index
      )}
      onGetPreviousDiary={onGetPreviousDiary}
    />
  );
};
export default DiaryListContainer;
