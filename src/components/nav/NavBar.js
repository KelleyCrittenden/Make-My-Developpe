import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {

  const handleLogout = () => {
    sessionStorage.clear();
  }
  
  return (
    <header>

      <h1 className="site-title">
        Make My Developpe
        <br />
        <small></small>
      </h1>

  {props.hasUser?

      <nav>
        <ul className="container">


          <li>
          <Link className="nav-link" to="/Users">
              Profile
          </Link>
          </li>

          <li>
            <Link className="nav-link" to="/Workouts">
              Workouts
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/CompletedWorkouts">
              Completed Workouts
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/BarreExercises">
              Barre Exercises
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="CenterFloorExercises">
              Center Floor Exercises
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/">
              <button 
                className="logoutButton"
                onClick={handleLogout}>
                Logout
              </button>
            </Link>
          </li>
        </ul>

        
      </nav>
  : null}

    </header>
  );
};

export default NavBar;
