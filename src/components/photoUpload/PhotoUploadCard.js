import React from "react";
import "./PhotoUpload.css"
import { Link } from "react-router-dom"

const PhotoUploadCard = props => {
  return (
    <div className="card">
      <div className="card-content">

        <picture>
          <img className="photoUploadImage" src={props.photoUpload.url} alt="Photo Upload Image" />
        </picture>

        <h3>
          <span className="card-photoUploadName">{props.photoUpload.name}</span>
        </h3>


        <Link to={`/PhotoUploads/${props.photoUpload.id}/Details`}>
          <button>Details</button> </Link>

    
              
        <button type="button" 
          onClick={() => props.deletePhotoUpload(props.photoUpload.id)}>
          Delete
        </button>
        

        <button 
            type="button"
            onClick={() => props.history.push(`/PhotoUploads/${props.photoUpload.id}/Edit`)}>
            Edit
        </button>


        </div>
    </div>
  );
};

export default PhotoUploadCard;
