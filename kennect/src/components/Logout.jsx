import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const styles={
    backgroudColor:'black',
    border:'2px solid white',
    color:'white',
    marginRight:'20px'
  }
  return (
    <Button style={styles} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;