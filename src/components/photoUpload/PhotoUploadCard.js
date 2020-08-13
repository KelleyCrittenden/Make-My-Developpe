import React from "react";
import "./PhotoUpload.css"

const PhotoUploadCard = props => {
  return (
    <div className="card">
      <div className="card-content">

        <picture>
          <img className="photoUploadImage" src={props.photoUpload.image} alt="Photo Upload Image" />
        </picture>

        <h3>
          <span className="card-photoUploadName">{props.photoUpload.name}</span>
        </h3>

        <p>Date: {props.photoUpload.date}</p>

        <p>Description: {props.photoUpload.description}</p>

        <button 
          type="button"
          onClick={() => props.history.push(`/PhotoUploads/${props.photoUpload.id}/Details`)}>
          Details
        </button>


        </div>
    </div>
  );
};

export default PhotoUploadCard;
