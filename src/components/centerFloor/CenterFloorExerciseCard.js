import React from "react";
import { Link } from "react-router-dom";
import "./CenterFloorExercise.css";

const CenterFloorExerciseCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="centerFLoorExerciseImage" src={require("./center-floor-exercise.jpeg")} alt="Center Floor Exercise" />
        </picture>

        <h3>
          <span className="card-centerFloorExerciseName">{props.centerFloorExercise.name}</span>
        </h3>
 
            {/* Hyperlink button to detail page*/}
        <Link to={`/CenterFloorExercises/${props.centerFloorExercise.id}`}>
        <button>Details</button>
        </Link>

      </div>
    </div>
  );
};

export default CenterFloorExerciseCard;