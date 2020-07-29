const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`)
    .then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/users`)
    .then(result => result.json())
  },

  update(editedUser) {
    return fetch(`${remoteURL}/Users/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUser)
    }).then(data => data.json());
  },

  searchUser(name) {
    return fetch(`${remoteURL}/Users/?&q=${name}`)
    .then(result => result.json())
  }
}