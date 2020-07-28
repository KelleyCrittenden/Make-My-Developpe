import React, { useState } from 'react';
import WorkoutManager from "../../modules/WorkoutManager"
import "./WorkoutForm.css"


const WorkoutForm = props => {
    const [workout, setWorkout] = useState({ 
        name: "",
        date: "",
        barreExerciseId: "",
        barreExerciseDescription: "",
        centerFloorExerciseId: "",
        centerFloorExerciseDescription: "",
        comment: "",
        completed: false
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = e => {
        const stateToChange = { ...workout };
        stateToChange[e.target.id] = e.target.value;
        setWorkout(stateToChange)
    };

    const constructNewWorkout = e => {
        e.preventDefault();
        if (
            workout.name === "" || 
            workout.date === "" || 
            workout.barreExerciseId === "" || 
            workout.barreExerciseDescription === "" || 
            workout.centerFloorExerciseId === "" || workout.centerFloorExerciseDescription === "" || 
            workout.comment === "") {
            window.alert("Please fill out entire form");
        } else {
            setIsLoading(true);
            WorkoutManager.post(workout)
            .then(() => props.history.push("./Workouts"))
        }
    }
    return (
        <>
          <form>
            <fieldset>

              <div className="formgrid">

              <label htmlFor="name">Name: </label>

                <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="name"
                    placeholder="Workout name"
                />


            <label htmlFor="date">Date: </label>

                <input
                    type="date"
                    required
                    onChange={handleFieldChange}
                    id="date"
                    placeholder="Date"
                />


            <label htmlFor="barreExerciseId">Barre Exercise : </label>

                <input
                    type="dropDown"
                    required
                    onChange={handleFieldChange}
                    id="barreExerciseId"
                    placeholder="choose one"
                />

            <label htmlFor="barreExerciseDescription">Barre Exercise Comments: </label>

                <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="barreExerciseDescription"
                    placeholder="description of Barre Exercise"
                />


            <label htmlFor="centerFloorExerciseId">Center Floor Exercise : </label>

                <input
                    type="dropDown"
                    required
                    onChange={handleFieldChange}
                    id="centerFloorExerciseId"
                    placeholder="choose one"
                />

            <label htmlFor="centerFloorExerciseDescription">Center Floor Exercise Comments: </label>

                <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="centerFloorExerciseDescription"
                    placeholder="description of Center Floor Exercise"
                />


            <label htmlFor="comment">Workout Comments: </label>

                <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="comment"
                    placeholder="comment"
                />

             </div>


              <div className="alignRight">

                <button
                  type="button"
                  disabled={isLoading}
                  onClick={constructNewWorkout}
                >Submit</button>

              </div>

            </fieldset>
          </form>
        </>
      );
    };

export default WorkoutForm;
