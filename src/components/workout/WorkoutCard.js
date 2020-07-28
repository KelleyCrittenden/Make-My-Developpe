import React from "react";
import { Link } from "react-router-dom";
import "./Workout.css"

const WorkoutCard = props => {
  return (
    <div className="card">
      <div className="card-content">

        <picture>
          <img className="workoutImage" src={require("./pointe-shoes.jpeg")} alt="Pointe Shoes" />
        </picture>

        <h3>
          Name: <span className="card-workoutName">
              {props.workout.name}
          </span>
        </h3>

        <button 
            type="button" 
            onClick={() => props.deleteWorkout(props.workout.id)}>Delete
        </button>

                {/* Hyperlink */}
        <Link to={`/Workouts/${props.workout.id}`}>
            <button>Details</button>
        </Link>

      </div>
    </div>
  );
};

export default WorkoutCard;
