import LoginModalContainer from "@containers/LoginModalContainer";
import { Routes } from "@pages/Routes";
import { authState } from "@recoil/auth";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

function App() {
  const [auth, setAuth] = useRecoilState(authState);

  const loadAuth = async () => {
    const savedAuth = localStorage.getItem("auth");

    if (savedAuth) {
      try {
        const auth = JSON.parse(savedAuth);
        const response = await axios.get("/members", {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        });

        if (response.status === 200) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${auth.accessToken}`;
          setAuth(auth);
        } else localStorage.removeItem("auth");
      } catch (err) {
        localStorage.removeItem("auth");
      }
    }
  };

  useEffect(() => {
    loadAuth();
  }, []);

  return (
    <>
      <Routes />
      <LoginModalContainer />
    </>
  );
}

export default App;
