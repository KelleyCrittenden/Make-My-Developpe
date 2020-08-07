import React, { useState, useEffect } from 'react';
import WorkoutManager from '../../modules/WorkoutManager';
import './WorkoutDetail.css'

const WorkoutDetail = props => {
  const [workout, setWorkout] = useState({ 
      name: "", 
      date: "" ,          
      barreExerciseId: "",
      barreExerciseDescription: "",
      centerFloorExerciseId: "",
      centerFloorExerciseDescription: "",
      comment: "",
      completed: false});

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    WorkoutManager.get(props.workoutId)
      .then(workout => {
        setWorkout({
          name: workout.name,
          date: workout.date,
          barreExerciseId: workout.barreExerciseId,
          barreExerciseDescription: workout.barreExerciseDescription,
          centerFloorExerciseId: workout.centerFloorExerciseId,
          centerFloorExerciseDescription: workout.centerFloorExerciseDescription,
          comment: workout.comment,
          completed: false

        });
        setIsLoading(false);
      });
  }, [props.workoutId]);

  const handleDelete = () => {
    setIsLoading(true);
      WorkoutManager.delete(props.workoutId).then(() =>
        props.history.push("/Workouts")
    );
  };         

  return (
    <div className="card">
      <div className="card-content">


        <h3>Name: 
                <span style={{ color: 'darkslategrey' }}>{workout.name}</span>
        </h3>

        <p>
            Date: {workout.date} 
        </p>

        <p>
            Barre Exercise: {workout.barreExerciseId}
        </p>

        <p>
            Description: {workout.barreExerciseDescription}
        </p>

        <p>
            Center Floor Exercise: {workout.centerFloorExerciseId}
        </p>

        <p>
            Description: {workout.centerFloorExerciseDescription}
        </p>

        <p>Comments: {workout.comment}</p>

        <button 
                        type="button"
                        onClick={() => { props.history.push(`/Workouts/${props.workout.id}/Details`) }}>
                        Details
                    </button>

                    <button 
                        type="button"
                        onClick={() => props.history.push(`/Workouts/${props.workout.id}/Edit`)}>
                        Edit
                    </button>

                    <button 
                        type="button" 
                        onClick={() => props.deleteWorkout(props.workout.id)}>Delete
                    </button>

      </div>
    </div>
  );
}

export default WorkoutDetail;