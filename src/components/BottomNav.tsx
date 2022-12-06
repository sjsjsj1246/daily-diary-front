import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  styled,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useLocation } from "react-router";
import { useInternalRouter } from "@pages/routing";
import { useSetRecoilState } from "recoil";
import { openLoginModalState } from "@recoil/ui";

type BottomNavProps = {
  currentUser: User | null;
};

const BottomNav: React.FC<BottomNavProps> = ({ currentUser }) => {
  const path = useLocation().pathname;
  const router = useInternalRouter();
  const setOpenLoginModal = useSetRecoilState(openLoginModalState);

  const menuItem = [
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
      title: "profile",
      path: `/profile/${currentUser?.id}`,
      icon: PersonOutlineIcon,
      onClick: () => {
        if (currentUser) {
          router.push(`/profile/${currentUser?.id}`);
        } else {
          setOpenLoginModal(true);
        }
      },
    },
  ];

  return (
    <Wrapper elevation={3}>
      <BottomNavigation
        value={menuItem.findIndex((item) => item.path === path)}
      >
        {menuItem.map((item) => (
          <BottomNavigationAction
            key={item.title}
            icon={<item.icon fontSize="large" />}
            onClick={item.onClick}
          />
        ))}
      </BottomNavigation>
    </Wrapper>
  );
};

export default BottomNav;

const Wrapper = styled(Paper)`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  z-index: 999;

  .Mui-selected {
    color: black !important;
  }
`;
