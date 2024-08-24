import * as React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0WithHistory = (props) => {
  const { children } = props;

  return (
    <Auth0Provider
      domain={import.meta.env.REACT_APP_DOMAIN}
      clientId={import.meta.env.REACT_APP_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0WithHistory;
