import React from "react";
import Register from "../auth/Register";
import Login from "../auth/Login";

const Home = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  let userId = "";

  if(hasUser) {
    userId = JSON.parse(sessionStorage.getItem("credentials"));
  }
  return (
    <>
   <Login />
   <Register />
    </>
  )
}


export default Home;