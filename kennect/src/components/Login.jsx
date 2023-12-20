import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();

  const styles={
    backgroudColor:'black',
    border:'2px solid white',
    color:'white',
  }

  return <Button style={styles} onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;