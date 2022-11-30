import Diary from "@components/Diary";
import { diaryQuery } from "@recoil/diary";
import { useParams } from "react-router";
import { useRecoilValueLoadable } from "recoil";

const DiaryContainer: React.FC = () => {
  const { id } = useParams() as { id: string };

  const diaryLoadable = useRecoilValueLoadable(diaryQuery(parseInt(id)));

  return diaryLoadable.state === "hasValue" ? (
    <Diary diary={diaryLoadable.contents} />
  ) : null;
};

export default DiaryContainer;
