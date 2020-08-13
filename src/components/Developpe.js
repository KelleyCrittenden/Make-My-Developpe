import React, { useState } from "react";
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews";
import "./Developpe.css";
import Home from "./home/Home";
import Login from "./auth/Login"
import Register from "./auth/Register"
import 'semantic-ui-css/semantic.min.css'


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
    setHasUser(isAuthenticated());

}

    // if (isAuthenticated()) {
      return (
        <>
          <NavBar 
            hasUser={hasUser} 
            setUser={setUser} {...props}
            clearUser={clearUser} />

          <ApplicationViews
            hasUser={hasUser}
            setUser={setUser} />


          </>

          
      );

};
      
export default Developpe;