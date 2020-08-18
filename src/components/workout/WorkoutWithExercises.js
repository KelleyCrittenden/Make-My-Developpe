import React, { useState, useEffect } from 'react'
import WorkoutManager from "../../modules/WorkoutManager"
import BarreExerciseCard from "../barre/BarreExerciseCard"
import CenterFloorExerciseCard from "../centerFloor/CenterFloorExerciseCard"
import "./Workout.css"

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

            <p><span style={{ color: 'darkslategrey' }}>Date: </span><span>{workout.date}</span> </p>

            <p><span style={{ color: 'darkslategrey' }}>Barre Exercise: </span><span>{barreExercise.name}</span> </p>

            <p><span style={{ color: 'darkslategrey' }}>Barre Description: </span><span>{workout.barreExerciseDescription}</span> </p>

            <p><span style={{ color: 'darkslategrey' }}>Center Floor Exercise: </span><span> {centerFloorExercise.name}</span> </p>

            <p><span style={{ color: 'darkslategrey' }}>Center Floor Description: </span><span>{workout.centerFloorExerciseDescription}</span> </p>

            <p><span style={{ color: 'darkslategrey' }}>Comments: </span><span>{workout.comment}</span></p>

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