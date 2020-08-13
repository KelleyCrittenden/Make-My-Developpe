import React, { useState, useEffect } from "react"
import PhotoUploadManager from "../../modules/PhotoUploadManager"
import "./PhotoUploadEditForm.css"

const PhotoUploadEditForm = props => {

  const [photoUpload, setPhotoUpload] = useState({ 
      userId: "",
      name: "", 
      date: "", 
      description: "", 
      image: ""
    });

  const [isLoading, setIsLoading] = useState(false);

  const [loading, setLoading] = useState(false)

  const [image, setImage] = useState('')

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'developpe')
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
    setLoading(false)
  }

  const handleFieldChange = e => {
    const stateToChange = { ...photoUpload };
    stateToChange[e.target.id] = e.target.value;
    setPhotoUpload(stateToChange);
  };

  const updateExistingPhotoUpload = e => {
    e.preventDefault()
    setIsLoading(true);

    
    const editedPhotoUpload = {
      id: props.match.params.photoUploadId,
      userId: parseInt(photoUpload.userId),
      name: photoUpload.name,
      date: photoUpload.date,
      description: photoUpload.description,
      image: photoUpload.image
    };

    PhotoUploadManager.update(editedPhotoUpload)
      .then(() => props.history.push("/PhotoUploads"))
  }

  useEffect(() => {
    PhotoUploadManager.get(props.match.params.photoUploadId)
      .then(photoUpload => {
        setPhotoUpload(photoUpload);
        setIsLoading(false);
      });
  }, [props.match.params.photoUploadId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">

          <h1>Upload Image</h1>
            <input
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={uploadImage}
            />
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              <img src={image} style={{ width: '300px' }} />
            )}

            <input type="hidden"
            id="userId"
            value={photoUpload.userId} />



            <label htmlFor="name">Name: </label>

                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="name"
                    value={photoUpload.name}
                />

            <label htmlFor="date">Date: </label>

                <input
                    type="date"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="date"
                    value={photoUpload.date}
                />

            <label htmlFor="Description">Description: </label>

                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="description"
                    value={photoUpload.description}
                />

          </div>

          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingPhotoUpload}
              className="btn btn-primary"
            >Submit</button>

          </div>

        </fieldset>
      </form>
    </>
  );
}

export default PhotoUploadEditForm