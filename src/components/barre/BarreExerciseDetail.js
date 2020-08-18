import React, { useState, useEffect } from 'react';
import BarreExerciseManager from '../../modules/BarreExerciseManager';
import './BarreExerciseDetail.css'

const BarreExerciseDetail = props => {
  const [barreExercise, setBarreExercise] = useState({ 
      name: "", 
      typeOfMovement: "", 
      description: "",
      image: "" 
    });

  useEffect(() => {

    BarreExerciseManager.get(props.barreExerciseId)
      .then(barreExercise => {
        setBarreExercise({
          name: barreExercise.name,
          typeOfMovement: barreExercise.typeOfMovement,
          description: barreExercise.description,
          image: barreExercise.image
        });
      });
  }, [props.barreExerciseId]);

  return (
    <div className="card">
      <div className="card-content">

      <picture>
          <img className="barreExerciseImage" src={barreExercise.image} alt="Barre Exercise" />
        </picture>

        <h3><span style={{ color: 'darkslategrey' }}>{barreExercise.name}</span></h3>

        <p>{barreExercise.typeOfMovement}</p>

        <p>{barreExercise.description}</p>

      </div>
    </div>
  );
}

export default BarreExerciseDetail;