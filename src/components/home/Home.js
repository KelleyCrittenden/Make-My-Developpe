import React from "react";
import Login from "../auth/Login"

const Home = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  let userId = "";

  if(hasUser) {
    userId = JSON.parse(sessionStorage.getItem("credentials"));
  }
  return (
    <>
    <Login hasUser={hasUser} setUser={setUser} {...props} />
    </>
  )
}


export default Home;