import DiaryList from "@components/DiaryList";
import { useInternalRouter } from "@pages/routing";
import { authState } from "@recoil/auth";
import {
  bookmarkDiaryListState,
  bookmarkDiaryQueryState,
  useGetPreviousBookmarkDiary,
} from "@recoil/diary";
import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";

const DiaryListContainer: React.FC = () => {
  const { currentUser } = useRecoilValue(authState);
  const bookmarkDiaryList = useRecoilValue(bookmarkDiaryListState);
  const getPreviousBookmarkDiary = useGetPreviousBookmarkDiary();
  const router = useInternalRouter();

  const onGetPreviousDiary = () => {
    getPreviousBookmarkDiary();
  };

  useEffect(() => {
    if (!currentUser) {
      alert("로그인이 필요합니다.");
      router.push("/");
    }
    if (currentUser && bookmarkDiaryList.length === 0) {
      onGetPreviousDiary();
    }
  }, [currentUser]);

  return (
    <DiaryList
      diaryList={bookmarkDiaryList}
      onGetPreviousDiary={onGetPreviousDiary}
    />
  );
};
export default DiaryListContainer;
