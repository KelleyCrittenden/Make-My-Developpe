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
  }
}