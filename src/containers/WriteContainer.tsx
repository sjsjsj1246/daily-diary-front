import Write from "@components/Write";
import { writeDiaryState } from "@recoil/write";
import { useRecoilState } from "recoil";

const WriteContainer: React.FC = () => {
  const [writeDiary, setWriteDiary] = useRecoilState(writeDiaryState);

  const onSubmit = () => {};

  const onChange = (property: keyof WriteDiary, data: any) => {
    setWriteDiary({
      ...writeDiary,
      [property]: data,
    });
  };

  return <Write writeDiary={writeDiary} onChange={onChange} />;
};

export default WriteContainer;
