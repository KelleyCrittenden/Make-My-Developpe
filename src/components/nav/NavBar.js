import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {

  const handleLogout = () => {
    props.clearUser();
    props.history.push("")
  }
  
  return (
    <>
    
    <header>
      <div className="site-title">
        <img className="logoImage"
          src= "https://res.cloudinary.com/kelleycrittenden/image/upload/v1597332801/Logo_iiixa1.png"/>
      </div>

      {props.hasUser?
      <nav>
        <ul className="container">

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
          <Link className="nav-link" to="/PhotoUploads">
              My Progress
          </Link>
          </li>

          <li>
            <Link className="nav-link" to="/BarreExercises">
              Glossary
            </Link>
          </li>

          <li>
            <Link className="logoutButtong" to="">
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
    
    </>
  );
};

export default withRouter(NavBar);
