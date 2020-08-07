import React, { useState, useEffect } from 'react';
import BarreExerciseCard from './BarreExerciseCard';
import BarreExerciseManager from '../../modules/BarreExerciseManager';

const BarreExerciseList = (props) => {
 
  const [barreExercises, setBarreExercises] = useState([]);
  const [search, setSearch] = useState("")
  const [filteredBarreExercises, setFilteredBarreExercises] = useState([])

  const getBarreExercises = () => {
    BarreExerciseManager.getAll("barreExercises")
      .then(barreExercisesFromAPI => {
      setBarreExercises(barreExercisesFromAPI)
    });
  };
 
  useEffect(() => {
    getBarreExercises();
  }, []);

  useEffect(() => {
    setFilteredBarreExercises(
      barreExercises.filter(barreExercise =>
        barreExercise.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, barreExercises]);

  return (
    <>
    <div>
      <input 
        type="text" 
        placeholder="Search Barre Exercises" 
        //getting value and setting it into state
        onChange={e => setSearch(e.target.value)}/>
      </div>

    <div className="container-cards">
      {filteredBarreExercises.map(barreExercise => 
        <BarreExerciseCard
          key={barreExercise.id}
          barreExercise={barreExercise} 
          {...props} 
          />)}

    </div>
    </>
  );
};

export default BarreExerciseList;