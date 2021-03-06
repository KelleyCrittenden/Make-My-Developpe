import React, { useEffect, useState } from 'react';
import WorkoutCompletedCard from "./WorkoutCompletedCard"
import WorkoutManager from '../../modules/WorkoutManager';

const WorkoutCompletedList = (props) => {

    const [workouts, setWorkouts] = useState ([]);

    const getWorkouts = () => {
      return WorkoutManager.getWorkoutsByUser(parseInt(sessionStorage.getItem("credentials")))
      .then(workoutsFromAPI => {
      setWorkouts(workoutsFromAPI)
    });
  };


  const deleteWorkout = id => {
    WorkoutManager.delete(id)
      .then(() => WorkoutManager.getAll().then(setWorkouts));
  };



        //tells react to call the getWorkouts function, in the API manager, the empty array argument tells react to call the function on the first render of the component, react re-render all the time so this saves the data after the first render so we can use it when we need it.

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
      <>
      <section className="section-content">
        <button type="button"
                className="button"
                onClick={() => {props.history.push("/Workouts/New")}}>
                Create New Workout
        </button>
    </section>
    <div className="container-cards">
      {workouts.map(workout => workout.completed &&
        <WorkoutCompletedCard 
                //unique key, react keeping track of re-rendering only necessary things
            key={workout.id}
            workout={workout}
            deleteWorkout={deleteWorkout}
            getWorkouts={getWorkouts}
            {...props}
        />)}

    </div>
    </>
  );
};

export default WorkoutCompletedList