import Profile from "@components/Profile";
import { userQuery } from "@recoil/user";
import { useParams } from "react-router";
import { useRecoilValueLoadable } from "recoil";

const ProfileContainer: React.FC = () => {
  const { id } = useParams();
  const userLoadable = useRecoilValueLoadable(userQuery(id!));

  return <Profile userLoadable={userLoadable} />;
};

export default ProfileContainer;
