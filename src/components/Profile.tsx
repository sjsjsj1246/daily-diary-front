import { Avatar, Box, Button, CircularProgress, styled } from "@mui/material";
import { Loadable } from "recoil";

type MyProps = {
  userLoadable: Loadable<User>;
  onLogout: () => void;
};

const Profile: React.FC<MyProps> = ({ userLoadable, onLogout }) => {
  return (
    <Wrapper>
      {userLoadable.state === "hasValue" ? (
        <>
          <ProfileBox>
            <Avatar
              className="avatar"
              src={
                process.env.REACT_APP_API_URL! +
                "/images/" +
                userLoadable.contents.profileImage
              }
            />
            <p className="name">{userLoadable.contents.name}</p>
            <p className="email">{userLoadable.contents.email}</p>
          </ProfileBox>
          <Button onClick={onLogout} className="logout" variant="contained">
            로그아웃
          </Button>
        </>
      ) : (
        <CircularProgress />
      )}
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled(Box)`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  .logout {
    margin-top: 4rem;
    color: white;
    background-color: #444444;
    &:hover {
      background-color: #636363;
    }
  }
`;

const ProfileBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  .avatar {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    object-position: center;
  }

  .name {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #202020;
  }

  .email {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #666666;
  }
`;
