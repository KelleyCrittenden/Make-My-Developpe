import React, { useState, useEffect } from 'react';

import CenterFloorExerciseCard from './CenterFloorExerciseCard';
import CenterFloorExerciseManager from '../../modules/CenterFloorExerciseManager';

const CenterFloorExerciseList = () => {

  const [centerFloorExercises, setCenterFloorExercises] = useState([]);

  const getCenterFloorExercises = () => {

    return CenterFloorExerciseManager.getAll()
        .then(centerFloorExercisesFromAPI => {
        setCenterFloorExercises(centerFloorExercisesFromAPI)
    });
  };

  useEffect(() => {
    getCenterFloorExercises();
  }, []);

 
  return (
    <div className="container-cards">
      {centerFloorExercises.map(centerFloorExercise => <CenterFloorExerciseCard 
                                                        key={centerFloorExercises.id}
                                                        centerFloorExercise={centerFloorExercise}/>)}
    </div>
  );
};
export default CenterFloorExerciseList