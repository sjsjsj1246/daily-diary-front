import styled from "@emotion/styled";
import { useInternalRouter } from "@pages/routing";
import { Logo } from "assets/svg";
import { useSetRecoilState } from "recoil";
import { openLoginModalState } from "@recoil/ui";
import HomeIcon from "@mui/icons-material/Home";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import CreateIcon from "@mui/icons-material/Create";
import { Avatar, IconButton } from "@mui/material";
import { useLocation } from "react-router";

type HeaderProps = {
  currentUser: User | null;
};

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  const router = useInternalRouter();
  const pathname = useLocation().pathname;
  const setOpenLoginModal = useSetRecoilState(openLoginModalState);

  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: HomeIcon,
      onClick: () => {
        router.push("/");
      },
    },
    {
      title: "Bookmark",
      path: "/bookmark",
      icon: BookmarksOutlinedIcon,
      onClick: () => {
        if (currentUser) {
          router.push(`/bookmark`);
        } else {
          setOpenLoginModal(true);
        }
      },
    },
    {
      title: "write",
      path: "/write",
      icon: CreateIcon,
      onClick: () => {
        if (currentUser) {
          router.push("/write");
        } else {
          setOpenLoginModal(true);
        }
      },
    },
  ];

  return (
    <HeaderList>
      <ListItem
        css={{
          paddingBottom: "2rem",
          marginBottom: "2rem",
          borderBottom: "1px solid #757575",
        }}
      >
        <Logo className="logo" onClick={() => router.push("/")} />
      </ListItem>
      {menuItems.map((item) => (
        <ListItem
          key={item.title}
          className={`${item.path === pathname && "active"} menu`}
        >
          <IconButton onClick={item.onClick} size="large">
            <item.icon className="icon" fontSize="inherit" />
          </IconButton>
        </ListItem>
      ))}
      <ListItem css={{ marginTop: "auto" }}>
        {currentUser ? (
          <Avatar
            sx={{ cursor: "pointer" }}
            onClick={() => router.push(`/profile/${currentUser.id}`)}
          />
        ) : (
          <ListItem onClick={() => setOpenLoginModal(true)}>로그인</ListItem>
        )}
      </ListItem>
    </HeaderList>
  );
};

export default Header;

const HeaderList = styled.div`
  width: 5rem;
  height: 100%;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
  border-right: 1px solid #eaeaea;
  padding: 2rem 1rem;

  .logo {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }
`;

const ListItem = styled.div`
  box-sizing: content-box;
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;

  &.menu {
    & + & {
      margin-top: 1rem;
    }
  }

  &.active svg {
    fill: #000000;
  }
`;
