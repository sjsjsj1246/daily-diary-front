import SideNav from "@components/SideNav";
import { authState } from "@recoil/auth";
import { useRecoilValue } from "recoil";

const SideNavContainer: React.FC = () => {
  const { currentUser } = useRecoilValue(authState);

  return <SideNav currentUser={currentUser} />;
};

export default SideNavContainer;
