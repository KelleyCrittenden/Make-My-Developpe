import React from "react";
import { Link } from "react-router-dom";
import "./Workout.css"
import WorkoutManager from "../../modules/WorkoutManager";

const WorkoutCard = props => {

    const handleFieldChange = () =>
        WorkoutManager.completedWorkout(props.task)
        .then(() => props.getWorkouts())


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

        <label>Completed</label>

            <input
                type="checkbox"
                required
                className="forms-control"
                id="workouts"
                checked={props.workout.completed}
                onChange={handleFieldChange}
            />    

                {/* Hyperlink */}
        <Link to={`/Workouts/${props.workout.id}`}>
            <button>Details</button>
        </Link>

        <button 
            type="button" 
            onClick={() => props.deleteWorkout(props.workout.id)}>Delete
        </button>

      </div>
    </div>
  );
};

export default WorkoutCard;
