import React from "react";
import { AuthContext } from "../Context/AuthContext";

const Body = () => {
  const { token } = React.useContext(AuthContext);
  return <h1>{token}</h1>;
};

export { Body };
