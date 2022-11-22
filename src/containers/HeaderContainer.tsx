import Header from "@components/Header";
import { useInternalRouter } from "@pages/routing";
import { authState } from "@recoil/auth";
import { openLoginModalState } from "@recoil/ui";
import { useRecoilValue, useSetRecoilState } from "recoil";

const HeaderContainer: React.FC = () => {
  const { currentUser } = useRecoilValue(authState);
  const setOpenLoginModal = useSetRecoilState(openLoginModalState);
  const router = useInternalRouter();

  const onWrite = () => {
    if (currentUser) {
      router.push("/write");
    } else {
      setOpenLoginModal(true);
    }
  };

  return <Header currentUser={currentUser} onWrite={onWrite} />;
};

export default HeaderContainer;
