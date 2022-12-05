import Diary from "@components/Diary";
import { authState } from "@recoil/auth";
import { diaryQuery, useBookmarkDiary } from "@recoil/diary";
import { useParams } from "react-router";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";

const DiaryContainer: React.FC = () => {
  const id = parseInt(useParams().id!);
  const { currentUser } = useRecoilValue(authState);
  const refresh = useRecoilRefresher_UNSTABLE(diaryQuery(id));
  const bookmarkDiary = useBookmarkDiary();

  const diaryLoadable = useRecoilValueLoadable(diaryQuery(id));

  const onBookMark = async () => {
    await bookmarkDiary(id);
    refresh();
    console.log("hi");
  };

  return diaryLoadable.state === "hasValue" ? (
    <Diary
      diary={diaryLoadable.contents}
      currentUser={currentUser}
      onBookMark={onBookMark}
    />
  ) : null;
};

export default DiaryContainer;
