import React, { useState } from 'react';
import PhotoUploadManager from "../../modules/PhotoUploadManager"
import "./PhotoUploadForm.css"


const PhotoUploadForm = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const [photoUpload, setPhotoUpload] = useState({ 
        userId: sessionStorage.credentials,
        name: "",
        date: "",
        url: "",
        description: ""
    });

    const handleFieldChange = e => {
        const stateToChange = { ...photoUpload };
        stateToChange[e.target.id] = e.target.value;
        setPhotoUpload(stateToChange)
    };

    const constructNewPhotoUpload = e => {
        e.preventDefault();
        if (
            photoUpload.name === "" || 
            photoUpload.date === "" || 
            photoUpload.description === "") {
            window.alert("Please fill out entire form");
        } else {
            photoUpload.userId=parseInt(photoUpload.userId)
            setIsLoading(true);
            PhotoUploadManager.post(photoUpload)
            .then(() => {
              console.log(photoUpload)
              props.history.push("/PhotoUploads")})
        } 
    }

    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', "developpe")
      setLoading(true)
      const res = await fetch(
        '	https://api.cloudinary.com/v1_1/kelleycrittenden/image/upload',
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json()
  
      setImage(file.secure_url)
      setPhotoUpload({...photoUpload, url: file.secure_url})
      PhotoUploadManager.getAll()
      setLoading(false)
    }
    


    return (
        <>
          <form>
            <fieldset>

              <div className="formgrid">

              <label htmlFor="name">Name: </label>

                <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="name"
                    placeholder="name"
                />


            <label htmlFor="date">Date: </label>

                <input
                    type="date"
                    required
                    onChange={handleFieldChange}
                    id="date"
                    placeholder="Date"
                />

            <label htmlFor="description">Description: </label>

                <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="description"
                    placeholder="description"
                />

            </div>
            <div className="alignRight">
{/* 
            <label htmlFor="url">Image: </label> */}
{/* <h3>Upload Image</h3> */}
                <input
                    type="file"
                    name="file"
                    id="url"
                    placeholder="Upload an image"
                    onChange={uploadImage}
                />
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <img src={image} style={{ width: '300px' }} />
                )}


              {/* <div className="alignRight"> */}

                <button
                  type="button"
                  disabled={isLoading}
                  onClick={constructNewPhotoUpload}
                >Submit</button>

              </div>

            </fieldset>
          </form>
        </>
      );
    };

export default PhotoUploadForm;