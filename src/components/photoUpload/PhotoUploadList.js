import React, { useState, useEffect } from 'react';
import PhotoUploadCard from './PhotoUploadCard';
import PhotoUploadManager from '../../modules/PhotoUploadManager';

const PhotoUploadList = props => {

  const [photoUploads, setPhotoUploads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getPhotoUploadsByUser = () => {
    return PhotoUploadManager.getPhotoUploadsByUser(parseInt(sessionStorage.getItem("credentials")))
    .then(photoUploadsFromAPI => {
      setPhotoUploads(photoUploadsFromAPI)
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getPhotoUploadsByUser();
        
}, []);

  return (
    <>
    <section className="section-content">
      <button type="button"
              className="btn"
              onClick={() => {props.history.push("/PhotoUploads/New")}}>
              Upload Photo or Video
      </button>
    </section>

    <div className="container-cards">
      {photoUploads.map(photoUpload => <PhotoUploadCard 
                                        key={photoUpload.id}
                                        photoUpload={photoUpload}
                                        id={photoUpload.id}
                                        {...props}/>)}
    </div>
    </>
  );
};
export default PhotoUploadList