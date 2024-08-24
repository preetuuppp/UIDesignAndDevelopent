import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogOutComponent = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="btn btn-primary"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogOutComponent;
