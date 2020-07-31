import React, { useState, useEffect } from 'react'
import WorkoutManager from "../../modules/WorkoutManager"
import BarreExerciseCard from "../barre/BarreExerciseCard"
// import CenterFloorExerciseCard from '../centerFloor/CenterFloorExerciseCard'

const WorkoutWithExercises = props => {
    const [workout, setWorkout] = useState({});
    const [barreExercises, setBarreExercises] = useState([]);
    // const [centerFloorExercises, setCenterFloorExercises] = useState([]);

    useEffect(() => {
        WorkoutManager.getWithBarreExercises(props.match.params.workoutId)
            .then(APIResult => {
                setWorkout(APIResult);
                setBarreExercises(APIResult.barreExercises);
                // setCenterFloorExercises(APIResult.centerFloorExercises);
            });
    }, [props.match.params.workoutId]
    );



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

            <div>

                {barreExercises.map(barreExercise =>
                    <BarreExerciseCard
                    key={barreExercise.id}
                    barreExercise={barreExercise}
                    // getBarreExercise={getBarreExercise}
                    {...props}
                    />
                )}

                {/* {centerFloorExercises.map(centerFloorExercise =>
                    <CenterFloorExerciseCard
                    key={centerFloorExercise.id}
                    centerFloorExercise={centerFloorExercise}
                    //getCenterFloorExercise={getCenterFloorExercise}
                    {...props}
                    />
                )} */}
            </div>

        </div>
        </>
    );
}

export default WorkoutWithExercises;