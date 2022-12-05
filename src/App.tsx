import LoginModalContainer from "@containers/LoginModalContainer";
import { Routes } from "@pages/Routes";
import { authState } from "@recoil/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function App() {
  const [authChecked, setAuthChecked] = useState(false);
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

    setAuthChecked(true);
  };

  useEffect(() => {
    loadAuth();
  }, []);

  return authChecked ? (
    <>
      <Routes />
      <LoginModalContainer />{" "}
    </>
  ) : null;
}

export default App;
