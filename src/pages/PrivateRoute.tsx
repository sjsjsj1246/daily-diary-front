import { authState } from "@recoil/auth";
import React, { useEffect } from "react";
import { redirect, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

const PrivateRoute: React.FC<{ children: React.ReactElement[] }> = ({
  children,
}) => {
  const { currentUser } = useRecoilValue(authState);

  useEffect(() => {
    if (!currentUser) redirect("/");
  }, [currentUser]);

  return <Route>{currentUser && children}</Route>;
};

export default PrivateRoute;
