import React, { useState, useEffect } from 'react';
import BarreExerciseCard from './BarreExerciseCard';
import BarreExerciseManager from '../../modules/BarreExerciseManager';
import CenterFloorExerciseManager from "../../modules/CenterFloorExerciseManager"
import CenterFloorExerciseCard from "../centerFloor/CenterFloorExerciseCard"

const BarreExerciseList = (props) => {
 
  const [barreExercises, setBarreExercises] = useState([]);
  const [centerFloorExercises, setCenterFloorExercises] = useState([]);
  const [search, setSearch] = useState("")
  const [filteredBarreExercises, setFilteredBarreExercises] = useState([])
  const [filteredCenterFloorExercises, setFilteredCenterFloorExercises] = useState([])

  const getBarreExerciseList = () => {
    BarreExerciseManager.getAll("barreExercises")
      .then(barreExercisesFromAPI => {
      setBarreExercises(barreExercisesFromAPI)
    });
  };

  const getCenterFloorExerciseList = () => {
    CenterFloorExerciseManager.getAll("centerFloorExercises")
    .then(centerFloorExercisesFromAPI => {
      setCenterFloorExercises(centerFloorExercisesFromAPI);
    });
  }
 
  useEffect(() => {
    getBarreExerciseList();
    getCenterFloorExerciseList();
  },[])

  useEffect(() => {
    setFilteredBarreExercises(
      barreExercises.filter(barreExercise =>
        barreExercise.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, barreExercises]);

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
           Search Glosary: 
        <input className="searchBar"
          type="text" 
          placeholder="type here..." 
          //getting value and setting it into state
          onChange={e => setSearch(e.target.value)}/>
     

        <div className="container-cards">
          {filteredBarreExercises.map(barreExercise => 
            <BarreExerciseCard
              key={barreExercise.id}
              barreExercise={barreExercise} 
              {...props} 
              />)}
        </div>

        <div className="container-cards">
          {filteredCenterFloorExercises.map(centerFloorExercise => 
            <CenterFloorExerciseCard
              key={centerFloorExercise.id}
              centerFloorExercise={centerFloorExercise} 
              {...props} 
              />)}
        </div>

      </div>
    </>
  );
};

export default BarreExerciseList;