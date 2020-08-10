import React, { useState } from "react"
import UserManager from "../../modules/UserManager"

const Register = props => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        name: "",
        age: "",
        danceStudio: "",
        experience: ""
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
        const age = document.getElementById("age").value
        const danceStudio = document.getElementById("danceStudio").value
        const name = document.getElementById("name").value
        const experience = document.getElementById("experience").value
        let emailCheck = true
        e.preventDefault();
        //console.log("credentials", credentials)


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

                        <label htmlFor="inputUserName">Name</label>
                        <input  
                            onChange={handleFieldChange} 
                            type="text"
                            id="name"
                            placeholder="name"
                           
                        />

                        <label htmlFor="inputUserName">Age</label>
                        <input  
                            onChange={handleFieldChange} 
                            type="text"
                            id="age"
                            placeholder="age"
                          
                        />

                        <label htmlFor="inputUserName">Dance Studio</label>
                        <input  
                            onChange={handleFieldChange} 
                            type="text"
                            id="danceStudio"
                            placeholder="dance studio"
                          
                        />

                        <label htmlFor="inputUserName">Years of Experience</label>
                        <input  
                            onChange={handleFieldChange} 
                            type="text"
                            id="experience"
                            placeholder="years of experience"
                          
                        />

                    </div>

                    <button 
                        type="button"
                        disabled={isLoading}
                        onClick={createUser}>
                        Create Account
                    </button>


                </fieldset>
            </form>
        </div>
    )

}
export default Register