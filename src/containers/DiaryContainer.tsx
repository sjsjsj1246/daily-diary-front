import Diary from "@components/Diary";
import { useEffect } from "react";
import { useParams } from "react-router";

const DiaryContainer: React.FC = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  });
  return <Diary />;
};

export default DiaryContainer;
