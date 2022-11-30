import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { Loadable } from "recoil";

type MyProps = {
  userLoadable: Loadable<User>;
};

const Profile: React.FC<MyProps> = ({ userLoadable }) => {
  return (
    <Wrapper>
      {userLoadable.state === "hasValue" ? <div></div> : <CircularProgress />}
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  padding-top: 5rem;
  flex: 1;
`;
