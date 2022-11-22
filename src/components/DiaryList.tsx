import styled from "@emotion/styled";
import { Suspense } from "react";
import { Loadable } from "recoil";

type DiaryListProps = {
  diaryList: Loadable<Diary[]>;
};

const DiaryList: React.FC<DiaryListProps> = ({ diaryList }) => {
  return (
    <Wrapper>
      {diaryList.state === "hasValue" &&
        diaryList.contents.map((diary) => (
          <div key={diary.id}>
            <p>{diary.title}</p>
            <p>{diary.content}</p>
          </div>
        ))}
    </Wrapper>
  );
};

export default DiaryList;

const Wrapper = styled.div`
  padding-top: 5rem;
  flex: 1;
`;
