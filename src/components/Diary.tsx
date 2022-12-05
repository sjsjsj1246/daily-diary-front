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

type DiaryProps = {
  diary: Diary;
  currentUser: User | null;
  onBookMark: () => Promise<void>;
};

const Diary: React.FC<DiaryProps> = ({ diary, currentUser, onBookMark }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <Header>
        <Avatar
          className="avatar"
          src={process.env.REACT_APP_API_URL + "/images/" + diary.author.image}
        />
        <Box>
          <p className="name">{diary.author.name}</p>
          <p className="date">{dateStringToLocalString(diary.createdAt)}</p>
        </Box>
        <IconButton className="bookmark" onClick={onBookMark}>
          <BookmarkAddOutlinedIcon />
        </IconButton>
        {currentUser?.id === diary.author.id && (
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        )}

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>수정</MenuItem>
          <MenuItem onClick={handleClose}>삭제</MenuItem>
        </Menu>
      </Header>
      <Title>{diary.title}</Title>
      <Content>
        <Viewer initialValue={diary.contents} />
      </Content>
    </Wrapper>
  );
};

export default Diary;

const Wrapper = styled("div")`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
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
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const Content = styled("div")``;
