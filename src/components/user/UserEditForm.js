import React, { useState, useEffect } from "react"
import UserManager from "../../modules/UserManager"
import "./UserEditForm.css"

const UserEditForm = props => {
  const [user, setUser] = useState({ 
      email: "",
      password: "",
      name: "", 
      age: "", 
      danceStudio: "", 
      experience: ""});

  const [isLoading, setIsLoading] = useState(false);

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
      email: user.email,
      password: user.password,
      name: user.name,
      age: user.age,
      danceStudio: user.danceStudio,
      experience: user.experience
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

          <label htmlFor="name">Email: </label>

                  <input
                      type="text"
                      required
                      className="form-control"
                      onChange={handleFieldChange}
                      id="name"
                      value={user.email}
                  />


          <label htmlFor="name">Password: </label>

                  <input
                      type="password"
                      required
                      className="form-control"
                      onChange={handleFieldChange}
                      id="name"
                      value={user.password}
                  />

            <label htmlFor="name">Name: </label>

                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="name"
                    value={user.name}
                />

            <label htmlFor="age">Age: </label>

                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="age"
                    value={user.age}
                />

            <label htmlFor="danceStudio">Dance Studio: </label>

                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="danceStudio"
                    value={user.danceStudio}
                />

            <label htmlFor="experience">Years of Exerpience: </label>

            <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="experience"
                value={user.experience}
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