import React, { useState, useEffect } from 'react';
import PhotoUploadManager from '../../modules/PhotoUploadManager';
import './PhotoUploadDetail.css'

const PhotoUploadDetail = props => {
  const [isLoading, setIsLoading] = useState(true);

  const [photoUpload, setPhotoUpload] = useState({ 
      name: "", 
      date: "", 
      description: "",
      image: "" 
    });

    useEffect(() => {
        PhotoUploadManager.get(props.photoUploadId)
        .then(photoUpload => {
            setPhotoUpload({
            name: photoUpload.name,
            date: photoUpload.date,
            description: photoUpload.description,
            image: photoUpload.image
            });
            setIsLoading(false);
        });
    }, [props.photoUploadId]);

  return (
    <div className="card">
      <div className="card-content">

      <picture>
          <img className="photoUploadImage" src={photoUpload.image} alt="Photo Upload" />
        </picture>

        <h3><span style={{ color: 'darkslategrey' }}>{photoUpload.name}</span></h3>

        <p>Date: {photoUpload.date}</p>

        <p>Description: {photoUpload.description}</p>

      </div>
    </div>
  );
}

export default PhotoUploadDetail;