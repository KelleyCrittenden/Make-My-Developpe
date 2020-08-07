import React, { useState, useEffect } from "react"
import UserManager from "../../modules/UserManager"

const Login = props => {
    const [credentials, setCredentials] = useState({ 
      userId:0 
    });

    const [users, setUsers] = useState([])

    const handleFieldChange = (e) => {
        const stateToChange = { ...credentials };
        stateToChange[e.target.id] = e.target.value;
        setCredentials(stateToChange);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const emailValue = document.getElementById("email").value
        const passwordValue = document.getElementById("password").value
        let emailCheck = false;
        let passwordCheck = false;

        users.forEach(
            user => {
                if(user.email === emailValue) {
                    emailCheck = true;
                    if (user.password === passwordValue) {
                        passwordCheck = true;
                        credentials.userId = user.id
                        props.setUser(credentials)
                        props.history.push("/Splash")
                        }
                }
            }) 
            if (emailCheck === true) {
            if (passwordCheck === false) {
                window.alert("Password is incorrect")
            }
        } else {
            window.alert("Username is incorrrect")
        }

    }

    useEffect (() => {
        UserManager.getAll()
        .then((response) => {
            setUsers(response)
        })
    },[])

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
                    onClick={handleLogin}
                    >Login
                </button>

        </fieldset>

    </form>
      
  );
};

export default Login;