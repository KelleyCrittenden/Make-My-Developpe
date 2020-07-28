const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/barreExercises/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/barreExercises`).then(result => result.json())
  }
}