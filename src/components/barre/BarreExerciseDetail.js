import React, { useState, useEffect } from 'react';
import BarreExerciseManager from '../../modules/BarreExerciseManager';
import './BarreExerciseDetail.css'

const BarreExerciseDetail = props => {
  const [barreExercise, setBarreExercise] = useState({ 
      name: "", 
      typeOfMovement: "", 
      description: "" 
    });

  useEffect(() => {

    BarreExerciseManager.get(props.barreExerciseId)
      .then(barreExercise => {
        setBarreExercise({
          name: barreExercise.name,
          typeOfMovement: barreExercise.typeOfMovement,
          description: barreExercise.description
        });
      });
  }, [props.barreExerciseId]);

  return (
    <div className="card">
      <div className="card-content">

        <picture>
          <img src={require('./barre-exercise.jpeg')} alt="Barre Exercise" />
        </picture>

        <h3>Name: <span style={{ color: 'darkslategrey' }}>{barreExercise.name}</span></h3>

        <p>Type Of Movement: {barreExercise.typeOfMovement}</p>

        <p>Description: {barreExercise.description}</p>

      </div>
    </div>
  );
}

export default BarreExerciseDetail;