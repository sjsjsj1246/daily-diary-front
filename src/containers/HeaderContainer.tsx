import Header from "@components/Header";
import { authState } from "@recoil/auth";
import { useRecoilValue } from "recoil";

const HeaderContainer: React.FC = () => {
  const { currentUser } = useRecoilValue(authState);

  return <Header currentUser={currentUser} />;
};

export default HeaderContainer;
