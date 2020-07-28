const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/CenterFloorExercises/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/CenterFloorExercises`).then(result => result.json())
  }
}