import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext =createContext();
export  function AuthContextProvider({children}){
const [isAuth, setIsAuth] =useState(false);
// const [toggle, setToggle] =useState();
const [token, setToken] = React.useState("Login First To Get Token");

const handleLogin =( email, pass)=>{
    // console.log("email", email)
    const payload = { email:email, password:pass};
    console.log("login clikv")
    fetch("https://reqres.in/api/login",{
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        }

    })
    .then((res) => res.json())
    .then((res)=>{
        setIsAuth(true)
        setToken(res.token)
        console.log("tokrn",res.token)
        
    })
    .catch((err) => {
        console.log(err);
        alert("Invalid Email or Pass");
        
      });


}
const handleLogout=()=>{
    console.log("l clikv")
    setIsAuth(false)
    setToken("Login First To Get Token");
}
    return(
        <>
        <AuthContext.Provider value={{isAuth ,handleLogin ,handleLogout,token}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}