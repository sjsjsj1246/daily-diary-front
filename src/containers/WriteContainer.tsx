import Write from "@components/Write";
import { useInternalRouter } from "@pages/routing";
import { useCreateDiary, writeDiaryState } from "@recoil/write";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const WriteContainer: React.FC = () => {
  const [writeDiary, setWriteDiary] = useRecoilState(writeDiaryState);
  const createDiary = useCreateDiary();
  const router = useInternalRouter();

  const onSubmit = async () => {
    await createDiary();
    router.push("/");
  };

  const onChange = (property: keyof WriteDiary, data: any) => {
    setWriteDiary({
      ...writeDiary,
      [property]: data,
    });
  };

  useEffect(() => {
    console.log(writeDiary);
  }, [writeDiary]);

  return (
    <Write writeDiary={writeDiary} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default WriteContainer;
