// import React, { useState, useEffect } from "react";
// import BarreExerciseManager from '../../modules/BarreExerciseManager';
// import "./BarreExercise.css";
// import BarreExerciseCard from "./BarreExerciseCard"

// const BarreExerciseSearch = (props) => {
// export default BarreExerciseSearch;    

// //         //putting search term into state
// //     const [ searchTerm, setSearchTerm ] = useState ({
// //         keywordSearch: ""
// //     })

// //     const [ barreExercisesArray, setBarreExercisesArray ] = useState([])

// //     const [ filteredExercises, setFilteredExercises] = useState([])
    
// //     const getFilteredExercises = (e) => {
// //         let searchEvent = e.target.value
// //         let filteredExercises = barreExercisesArray.filter(barreExercise => {
// //             let barreExerciseValue = Object.values(barreExercise)
// //             for (const barreExerciseEntry of barreExerciseValue) {
// //                 return barreExerciseValue.join().toLowerCase().includes(searchEvent.toLowerCase())
// //             }
// //         }) 
// //         if (searchEvent === "") {

// //             filteredExercises = []
// //         }
// //     } 
// //     setFilteredExercises(filteredExercises)
// // }

// // useEffect(() => {
// //     BarreExerciseManager.searchBarreExercises()
// //         .then(barreExercisesFromAPI => {
// //             setBarreExercisesArray(barreExercisesFromAPI)
// //         })
// // },[])

// // return (
// //     <>
// //     <h1>Search Barre Exercises: </h1>

// //     <div className="container-cards">
// //         <input
// //             type="text"
// //             name="keywordSearch"
// //             id="keywordSearch"
// //             onChange={getFilteredExercises}
// //             placeholers="enter name here..." />
// //     </div>
// //     <div>
// //         {filteredExercises && filteredExercises.map(exercise => {
// //             return 
// //             <BarreExerciseCard
// //             key={barreExercise.id}
// //             barreExercise={barreExercise} />}
// //         )}
// //     </div>
// //     </>
// // )

// export default BarreExerciseSearch;