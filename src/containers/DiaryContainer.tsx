import Diary from "@components/Diary";
import { authState } from "@recoil/auth";
import { diaryQuery } from "@recoil/diary";
import { useParams } from "react-router";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

const DiaryContainer: React.FC = () => {
  const { id } = useParams() as { id: string };
  const { currentUser } = useRecoilValue(authState);

  const diaryLoadable = useRecoilValueLoadable(diaryQuery(parseInt(id)));

  return diaryLoadable.state === "hasValue" ? (
    <Diary diary={diaryLoadable.contents} currentUser={currentUser} />
  ) : null;
};

export default DiaryContainer;
