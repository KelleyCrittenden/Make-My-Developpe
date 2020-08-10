import React, { useState, useEffect } from 'react'
import WorkoutManager from "../../modules/WorkoutManager"
import BarreExerciseCard from "../barre/BarreExerciseCard"
import CenterFloorExerciseCard from "../centerFloor/CenterFloorExerciseCard"

const WorkoutWithExercises = props => {
    const [workout, setWorkout] = useState({});
    //setting default barre exercise 
    const [barreExercise, setBarreExercise] = useState({name:"", typeOfMovement: "", description:""});
    const [centerFloorExercise, setCenterFloorExercise] = useState({name:"", typeOfMovement: "", description:""});
    const [isLoading, setIsLoading] = useState(true);

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

            <p>Barre Exercise:{workout.barreExerciseId}</p>

            <p>Description: {workout.barreExerciseDescription}</p>

            <p>Center Floor Exercise: {workout.centerFloorExerciseId}</p>

            <p>Description: {workout.centerFloorExerciseDescription}</p>

            <p>Comments: {workout.comment}</p>

            <div>

                    <BarreExerciseCard
                    key={workout.barreExerciseId}
                    barreExercise={barreExercise}
                    {...props}
                    />

                    <CenterFloorExerciseCard
                    key={workout.centerFLoorExerciseId}
                    centerFloorExercise={centerFloorExercise}
                    {...props}
                    />
        
            </div>

        </div>

        </>
    );
}

export default WorkoutWithExercises;