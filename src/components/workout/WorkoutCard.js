import React from "react";
import "./Workout.css"
import WorkoutManager from "../../modules/WorkoutManager";

const WorkoutCard = props => {

    const handleFieldChange = () => {
        WorkoutManager.completedWorkout(props.workout)
        .then(() => props.getWorkouts())
}
    return (
    <>
        {props.workout.completed ? null : 

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

                    <button 
                        type="button"
                        onClick={() => props.history.push(`/Workouts/${props.workout.id}/Edit`)}>
                        Edit
                    </button>

                    <button 
                        type="button" 
                        onClick={() => props.deleteWorkout(props.workout.id)}>Delete
                    </button>

                    <button 
                        type="button"
                        onClick={() => { props.history.push(`/Workouts/${props.workout.id}/Details`) }}>
                        Details
                    </button>

             </div>
            </div>
        }
    </>

  );
};

export default WorkoutCard;
