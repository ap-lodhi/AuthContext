import React from "react";
import {useContext} from "react"
import { AuthContext} from "../Context/AuthContext";

const Navbar = () => {
  const { isAuth, handleLogout, handleLogin } = useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  return (
    <>
      <div>
        {isAuth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <div>
            <input
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                
              }}
            />
            <br />
            <input
              placeholder="password"
              type="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <br />
            <button
              onClick={() => {
                handleLogin(email, pass);
                setEmail("");
                setPass("");
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export { Navbar };
