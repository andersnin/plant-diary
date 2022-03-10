import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const GetUserInfo = () => {
  const { user } = useAuth0();
  console.log(user);
  return;
};

export default GetUserInfo;
