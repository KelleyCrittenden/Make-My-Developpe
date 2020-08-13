import React, { useState, useEffect } from 'react'
import WorkoutManager from "../../modules/WorkoutManager"
import BarreExerciseCard from "../barre/BarreExerciseCard"
import CenterFloorExerciseCard from "../centerFloor/CenterFloorExerciseCard"

const WorkoutWithExercises = props => {
    const [workout, setWorkout] = useState({});
    //setting default barre exercise 
    const [barreExercise, setBarreExercise] = useState({name:"", typeOfMovement: "", description:"", image: ""});
    const [centerFloorExercise, setCenterFloorExercise] = useState({name:"", typeOfMovement: "", description:"", image: ""});
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = () => {
        setIsLoading(true);
          WorkoutManager.delete(props.workoutId).then(() =>
            props.history.push("/Workouts")
        );
      };  

    useEffect(() => {
        WorkoutManager.getWithBarreExercises(props.match.params.workoutId)
            .then(APIResult => {
                setWorkout(APIResult);
                setBarreExercise(APIResult.barreExercise);
                setIsLoading(false);
            });
            
    },[props.match.params.workoutId]);

    useEffect(() => {
        WorkoutManager.getWithCenterFloorExercises(props.match.params.workoutId)
            .then(APIResult => {
                setWorkout(APIResult);
                setCenterFloorExercise(APIResult.centerFloorExercise);
                setIsLoading(false);
            });
            
    },[props.match.params.workoutId]);

    return (
        <>
        
        <div className="card">

            <h3><span style={{ color: 'darkslategrey' }}>{workout.name}</span></h3>

            <p>Date: {workout.date}</p>

            <p>Barre Exercise: {barreExercise.name}</p>

            <p>Description: {workout.barreExerciseDescription}</p>

            <p>Center Floor Exercise: {centerFloorExercise.name}</p>

            <p>Description: {workout.centerFloorExerciseDescription}</p>

            <p>Comments: {workout.comment}</p>

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
           

           
            <div className="container-cards">
                    <BarreExerciseCard
                    key={workout.barreExerciseId}
                    barreExercise={barreExercise}
                    {...props}
                    />
      
                    <CenterFloorExerciseCard
                    key={workout.centerFloorExerciseId}
                    centerFloorExercise={centerFloorExercise}
                    {...props}
                    />
                    </div>
                    
        
        

    

        </>
    );
}

export default WorkoutWithExercises;