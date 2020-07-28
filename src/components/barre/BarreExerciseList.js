import React, { useState, useEffect } from 'react';
import BarreExerciseCard from './BarreExerciseCard';
import BarreExerciseManager from '../../modules/BarreExerciseManager';

const BarreExerciseList = () => {
 
  const [barreExercises, setBarreExercises] = useState([]);

  const getBarreExercises = () => {

    return BarreExerciseManager.getAll()
      .then(barreExercisesFromAPI => {
      setBarreExercises(barreExercisesFromAPI)
    });
  };

 
  useEffect(() => {
    getBarreExercises();
  }, []);

 
  return (
    <div className="container-cards">
      {barreExercises.map(barreExercise => <BarreExerciseCard
                                              key={barreExercise.id}
                                              barreExercise={barreExercise} />)}
    </div>
  );
};

export default BarreExerciseList;