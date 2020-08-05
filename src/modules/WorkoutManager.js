const remoteURL = "http://localhost:8088"

export default {

  get(id) {
    return fetch(`${remoteURL}/Workouts/${id}`).then(result => result.json())
  },

  getAll() {
    return fetch(`${remoteURL}/Workouts`).then(result => result.json())
  },

  delete(id) {
    return fetch(`${remoteURL}/Workouts/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },

  post(newWorkout) {
      return fetch(`${remoteURL}/Workouts`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newWorkout)
      }).then(data => data.json())
  },

  update(editedWorkout) {
      return fetch(`${remoteURL}/Workouts/${editedWorkout.id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(editedWorkout)
      }).then(data => data.json());
  },

    completedWorkout(editedWorkout){
        return fetch(`${remoteURL}/Workouts/${editedWorkout.id}`,{
            method:"PATCH",
            body: JSON.stringify({
                completed: true 
            }),
            headers: {
                "Content-Type": "application/json"
            },
        }) .then(resp => resp.json());
    },

    getWithBarreExercises(id) {
        return fetch(`${remoteURL}/Workouts/${id}?_embed=barreExercises`)
                .then(result => result.json())
    },

    getWithCenterFloorExercises(id) {
        return fetch(`${remoteURL}/Workouts/${id}?_embed=centerFloorExercises`)
                .then(result => result.json())
    },

    getWorkoutsByUser(userId) {
        return fetch(`${remoteURL}/Workouts/?userId=${userId}`)
        .then(result => result.json())
    }


}