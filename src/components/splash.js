import React from "react";
import { Link } from "react-router-dom";



const Splash = () => {

  return (
    <>
      <div class="row">
    <div class="col s1">
      <div class="card grey darken-1">
        <div class="card-content white-text">
          <span class="card-title"></span>
          <Link className="nav-link" to="/Users">
              Profile
          </Link>
        </div>
      </div>
    </div>

    <div className="col s1 m6">
      <div className="card grey darken-1">
        <div className="card-content white-text">
          <span className="card-title"></span>
          <Link className="nav-link" to="/Workouts">
              Workouts
            </Link>
        </div>
      </div>
    </div>

    <div class="col s1 m6">
      <div class="card grey darken-1">
        <div class="card-content white-text">
          <span class="card-title"></span>
          <Link className="nav-link" to="/CompletedWorkouts">
              Completed Workouts
            </Link>
        </div>
      </div>
    </div>

    <div class="col s1 m6">
      <div class="card grey darken-1">
        <div class="card-content white-text">
          <span class="card-title"></span>
          <Link className="nav-link" to="/BarreExercises">
              Barre Exercises
            </Link>
        </div>
      </div>
    </div>

    <div class="col s1 m6">
      <div class="card grey darken-1">
        <div class="card-content white-text">
          <span class="card-title"></span>
          <Link className="nav-link" to="CenterFloorExercises">
              Center Floor Exercises
            </Link>
        </div>
      </div>
    </div>

  </div>

</>
  )
}


export default Splash;