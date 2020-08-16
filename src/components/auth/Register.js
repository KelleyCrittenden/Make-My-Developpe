import React, { useState } from "react";
import UserManager from "../../modules/UserManager";

const Register = props => {
    const [credentials, setCredentails] = useState({ email: "", password: "" });

    const handleFieldChange = (e) => {
        const stateToChange = { ...credentials };
        stateToChange[e.target.id] = e.target.value;
        setCredentails(stateToChange)
    };

    const handleRegister = e => {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const confirmPassword = document.getElementById("confirmPassword").value

        e.preventDefault();

    UserManager.searchUser(credentials.email)
           .then(existingUserByEmail => {
                if (email === "" || password === "" || confirmPassword === "") {
                    window.alert("Please fill out fields")
                } else if (existingUserByEmail.length > 0) {
                    window.alert("Email already exist")
                } else if (password !== confirmPassword) {
                    window.alert("Passwords don't match")
                } else {
                    UserManager.createUser(credentials).then(() => {
                        sessionStorage.setItem("credentials", JSON.stringify(credentials))
                        props.history.push("/")
                    })
                }
            })
        }

    return (
        <div>
            <form>
                <fieldset>
                    <h3>New User? Register an Account</h3>

                    <div className="formgrid">

                        <label htmlFor="inputEmail">Email address</label>
                        <input 
                            onChange={handleFieldChange} 
                            type="email"
                            id="email"
                            placeholder="email@...com"

                        />

                        <label htmlFor="inputPassword">Password</label>
                        <input 
                            onChange={handleFieldChange} 
                            type="password"
                            id="password"
                            placeholder="password"
                         
                        />
                        
                        <label htmlFor="inputPassword">Confirm Password</label>
                        <input 
                            onChange={handleFieldChange} 
                            type="password"
                            id="confirmPassword"
                            placeholder="confirm password"
                          
                        />     

                    </div>
                    <div className="alignRight">
                    <button 
                        type="button"
                        id="login"
                        onClick={handleRegister}>
                        Create Account
                    </button>
                    </div>


                </fieldset>
            </form>
        </div>
    )

}
export default Register