import React, { useState, useEffect } from 'react';
import CenterFloorExerciseManager from '../../modules/CenterFloorExerciseManager';
import './CenterFloorExerciseDetail.css'

const CenterFloorExerciseDetail = props => {
  const [centerFloorExercise, setCenterFloorExercise] = useState({ 
      name: "", 
      typeOfMovement: "", 
      description: "" 
    });

  useEffect(() => {

    CenterFloorExerciseManager.get(props.centerFloorExerciseId)
      .then(centerFloorExercise => {
        setCenterFloorExercise({
          name: centerFloorExercise.name,
          typeOfMovement: centerFloorExercise.typeOfMovement,
          description: centerFloorExercise.description
        });
      });
  }, [props.centerFloorExerciseId]);

  return (
    <div className="card">
      <div className="card-content">

        <picture>
          <img src={require('./center-floor-exercise.jpeg')} alt="Center FLoor Exercise" />
        </picture>

        <h3><span style={{ color: 'darkslategrey' }}>{centerFloorExercise.name}</span></h3>

        <p>Type Of Movement: {centerFloorExercise.typeOfMovement}</p>

        <p>Description: {centerFloorExercise.description}</p>

      </div>
    </div>
  );
}

export default CenterFloorExerciseDetail;