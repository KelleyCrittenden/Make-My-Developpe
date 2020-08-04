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
      //? method that finds anthing after the q
  searchUser(email) {
    return fetch(`${remoteURL}/Users?=${email}`)
    .then(result => result.json())
  },

  createUser: (newUser) => {
    return fetch(`${remoteURL}/Home`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
  }
}