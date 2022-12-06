import { css } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import { Viewer } from "@toast-ui/react-editor";
import { dateStringToLocalString } from "@utils/date";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarkIcon from "@mui/icons-material/Bookmark";

type DiaryProps = {
  diary: any;
  currentUser: User | null;
  onBookMark: () => Promise<void>;
  onDeleteDiary: () => Promise<void>;
};

const Diary: React.FC<DiaryProps> = ({
  diary,
  currentUser,
  onBookMark,
  onDeleteDiary,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteDiary = async () => {
    await onDeleteDiary();
    handleClose;
  };

  return (
    <Background
      src={
        diary.image
          ? process.env.REACT_APP_API_URL! + "/images/" + diary.image
          : "https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      }
    >
      <div className="imageWrapper"></div>
      <Wrapper>
        <Header>
          <Avatar
            className="avatar"
            src={
              process.env.REACT_APP_API_URL + "/images/" + diary.author.image
            }
          />
          <Box>
            <p className="name">{diary.author.name}</p>
            <p className="date">{dateStringToLocalString(diary.createdAt)}</p>
          </Box>
          <IconButton className="bookmark" onClick={onBookMark}>
            {currentUser ? (
              diary.bookmarkUser.includes(currentUser?.id) ? (
                <BookmarkIcon />
              ) : (
                <BookmarkAddOutlinedIcon />
              )
            ) : null}
          </IconButton>
          {currentUser?.id === diary.author.id && (
            <IconButton onClick={handleClick}>
              <MenuIcon />
            </IconButton>
          )}

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleDeleteDiary}>삭제</MenuItem>
          </Menu>
        </Header>
        <Title>{diary.title}</Title>
        {diary.tags.length > 0 && (
          <Box className="tagList">
            {diary.tags.map((tag: string) => (
              <p className="tag" key={tag}>
                #{tag}
              </p>
            ))}
          </Box>
        )}
        <Content>
          <Viewer initialValue={diary.content} />
        </Content>
      </Wrapper>
    </Background>
  );
};

export default Diary;

const Background = styled("div")<{ src: string }>(
  ({ src }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .imageWrapper {
      width: 100%;
      height: 20vh;

      background-image: url(${src});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  `
);

const Wrapper = styled("div")`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  .tagList {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 1rem;
    gap: 0.5em;
  }

  .tag {
    color: #999;
  }
`;

const Header = styled("div")`
  display: flex;

  .avatar {
    margin-right: 1rem;
  }

  .name {
    font-size: 1rem;
    color: #999;
  }

  .date {
    font-size: 0.8rem;
    color: #999;
  }

  .bookmark {
    margin-left: auto;
  }

  .menu {
  }
`;

const Title = styled("div")`
  margin: 2rem 0 0.5rem 0;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Content = styled("div")``;
