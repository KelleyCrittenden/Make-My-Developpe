import React from "react";
import { Link } from "react-router-dom";
import "./BarreExercise.css";

const BarreExerciseCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="barreExerciseImage" src={require("./barre-exercise.jpeg")} alt="Barre Exercise" />
        </picture>

        <h3>
          <span className="card-barreExerciseName">{props.barreExercise.name}</span>
        </h3>
 
            {/* Hyperlink button to detail page*/}
        <Link to={`/BarreExercises/${props.barreExercise.id}`}>
        <button>Details</button>
        </Link>

      </div>
    </div>
  );
};

export default BarreExerciseCard;

