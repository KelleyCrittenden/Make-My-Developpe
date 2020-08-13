import { Route, Redirect } from "react-router-dom";
import React from "react";

import Home from "./home/Home";
import Login from "./auth/Login"
import Register from "./auth/Register"

import PhotoUploadList from "./photoUpload/PhotoUploadList";
import PhotoUploadEditForm from "./photoUpload/PhotoUploadEditForm"
import PhotoUploadForm from "./photoUpload/PhotoUploadForm"
import PhotoUploadDetail from "./photoUpload/PhotoUploadDetail"

import WorkoutList from "./workout/WorkoutList";
import WorkoutForm from "./workout/WorkoutForm";
import WorkoutEditForm from "./workout/WorkoutEditForm"
import WorkoutCompletedList from "./workout/WorkoutCompletedList"
import WorkoutWithExercises from "./workout/WorkoutWithExercises"

import BarreExerciseList from "./barre/BarreExerciseList";
import BarreExerciseDetail from "./barre/BarreExerciseDetail";

import CenterFloorExerciseList from "./centerFloor/CenterFloorExerciseList";
import CenterFloorExerciseDetail from "./centerFloor/CenterFloorExerciseDetail";

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;


  return (
    <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Login {...props} 
          setUser={setUser} />;
          }}
        />

        <Route
          exact
          path="/"
          render={props => {
            return <Register {...props}
            setUser={setUser} />
          }}
        />

        <Route
          exact
          path="/Home"
          render={props => {
            if (hasUser) {
              return <Home {...props} />
            } else {
            return <Redirect exact to="/" />;
            }
          }}
        />


  {/* Routes for Photo Uploads */}

        <Route
          exact
          path="/PhotoUploads"
          render={props => {
            return <PhotoUploadList {...props}/>;
          }}
        />

        <Route 
          exact
          path="/PhotoUploads/New"
          render={(props) => {
            return <PhotoUploadForm {...props} />
          }}
        />

        <Route 
          exact
          path="/PhotoUploads/:photoUploadId(\d+)/Edit" 
          render={(props) => {
            return <PhotoUploadEditForm 
              photoUploadId={parseInt(props.match.params.photoUploadId)} {...props}/>
            }} 
        />

<Route 
          exact
          path="/PhotoUploads/:photoUploadId(\d+)/Details"
          render={(props) => {
            return <PhotoUploadDetail 
            photoUploadId={parseInt(props.match.params.photoUploadId)} {...props} />
          }}
        />

  {/* Routes for Workouts */}

        <Route
          exact
          path="/Workouts"
          render={props => {
            return <WorkoutList {...props}/>;
          }}
        />

        <Route
          exact
          path="/Workouts/:workoutId(\d+)/Details"
          render={(props) => {
            return <WorkoutWithExercises {...props} />
          }}
        />

        <Route 
          exact
          path="/Workouts/New"
          render={(props) => {
            return <WorkoutForm {...props} />
          }}
        />

        <Route 
          exact
          path="/Workouts/:workoutId(\d+)/Edit" 
          render={(props) => {
            return <WorkoutEditForm 
              workoutId={parseInt(props.match.params.workoutId)} {...props}/>
            }} 
        />

        <Route
          exact
          path="/CompletedWorkouts"
          render={props => {
            return <WorkoutCompletedList {...props}/>;
          }}
        />


  {/* Routes For Barre Exercises */}

        <Route
          exact
          path="/BarreExercises"
          render={props => {
            return <BarreExerciseList {...props}/>;
          }}
        /> 

        <Route 
          exact
          path="/BarreExercises/:barreExerciseId(\d+)"
          render={(props) => {
            return <BarreExerciseDetail 
            barreExerciseId={parseInt(props.match.params.barreExerciseId)}/>
          }}
        />


  {/* Routes for Center Floor Exercises */}
        <Route
          exact
          path="/CenterFloorExercises"
          render={props => {
            return <CenterFloorExerciseList {...props} />;
          }}
        />

        <Route 
          exact
          path="/CenterFloorExercises/:centerFloorExerciseId(\d+)"
          render={(props) => {
            return <CenterFloorExerciseDetail 
            centerFloorExerciseId={parseInt(props.match.params.centerFloorExerciseId)}/>
          }}
        />

    </React.Fragment>
  );
};

export default ApplicationViews;