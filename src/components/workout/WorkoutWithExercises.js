import React, { useState, useEffect } from 'react'
import WorkoutManager from "../../modules/WorkoutManager"
import BarreExerciseCard from "../barre/BarreExerciseCard"
import BarreExerciseManager from "../../modules/BarreExerciseManager"

const WorkoutWithExercises = props => {
    const [workout, setWorkout] = useState({});
    const [barreExercises, setBarreExercises] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = (id) => {
        setIsLoading(true);
        BarreExerciseManager.delete(id)
        .then(() =>
        props.history.push("/Workouts")
            );
    }; 

    useEffect(() => {
        WorkoutManager.getWithBarreExercises(props.match.params.workoutId)
            .then(APIResult => {
                setWorkout(APIResult);
                setBarreExercises(APIResult.barreExercises);
            });setIsLoading(false);
    },[props.match.params.workoutId]);

    return (
        <>
        <div className="card">

            <h3>Name:<span style={{ color: 'darkslategrey' }}>{workout.name}</span></h3>

            <p>Date: {workout.date}</p>

            <p>Barre Exercise: {workout.barreExerciseId}</p>

            <p>Description: {workout.barreExerciseDescription}</p>

            <p>Center Floor Exercise: {workout.centerFloorExerciseId}</p>

            <p>Description: {workout.centerFloorExerciseDescription}</p>

            <p>Comments: {workout.comment}</p>

                {barreExercises.map(barreExercise =>
                    <BarreExerciseCard
                    key={barreExercise.id}
                    deleteBarreExercise={handleDelete}
                    barreExercise={barreExercise}
                    {...props}
                    />
                )}

        </div>
        </>
    );
}

export default WorkoutWithExercises;