import Diary from "@components/Diary";
import { useInternalRouter } from "@pages/routing";
import { authState } from "@recoil/auth";
import { diaryQuery, useBookmarkDiary, useDeleteDiary } from "@recoil/diary";
import { useParams } from "react-router";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";

const DiaryContainer: React.FC = () => {
  const id = parseInt(useParams().id!);
  const { currentUser } = useRecoilValue(authState);
  const bookmarkDiary = useBookmarkDiary();
  const deleteDiary = useDeleteDiary();
  const diaryLoadable = useRecoilValueLoadable(diaryQuery(id));
  const refresh = useRecoilRefresher_UNSTABLE(diaryQuery(id));
  const router = useInternalRouter();

  const onBookMark = async () => {
    await bookmarkDiary(id);
    refresh();
  };

  const onDeleteDiary = async () => {
    await deleteDiary(id);
    refresh();
    router.push("/");
  };

  return diaryLoadable.state === "hasValue" ? (
    <Diary
      diary={diaryLoadable.contents}
      currentUser={currentUser}
      onBookMark={onBookMark}
      onDeleteDiary={onDeleteDiary}
    />
  ) : null;
};

export default DiaryContainer;
