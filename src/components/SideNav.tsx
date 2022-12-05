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

const SideNav: React.FC<HeaderProps> = ({ currentUser }) => {
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
    <Wrapper>
      <Item
        css={{
          paddingBottom: "2rem",
          marginBottom: "2rem",
          borderBottom: "1px solid #757575",
        }}
      >
        <Logo className="logo" onClick={() => router.push("/")} />
      </Item>
      {menuItems.map((item) => (
        <Item
          key={item.title}
          className={`${item.path === pathname && "active"} menu`}
        >
          <IconButton onClick={item.onClick} size="large">
            <item.icon className="icon" fontSize="inherit" />
          </IconButton>
        </Item>
      ))}
      <Item css={{ marginTop: "auto" }}>
        {currentUser ? (
          <Avatar
            src={currentUser.image || undefined}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push(`/profile/${currentUser.id}`)}
          />
        ) : (
          <Item onClick={() => setOpenLoginModal(true)}>로그인</Item>
        )}
      </Item>
    </Wrapper>
  );
};

export default SideNav;

const Wrapper = styled.div`
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
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

const Item = styled.div`
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
