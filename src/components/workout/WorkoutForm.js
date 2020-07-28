import React from "./node_modules/react";
import { Button, Form, Input } from "./node_modules/semantic-ui-react";
import "./node_modules/semantic-ui-css/semantic.min.css";


const WorkoutForm = () => {
    return (
        <Form>


            <label htmlFor="name">Name</label>
            <Input name="name" />

            <label htmlFor="date"> Date: </label>
            <input name="datetime" />
            <Button primary>Submit</Button>

            <label>Barre Exercise: </label>
            <div class="ui selection dropdown">
                <input type="hidden" name="barreId">
                    <i class="dropdown icon"></i>
                    <div class ="default text">Barre Exercise</div>
                        <div class="menu">

                        </div>
                </input>
            </div>
        
        </Form>
    )
}

export default WorkoutForm;