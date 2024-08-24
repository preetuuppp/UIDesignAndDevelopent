import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

const LoginComponent = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, []);

  return <></>;
};

export default LoginComponent;
