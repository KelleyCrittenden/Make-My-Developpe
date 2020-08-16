const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/PhotoUploads/${id}`)
    .then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/PhotoUploads`)
    .then(result => result.json())
  },

  delete(id) {
    return fetch(`${remoteURL}/PhotoUploads/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },

  update(editedPhotoUpload) {
    return fetch(`${remoteURL}/PhotoUploads/${editedPhotoUpload.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPhotoUpload)
    }).then(data => data.json());
  },

  post(newPhotoUpload) {
    return fetch(`${remoteURL}/PhotoUploads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPhotoUpload)
    })
  },
  
  getPhotoUploadsByUser(userId) {
    return fetch(`${remoteURL}/PhotoUploads/?userId=${userId}`)
    .then(result => result.json())
}

}