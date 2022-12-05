import Profile from "@components/Profile";
import { useInternalRouter } from "@pages/routing";
import { authState } from "@recoil/auth";
import { useResetAllDiary } from "@recoil/diary";
import { userQuery } from "@recoil/user";
import axios from "axios";
import { useParams } from "react-router";
import { useRecoilValueLoadable, useResetRecoilState } from "recoil";

const ProfileContainer: React.FC = () => {
  const { id } = useParams();
  const userLoadable = useRecoilValueLoadable(userQuery(id!));
  const router = useInternalRouter();
  const resetAllDiary = useResetAllDiary();
  const resetAuth = useResetRecoilState(authState);

  const onLogout = () => {
    localStorage.removeItem("auth");
    axios.defaults.headers.common["Authorization"] = "";
    resetAllDiary();
    resetAuth();
    router.push("/");
  };

  return <Profile userLoadable={userLoadable} onLogout={onLogout} />;
};

export default ProfileContainer;
