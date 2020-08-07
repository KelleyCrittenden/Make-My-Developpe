import React, { useState, useEffect } from 'react';
import CenterFloorExerciseCard from './CenterFloorExerciseCard';
import CenterFloorExerciseManager from '../../modules/CenterFloorExerciseManager';

const CenterFloorExerciseList = (props) => {
 
  const [centerFloorExercises, setCenterFloorExercises] = useState([]);
  const [search, setSearch] = useState("")
  const [filteredCenterFloorExercises, setFilteredCenterFloorExercises] = useState([])

  const getCenterFloorExercises = () => {
    CenterFloorExerciseManager.getAll("centerFloorExercises")
      .then(centerFloorExercisesFromAPI => {
      setCenterFloorExercises(centerFloorExercisesFromAPI)
    });
  };
 
  useEffect(() => {
    getCenterFloorExercises();
  }, []);

  useEffect(() => {
    setFilteredCenterFloorExercises(
      centerFloorExercises.filter(centerFloorExercise =>
        centerFloorExercise.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, centerFloorExercises]);

  return (
    <>
    <div>
      <input 
        type="text" 
        placeholder="Search Center Floor Exercises" 
        //getting value and setting it into state
        onChange={e => setSearch(e.target.value)}/>
      </div>

    <div className="container-cards">
      {filteredCenterFloorExercises.map(centerFloorExercise => 
        <CenterFloorExerciseCard
          key={centerFloorExercise.id}
          centerFloorExercise={centerFloorExercise} 
          {...props} 
          />)}

    </div>
    </>
  );
};

export default CenterFloorExerciseList;