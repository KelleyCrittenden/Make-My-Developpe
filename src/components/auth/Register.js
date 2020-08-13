import React, { useState } from "react"
import UserManager from "../../modules/UserManager"

const Register = props => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        name: "",
    });

    const [users, setUsers] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = (e) => {
        const stateToChange = { ...credentials };
        stateToChange[e.target.id] = e.target.value;
        setCredentials(stateToChange);
    };

    const createUser = e => {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const confirmPassword = document.getElementById("confirmPassword").value
        let emailCheck = true
        e.preventDefault();


        UserManager.getAll("users")
            .then((users) => {
                users.map((user) => {
                if (user.email !== email && password === confirmPassword && password !== "") {

                    setIsLoading(true);
                    UserManager.createUser(credentials)
                        .then(() => {
                            sessionStorage.setItem("credentials", JSON.stringify(credentials))
                            props.history.push("/Workouts")
                        });
                        
                    } else {
                            window.alert("Passwords do not Match")
                    }
                })
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
                        disabled={isLoading}
                        onClick={createUser}>
                        Create Account
                    </button>
                    </div>


                </fieldset>
            </form>
        </div>
    )

}
export default Register