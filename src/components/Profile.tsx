import styled from "@emotion/styled";
import { Avatar, Box, CircularProgress } from "@mui/material";
import { Loadable } from "recoil";

type MyProps = {
  userLoadable: Loadable<User>;
};

const Profile: React.FC<MyProps> = ({ userLoadable }) => {
  return (
    <Wrapper>
      {userLoadable.state === "hasValue" ? (
        <Box>
          <Avatar
            src={
              process.env.REACT_APP_API_URL! +
              "/images/" +
              userLoadable.contents.profileImage
            }
          />
          <p>{userLoadable.contents.name}</p>
          <p>{userLoadable.contents.email}</p>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;
