<img src= "/Images/Logo.png" width=320px>

### Make My Developpe


## Ballet Training and Progress Tracker

# Description: 
  Make My Developpe allows a user to build a virtual library of ballet training workouts, as well as track their progress via image uploads and reference a glossary of ballet terms.

# Purpose:
  When Covid-19 hit, our youngest daughter’s dance studio was closed. This left her training at home, mostly on her own, for months. During this time, she struggled to create, write out and keep track of her own ballet training workouts.


# To run this code:
  1. Clone it down

  2. Go to your terminal of choice and create a new folder
  
  3. Copy the SSH key in git hub
  
  4. In your terminal write: git clone git@github.com:KelleyCrittenden/Make-My-Developpe.git

  5. Launch from Terminal

  6. cd into make-my-developpe

  7. npm install

  8. npm start *If doesn't open automatically then paste http://localhost:3000 in your browser.

  9. Now Launch JSON file

  10. cd make-my-developpe/api

  11. json-server -p 8088 -w database.json

# Using this App:
 1. Login using credentials already provided in the 'database.json' Email: user@gmail.com, Password: 123
    <img src= "/Images/Login.png" width=320px>

 2. Workout Entries have been automatically generated.
    <img src= "/Images/WorkoutList.png" width=320px>
 
 3. Click on the Create New Workout button, use the form to create a new workout, press submit.
    <img src= "/Images/NewWorkoutForm.png" width=320px>

4. On the Workout Card, click the details button to view the workout details. Clicking the delete button will remove the workout from the database. This card will also display links to the glossary for the ballet move that was selected.
    <img src= "/Images/WorkoutDetails.png" width=320px>


5. Once a workout has been marked as completed it will appear in the completed workout area.
    <img src= "/Images/CompletedWorkoutList.png" width=320px>

6. To upload an image of your progress, click on My Progress in the nav bar. This will produce a list of generated progress cards. You can search these cards using the search bar, view details and delete the card.
    <img src= "/Images/ProgressList.png" width=320px>

7. To upload your own image, use the upload button to display the form. Once the form is complete click submit.
    <img src= "/Images/PhotoUploadForm.png" width=320px>

8. To view a glossary of ballet definitions, click the Glossary tab in the nav bar. This will produce a list terms that is searchable.
    <img src= "/Images/Glossary.png" width=320px>

9. Click the details button on a glossary card. This will pull up a description of the term.
    <img src= "/Images/GlossaryDetails.png" width=320px>

10. Click the logout button to end session.    


# Technologies Used
  * This project was bootstrapped with Create React App.
  * CSS
  * HTML
  * Javascript
  * Cloudinary

# Skills Utilized
  * API Calls: POST, PUT, DELETE, GET
  * JavaScript: Objects, Arrays, Functions, etc.
  * Persistent data storage with JSON server
  * Github Scrum workflow
  * CSS
  * Semantic HTML
  * React: hooks, props, routes
  * Modular code

