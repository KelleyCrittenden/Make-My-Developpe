import React, { useState, useEffect } from 'react';
import WorkoutManager from "../../modules/WorkoutManager"
import BarreExerciseManager from "../../modules/BarreExerciseManager"
import CenterFloorExerciseManager from "../../modules/CenterFloorExerciseManager"
import "./WorkoutForm.css"


const WorkoutForm = props => {
    const [isLoading, setIsLoading] = useState(false);

    const [barreExercises, setBarreExercises] = useState([])

    const [centerFloorExercises, setCenterFloorExercises] = useState([])

    const [workout, setWorkout] = useState({ 
        userId: sessionStorage.credentials,
        name: "",
        date: "",
        barreExerciseId: "",
        barreExerciseDescription: "",
        centerFloorExerciseId: "",
        centerFloorExerciseDescription: "",
        comment: "",
        completed: false
    });

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
            workout.centerFloorExerciseId === "" || 
            workout.centerFloorExerciseDescription === "" || 
            workout.comment === "") {
            window.alert("Please fill out entire form");
        } else {
            setIsLoading(true);
            WorkoutManager.post(workout)
            .then(() => {
              console.log(workout)
              props.history.push("/Workouts")})
        } 
    }

    const getBarreExerciseList = () => {
        BarreExerciseManager.getAll()
        .then(barreExercises => {
          setBarreExercises(barreExercises);
        })
    }
    
    
      const getCenterFloorExerciseList = () => {
        CenterFloorExerciseManager.getAll()
        .then(centerFloorExercises => {
          setCenterFloorExercises(centerFloorExercises);
    
      })
    }
    
    
      useEffect(() => {
        getBarreExerciseList();
        getCenterFloorExerciseList();
    
      },[])
    


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

                    <select
                    className="form-control"
                    id="barreExerciseId"
                    value={workout.barreExerciseId}
                    onChange={handleFieldChange}
                    >
                        {barreExercises.map(barreExercise =>
                        <option
                            key={barreExercise.id}
                            value={barreExercise.id}>
                            {barreExercise.name}

                        </option>
                        )}
                    </select>
                          
           
            <label htmlFor="barreExerciseDescription">Barre Exercise Comments: </label>

                <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="barreExerciseDescription"
                    placeholder="description of Barre Exercise"
                />


            <label htmlFor="centerFloorExerciseId">Center Floor Exercise : </label>

                <select
                    className="form-control"
                    id="centerFloorExerciseId"
                    value={workout.centerFloorExerciseId}
                    onChange={handleFieldChange}
                >
                        {centerFloorExercises.map(centerFloorExercise =>
                        <option
                            key={centerFloorExercise.id}
                            value={centerFloorExercise.id}>
                            {centerFloorExercise.name}

                        </option>
                        )}
            </select>

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
