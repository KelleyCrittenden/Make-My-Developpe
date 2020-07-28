import React from "react";
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews";
import "./Developpe.css";

const Developpe = () => {
  return (
    <div>
      <h2>
        <NavBar />
        <ApplicationViews />
      </h2>
      </div>

  );
};

export default Developpe;