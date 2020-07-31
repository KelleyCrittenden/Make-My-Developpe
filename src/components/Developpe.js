import React, { useState } from "react";
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews";
import "./Developpe.css";


const Developpe = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") != null;
  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = (userId) => {
    sessionStorage.setItem("credentials", JSON.stringify(userId));
    setHasUser(isAuthenticated());
  }

    if (isAuthenticated()) {
      return (
        <>
          <NavBar />
          <ApplicationViews
            hasUser={hasUser}
            setUser={setUser} />
          </>
      
      )}else {
        return (
          <div>
            <h2>
              
              <login />
            </h2>
          </div>

      );
  }
};
      
export default Developpe;