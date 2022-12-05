import { Loadable } from "recoil";
import { dateStringToLocalString } from "@utils/date";
import { Avatar, Box, Fab, styled, Typography } from "@mui/material";
import { useInternalRouter } from "@pages/routing";
import EditIcon from "@mui/icons-material/Edit";
import { replaceHtmlTag } from "@utils/diary";
import { useCallback, useEffect } from "react";
import { debounce, throttle } from "lodash";

type DiaryListProps = {
  diaryList: Diary[];
  onGetPreviousDiary: () => void;
};

const DiaryList: React.FC<DiaryListProps> = ({
  diaryList,
  onGetPreviousDiary,
}) => {
  const router = useInternalRouter();

  const handleScroll = throttle(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    //전체의 높이(스크롤 전체) - (스크롤 위치 높이 + 화면 높이)
    if (scrollHeight - innerHeight - scrollTop < 200) {
      onGetPreviousDiary();
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onGetPreviousDiary]);

  return (
    <Wrapper>
      {diaryList.map((diary) => (
        <Card
          key={diary.diaryId}
          onClick={() => router.push(`/diary/${diary.diaryId}`)}
        >
          <Left>
            <Top>
              <Avatar
                className="avatar"
                src={`${process.env.REACT_APP_API_URL}/images/${diary.author.image}`}
              />
              <Typography className="name">{diary.author.name}</Typography>
            </Top>
            <Middle>
              <Typography noWrap className="title">
                {diary.title}
              </Typography>
              <Typography className="content">
                {replaceHtmlTag(diary.contents)}
              </Typography>
            </Middle>
            <Bottom>
              <Typography className="date">
                {dateStringToLocalString(diary.createdAt)}
              </Typography>
              {diary.tags.map((tag) => (
                <Typography className="tag" key={tag}>
                  #{tag}
                </Typography>
              ))}
            </Bottom>
          </Left>
          {diary.image && (
            <Right>
              <img
                css={{
                  width: "10rem",
                  height: "10rem",
                  objectFit: "cover",
                }}
                src={`${process.env.REACT_APP_API_URL}/images/${diary.image}`}
              />
            </Right>
          )}
        </Card>
      ))}
      <Fab
        sx={{
          color: "white",
          backgroundColor: "#444444",
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          ":hover": {
            backgroundColor: "#5e5e5e",
          },
          "@media (max-width: 500px)": {
            right: "1rem",
            bottom: "6rem",
          },
        }}
        onClick={() => router.push("/write")}
      >
        <EditIcon />
      </Fab>
    </Wrapper>
  );
};

export default DiaryList;

const Wrapper = styled("div")`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

const Card = styled(Box)`
  width: 100%;
  height: 15rem;
  padding: 1rem 0;
  display: flex;

  cursor: pointer;
  transition: all 0.3 ease;
  border-bottom: 1px solid #e2e2e2;
`;

const Left = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

const Top = styled(Box)`
  display: flex;
  align-items: center;
  color: #747474;

  .avatar {
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 0.3rem;
  }

  .name {
    font-size: 0.9rem;
  }
`;

const Middle = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  .title {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .content {
    max-height: 3rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: #747474;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const Bottom = styled(Box)`
  display: flex;
  margin-top: auto;

  .date {
    font-size: 0.8rem;
    font-weight: 400;
    color: #747474;
  }

  .tag {
    margin-left: 0.5rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: #747474;
  }
`;

const Right = styled(Box)`
  width: 12rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    object-position: center;
  }
`;
