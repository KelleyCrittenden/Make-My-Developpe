import React, { useState, useEffect } from 'react';
import CenterFloorExerciseManager from '../../modules/CenterFloorExerciseManager';
import './CenterFloorExerciseDetail.css'

const CenterFloorExerciseDetail = props => {
  const [centerFloorExercise, setCenterFloorExercise] = useState({ 
      name: "", 
      typeOfMovement: "", 
      description: "",
      image: "" 
    });

  useEffect(() => {

    CenterFloorExerciseManager.get(props.centerFloorExerciseId)
      .then(centerFloorExercise => {
        setCenterFloorExercise({
          name: centerFloorExercise.name,
          typeOfMovement: centerFloorExercise.typeOfMovement,
          description: centerFloorExercise.description,
          image: centerFloorExercise.image
        });
      });
  }, [props.centerFloorExerciseId]);

  return (
    <div className="card">
      <div className="card-content">

      <picture>
          <img className="centerFloorExerciseImage" src={centerFloorExercise.image} alt="Center Floor Exercise" />
        </picture>

        <h3><span style={{ color: 'darkslategrey' }}>{centerFloorExercise.name}</span></h3>

        <p>{centerFloorExercise.typeOfMovement}</p>

        <p>{centerFloorExercise.description}</p>

      </div>
    </div>
  );
}

export default CenterFloorExerciseDetail;