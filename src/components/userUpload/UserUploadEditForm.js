import React, { useState, useEffect } from "react"
import UserManager from "../../modules/UserManager"
import "./UserEditForm.css"

const UserEditForm = props => {
  const [userUpload, setUserUpload] = useState({ 
      userId: "",
      name: "", 
      date: "", 
      description: "", 
      image: ""});

  const [isLoading, setIsLoading] = useState(false);
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
    const stateToChange = { ...user };
    stateToChange[e.target.id] = e.target.value;
    setUser(stateToChange);
  };

  const updateExistingUser = e => {
    e.preventDefault()
    setIsLoading(true);

    
    const editedUser = {
      id: props.match.params.userId,
      userId: parseInt(userUpload.userId),
      name: userUpload.name,
      date: userUpload.date,
      description: userUpload.description
    };

    UserManager.update(editedUser)
      .then(() => props.history.push("/Users"))
  }

  useEffect(() => {
    UserManager.get(props.match.params.userId)
      .then(user => {
        setUser(user);
        setIsLoading(false);
      });
  }, []);

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
            value={userUpload.userId} />



            <label htmlFor="name">Name: </label>

                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="name"
                    value={userUpload.name}
                />

            <label htmlFor="age">Date: </label>

                <input
                    type="date"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="age"
                    value={userUpload.date}
                />

            <label htmlFor="danceStudio">Description: </label>

                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="danceStudio"
                    value={userUpload.description}
                />

          </div>

          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingUser}
              className="btn btn-primary"
            >Submit</button>

          </div>

        </fieldset>
      </form>
    </>
  );
}

export default UserEditForm