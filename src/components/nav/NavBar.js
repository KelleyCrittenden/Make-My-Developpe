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

      <h1 className="site-title">
     
        <img className="logoImage" src="../public/Images/Logo.png" alt="Logo" height='50px' width='50px'/>

  
      </h1>

 
      {props.hasUser?
      <nav>
        <ul className="container">


          <li>
          <Link className="nav-link" to="/PhotoUploads">
              My Progress
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
              Glossary
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="">
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
