import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";

import UserList from "./user/UserList";

import WorkoutCard from "./workout/WorkoutCard";
import WorkoutList from "./workout/WorkoutList";
import WorkoutDetail from "./workout/WorkoutDetail"

import BarreExerciseList from "./barre/BarreExerciseList";
import BarreExerciseDetail from "./barre/BarreExerciseDetail";


import CenterFloorExerciseList from "./centerFloor/CenterFloorExerciseList"
import CenterFloorExerciseDetail from "./centerFloor/CenterFloorExerciseDetail"




const ApplicationViews = () => {
  return (
    <React.Fragment>

      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />

      <Route
        path="/Users"
        render={props => {
          return <UserList />;
        }}
      />

{/* Routes for Workouts */}

      <Route
        exact
        path="/Workouts"
        render={props => {
          return <WorkoutList />;
        }}
      />

      <Route 
        exact
        path="/Workouts/:workoutId(\d+)" 
        render={(props) => {
          return <WorkoutDetail 
            workoutId={parseInt(props.match.params.workoutId)}/>
          }} 
      />

{/* Routes For Completed Exercises */}

      <Route
        path="/CompletedWorkouts"
        render={props => {
          return <WorkoutCard />;
        }}
      />


{/* Routes For Barre Exercises */}

      <Route
        exact
        path="/BarreExercises"
        render={props => {
          return <BarreExerciseList />;
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
          return <CenterFloorExerciseList />;
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