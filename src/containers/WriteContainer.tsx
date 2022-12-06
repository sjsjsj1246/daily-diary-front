import Write from "@components/Write";
import { useInternalRouter } from "@pages/routing";
import { useCreateDiary, writeDiaryState } from "@recoil/write";
import { replaceHtmlTag } from "@utils/diary";
import { useRecoilState } from "recoil";

const WriteContainer: React.FC = () => {
  const [writeDiary, setWriteDiary] = useRecoilState(writeDiaryState);
  const createDiary = useCreateDiary();
  const router = useInternalRouter();

  const onSubmit = async () => {
    if (writeDiary.title === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (replaceHtmlTag(writeDiary.contents) === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    await createDiary();
    router.push(`/`);
  };

  const onChange = (property: keyof WriteDiary, data: any) => {
    setWriteDiary({
      ...writeDiary,
      [property]: data,
    });
  };

  return (
    <Write writeDiary={writeDiary} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default WriteContainer;
