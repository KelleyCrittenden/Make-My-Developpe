import React from "react";
import "./User.css"

const UserCard = props => {
  return (
    <div className="card">
      <div className="card-content">

        <picture>
          <img className="userImage" src={require('./ballerina.jpeg')} alt="Pointe Shoes" />
        </picture>

        <h3>
          Name: <span className="card-userName">{props.user.name}</span>
        </h3>

        <p>Age: {props.user.age}</p>

        <p>Dance Studio: {props.user.danceStudio}</p>

        <p>Years of Experience: {props.user.experience}</p>

        <button 
          type="button"
          onClick={() => props.history.push(`/Users/${props.user.id}/Edit`)}>
          Edit
        </button>


        </div>
    </div>
  );
};

export default UserCard;
