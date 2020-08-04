import React from "react";
import NavBar from "../nav/NavBar"

const Home = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  let userId = "";

  if(hasUser) {
    userId = JSON.parse(sessionStorage.getItem("credentials"));
  }
  return (
    <>
    <NavBar hasUser={hasUser} setUser={setUser} {...props} />
    </>
  )
}


export default Home;