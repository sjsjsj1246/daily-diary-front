import styled from "@emotion/styled";
import { Suspense } from "react";
import { Loadable } from "recoil";
import { dateStringToLocalString } from "@utils/date";
import { Typography } from "@mui/material";
import { useInternalRouter } from "@pages/routing";

type DiaryListProps = {
  diaryListLoadable: Loadable<Diary[]>;
};

const DiaryList: React.FC<DiaryListProps> = ({ diaryListLoadable }) => {
  const router = useInternalRouter();

  return (
    <Wrapper>
      <Contents>
        {diaryListLoadable.state === "hasValue" &&
          diaryListLoadable.contents.map((diary) => (
            <Card
              key={diary.id}
              onClick={() => router.push(`/diary/${diary.id}`)}
            >
              <p>{diary.title}</p>
              <Typography noWrap>{diary.content}</Typography>
              <p>by {diary.author.name}</p>
              <p>{dateStringToLocalString(diary.createdAt)}</p>
            </Card>
          ))}
      </Contents>
    </Wrapper>
  );
};

export default DiaryList;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  width: 85%;
`;

const Card = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  color: #747474;
  transition: all 0.3 ease;
  border-bottom: 1px solid #e2e2e2;

  .title {
  }

  .content {
  }
`;
