import React, { useState, useEffect } from 'react';
import PhotoUploadCard from './PhotoUploadCard';
import PhotoUploadManager from '../../modules/PhotoUploadManager';
import "./PhotoUpload.css"

const PhotoUploadList = props => {

  const [photoUploads, setPhotoUploads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("")
  const [filteredPhotoUploads, setFilteredPhotoUploads] = useState([])

  const deletePhotoUpload= id => {
    PhotoUploadManager.delete(id)
      .then(() => PhotoUploadManager.getAll().then(setPhotoUploads));
  };


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

useEffect(() => {
  setFilteredPhotoUploads(
    photoUploads.filter(photoUpload =>
      photoUpload.name.toLowerCase().includes(search.toLowerCase())
      )
  )
}, [search, photoUploads]);

  return (
    <>
    <section className="section-content">
      <button type="button"
              className="button"
              onClick={() => {props.history.push("/PhotoUploads/New")}}>
              Upload Photo or Video
      </button>
    </section>

    <section className="section-content">
    <input className="searchBar"
      type="text" 
      placeholder="Search Uploads here..." 
      //getting value and setting it into state
      onChange={e => setSearch(e.target.value)}/>
      </section>

    <div className="container-cards">
      {filteredPhotoUploads.map(photoUpload => 
        <PhotoUploadCard 
          key={photoUpload.id}
          photoUpload={photoUpload}
          deletePhotoUpload={deletePhotoUpload}
          id={photoUpload.id}
          {...props}/>)}
    </div>
    </>
  );
};
export default PhotoUploadList