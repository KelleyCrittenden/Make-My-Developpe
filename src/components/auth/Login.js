import React, { useState } from "react"
import UserManager from "../../modules/UserManager"

const Login = props => {

    

  const [credentials, setCredentials] = useState({ 
      email: "", 
      password: "" 
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = (e) => {
    const stateToChange = { ...credentials };
    stateToChange[e.target.id] = e.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    UserManager.searchUser(credentials.email)
        .then((existingEmail) => {
                    //making sure all input fields are filled if not window alert
             if(!credentials.email || !credentials.password) {
                window.alert("Please fill out name and password")
                    //asking database to retrieve object that matches 
            }else if (existingEmail.length === 0) {
                window.alert("Please Create an Account")
            }else {
                props.setUser(existingEmail[0].id) 
                props.history.push("/Users")
            }
        })
    }

  return (

    <form>

        <fieldset>

            <h3>Please sign in</h3>
                <div className="formgrid">

                    <label htmlFor="inputEmail">Email address</label>

                    <input 
                        onChange={handleFieldChange} 
                        type="email"
                        id="email"
                        placeholder="Email address"
                        autoFocus=""
                    />

                    <label htmlFor="inputPassword">Password</label>

                    <input 
                        onChange={handleFieldChange}
                        type="password"
                        id="password"
                        placeholder="Password"
                    />

                </div>

                <button 
                    type="button"
                    disabled={isLoading}
                    onClick={handleLogin}
                    >Login
                </button>

        </fieldset>

    </form>
      
  );
};

export default Login;