import React, { useState } from "react";
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews";
import "./Developpe.css";
import Home from "./home/Home";
import Login from "./auth/Login"
import Register from "./auth/Register"


const Developpe = (props) => {
  const isAuthenticated = () => {
      if (sessionStorage.getItem("credentials")!== null) {
        return true;
      } else {
        return false;
      }
  };
  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = (user) => {
    sessionStorage.setItem("credentials", JSON.stringify(user.userId));
    setHasUser(isAuthenticated());
  }

  const clearUser= () => {
    sessionStorage.clear();

}

    // if (isAuthenticated()) {
      return (
        <>
          <NavBar 
            hasUser={hasUser} 
            setUser={setUser} {...props} />

          <ApplicationViews
            hasUser={hasUser}
            setUser={setUser} />


          </>

          
      );

};
      
export default Developpe;