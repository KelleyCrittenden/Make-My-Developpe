import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>

      <h1 className="site-title">
        Make My Developpe
        <br />
        <small></small>
      </h1>

      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li>
          <Link className="nav-link" to="/Users">
              Profile
          </Link>
          </li>

          <li>
            <Link className="nav-link" to="/Workouts">
              Create New Workout
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
        </ul>
      </nav>

    </header>
  );
};

export default NavBar;
