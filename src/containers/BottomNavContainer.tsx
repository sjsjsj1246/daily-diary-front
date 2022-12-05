import BottomNav from "@components/BottomNav";
import { authState } from "@recoil/auth";
import { useRecoilValue } from "recoil";

export default function BottomNavContainer() {
  const { currentUser } = useRecoilValue(authState);

  return <BottomNav currentUser={currentUser} />;
}
