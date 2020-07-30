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
          <ApplicationViews
            hasUser={hasUser}
            setUser={setUser} />
          </>
            //taking to login
      )}else {
        return (
          <div>
            <h2>
              <NavBar />
              <ApplicationViews
                hasUser={hasUser}
                setUser={setUser} />
            </h2>
          </div>

      );
  }
};
      
export default Developpe;