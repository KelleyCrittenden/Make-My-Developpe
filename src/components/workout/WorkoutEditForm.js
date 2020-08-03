import React, { useState, useEffect } from "react"
import WorkoutManager from "../../modules/WorkoutManager"
import "./WorkoutForm.css"
import BarreExerciseManager from "../../modules/BarreExerciseManager";
import CenterFloorExerciseManager from "../../modules/CenterFloorExerciseManager";


const WorkoutEditForm = props => {
  const [isLoading, setIsLoading] = useState(false);

  const [barreExercises, setBarreExercises] = useState([])

  const [centerFloorExercises, setCenterFloorExercises] = useState([]) 

  const [workout, setWorkout] = useState({
    name: "",
    date: "",
    barreExerciseId: "",
    barreExerciseDescription: "",
    centerFloorExerciseId: "",
    centerFloorExerciseDescription: "",
    comment: "",
  });


  const handleFieldChange = evt => {
    const stateToChange = { ...workout };
    stateToChange[evt.target.id] = evt.target.value;
    setWorkout(stateToChange);
  };

  const updateExistingWorkout = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedWorkout = {
      id: props.match.params.workoutId,
      name: workout.name,
      date: workout.date,
      barreExerciseId: parseInt(workout.barreExerciseId),
      barreExerciseDescription: workout.barreExerciseDescription,
      centerFloorExerciseId: parseInt(workout.centerFloorExerciseId),
      centerFloorExerciseDescription: workout.centerFloorExerciseDescription,
      comment: workout.comment,
      completed: false

    };

    WorkoutManager.update(editedWorkout)
      .then(() => props.history.push("/Workouts"))
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
    WorkoutManager.get(props.match.params.workoutId)
    .then(workout => {
      getBarreExerciseList()
      getCenterFloorExerciseList()
      setWorkout(workout);
      setIsLoading(false);
      })
    },[props.match.params.workoutId]
  );

//   useEffect(() => {
//     WorkoutManager.get(props.match.params.workoutId)
//     .then(workout => {
//       BarreExerciseManager.getAll()
//         .then(barreExercises => {
//           setBarreExercises(barreExercises);
//           setWorkout(workout);
//           setIsLoading(false);
//         })
//     });
// }, [props.match.params.workoutId]
// );


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
              value={workout.name}
            />


            <label htmlFor="date">Date: </label>

            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="date"
              value={workout.date}
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
                value={workout.barreExerciseDescription}
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
                value={workout.centerFloorExerciseDescription}
              />


              <label htmlFor="comment">Workout Comments: </label>

              <input
                type="text"
                required
                onChange={handleFieldChange}
                id="comment"
                value={workout.comment}
              />

            </div>

            <div className="alignRight">
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingWorkout}
                className="btn btn-primary"
              >Submit</button>

            </div>
        </fieldset>
      </form>
    </>
  );
}
    
export default WorkoutEditForm